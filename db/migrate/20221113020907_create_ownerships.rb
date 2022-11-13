class CreateOwnerships < ActiveRecord::Migration[6.1]
  def change
    create_table :ownerships do |t|
      t.integer :level
      t.belongs_to :pokemon, null: false, foreign_key: true

      t.timestamps
    end
  end
end
