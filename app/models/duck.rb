class Duck < ActiveRecord::Base
  attr_accessible :name, :description, :age, :gender
  
  has_many :likes
  has_many :users, through: :likes
  
  validates :name, presence: true
  validates :age, presence: true
  validates :gender, numericality: {only_integer: true, less_than: 3}
  
  def names_of_users
    self.likes.map{|like| User.find(like.user_id).name}
  end
  
  def liked_by?(user_id)
    return false if user_id == nil
    self.users.include?(User.find(user_id))
  end
  
end
