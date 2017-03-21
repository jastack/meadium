class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.integer :story_id, null: false
      t.integer :user_id, null: false
      t.text :comment, null: false

      t.timestamps
    end
    add_index :comments, [:story_id, :user_id]
  end
end
