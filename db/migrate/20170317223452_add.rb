class Add < ActiveRecord::Migration[5.0]
  def change
    add_column :stories, :subtitle, :text
  end
end
