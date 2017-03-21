# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  story_id   :integer          not null
#  user_id    :integer          not null
#  comment    :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :story_id, :user_id, :comment, presence: true

  belongs_to :story,
    primary_key: :id,
    foreign_key: :story_id,
    class_name: :Story
    
end
