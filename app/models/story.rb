# == Schema Information
#
# Table name: stories
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :text             not null
#  author_id  :string           not null
#  image_url  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  subtitle   :text
#  likes      :integer
#  topic_id   :integer
#

class Story < ApplicationRecord
  validates :title, :body, :author_id, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: User

  has_many :likes,
    primary_key: :id,
    foreign_key: :story_id,
    class_name: :Like

  has_many :comments,
    primary_key: :id,
    foreign_key: :story_id,
    class_name: :Comment

  belongs_to :topic,
    primary_key: :id,
    foreign_key: :topic_id,
    class_name: :Topic

end
