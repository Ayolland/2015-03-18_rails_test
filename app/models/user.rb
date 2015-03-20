class User < ActiveRecord::Base
  attr_accessible :name, :password, :password_confirmation
  
  has_secure_password
  has_and_belongs_to_many :ducks
  
  validates :username, presence: true, uniqueness: true 
  validates :email, presence: true, uniqueness: true #has @ and . ?
  validates :password, presence: true, length: {minimum: 6}, confirmation: true
end