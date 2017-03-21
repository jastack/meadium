# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  story_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
  validates :story_id, :user_id, presence: true

  belongs_to :story,
    primary_key: :id,
    foreign_key: :story_id,
    class_name: :Story

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
