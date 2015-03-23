class Duck < ActiveRecord::Base
  attr_accessible :name, :description, :age, :gender
  
  has_many :likes
  has_many :users, through: :likes
  
  validates :name, presence: true
  
  def names_of_users
    self.likes.map{|like| User.find(like.user_id).name}
  end
  
  def names_of_users_short
    other_num = self.names_of_users.length - 1
    example_user = self.names_of_users.sample
    other_str = other_num > 1 ? " others." : " other."
    return "no one" if example_user == nil
    return example_user if other_num == 0
    example_user + " and " + other_num.to_s + other_str
  end
  
  def liked_by?(user_id)
    return false if user_id == nil
    self.users.include?(User.find(user_id))
  end
  
end
