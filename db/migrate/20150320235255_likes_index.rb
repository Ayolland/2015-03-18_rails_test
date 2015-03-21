class LikesIndex < ActiveRecord::Migration
  def up
  end
  
  def change
    add_index :likes, :id
  end

  def down
  end
end
