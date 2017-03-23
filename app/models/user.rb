# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  avatar_url      :string
#  description     :text
#

class User < ApplicationRecord
  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: :true

  has_many :stories,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Story

  has_many :likes,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Like

  has_many :followers,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Follow

  has_many :following,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Follow

  has_many :comments,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Comment

  has_many :following_authors,
    through: :following,
    source: :author


  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  def feeds(user_id)
    following_array = User.find(user_id).following
    following_author_id = following_array.map(&:author_id)
    return Story.where(author_id: following_author_id)
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.password_is?(password) ? user : nil
  end

  def password_is?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = new_session_token
    ensure_session_token_uniqueness
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= new_session_token
  end

  def new_session_token
    SecureRandom.base64
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
  end

end
