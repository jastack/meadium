class CreateStories < ActiveRecord::Migration[5.0]
  def change
    create_table :stories do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.string :author_id, null: false
      t.string :image_url

      t.timestamps
    end
    add_index :stories, [:title, :author_id]
  end
end
