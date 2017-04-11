class AddTopicstoStories < ActiveRecord::Migration[5.0]
  def change
    add_column :stories, :topic, :string
  end
end
