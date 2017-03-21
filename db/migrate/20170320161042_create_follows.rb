class CreateFollows < ActiveRecord::Migration[5.0]
  def change
    create_table :follows do |t|
      t.integer :author_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :follows, [:author_id, :user_id]
  end
end
