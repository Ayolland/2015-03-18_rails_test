class AddJoinTable < ActiveRecord::Migration
  def up
  end
  
  def change
    create_table :likes do |t|
      t.integer :duck_id
      t.integer :user_id
    end
    
    add_index :likes, [:duck_id, :user_id]
    
  end

  def down
  end
end
