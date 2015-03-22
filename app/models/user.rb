class User < ActiveRecord::Base
  attr_accessible :name, :password, :password_confirmation, :email
  
  has_secure_password
  has_many :likes
  has_many :ducks, through: :likes
  
  validates :name, presence: true, uniqueness: true 
  validates :email, presence: true, uniqueness: true #has @ and . ?
  validates :password, presence: true, length: {minimum: 6}, confirmation: true
  
  # WHY NOT use rspec?
end