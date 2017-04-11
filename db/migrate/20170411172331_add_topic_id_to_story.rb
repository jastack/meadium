class AddTopicIdToStory < ActiveRecord::Migration[5.0]
  def change
    add_column :stories, :topic_id, :integer
  end
end
