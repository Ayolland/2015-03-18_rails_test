class CreateTables < ActiveRecord::Migration
  def change
    create_table :ducks do |t|
      t.text :name
      t.text :description
      t.integer :age
      t.integer :gender
      
      t.timestamps
    end
  end

end
