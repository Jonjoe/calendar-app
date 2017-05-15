class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
			t.text :name
			t.text :description
			t.datetime :day
			t.integer :slot
      t.timestamps
    end
  end
end
