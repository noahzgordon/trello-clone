class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :title
      t.integer :list_id
      t.text :description
      t.float :ord

      t.timestamps
    end
  end
end
