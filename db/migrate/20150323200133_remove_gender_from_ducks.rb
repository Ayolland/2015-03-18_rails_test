class RemoveGenderFromDucks < ActiveRecord::Migration
  def up
  end
  
  def change
    remove_column :ducks, :gender
    add_column :ducks, :gender, :string, default: "other"
  end

  def down
  end
end
