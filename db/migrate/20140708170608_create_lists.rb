class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.string :title, null: false
      t.integer :board_id, null: false
      t.float :ord, default: 0

      t.timestamps
    end
    add_index :lists, :board_id
  end
end
