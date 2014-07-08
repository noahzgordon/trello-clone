class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title, null: false
      t.integer :card_id, null: false
      t.boolean :done, default: false

      t.timestamps
    end

    add_index :items, :card_id
  end
end
