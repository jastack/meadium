# == Schema Information
#
# Table name: follows
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Follow < ApplicationRecord

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :stories,
    through: :author,
    source: :stories

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
