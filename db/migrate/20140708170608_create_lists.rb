class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.string :title
      t.integer :board_id
      t.float :ord

      t.timestamps
    end
  end
end
