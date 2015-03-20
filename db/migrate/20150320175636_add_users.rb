class AddUsers < ActiveRecord::Migration
  def up
  end

  def change
    drop_table :users
  end

  def change
    create_table :users do |t|
      t.text :name
      t.text :email
      t.text :password_digest
      
      t.timestamps
    end
  end

  def down
  end
end
