class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
			t.datetime :date 
			t.integer :timeslot
			t.text :name
			t.text :description
			t.timestamps
    end
  end
end
