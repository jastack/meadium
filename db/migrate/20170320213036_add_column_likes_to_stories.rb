class AddColumnLikesToStories < ActiveRecord::Migration[5.0]
  def change
    add_column :stories, :likes, :integer
  end
end
