class AddUsersIntoDatabase < ActiveRecord::Migration
  def up
  end

  create_table :users do |t|
    t.text :name
    t.text :password
    t.integer :permission
    
    t.timestamps
  end

  def down
  end
end
