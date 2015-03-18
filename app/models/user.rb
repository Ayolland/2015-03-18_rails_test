class User < ActiveRecord::Base
  attr_accessible :name, :password, :password_confirmation, :permission
  
  has_many :ducks
  
  validates :name, presence: true
  validates :password, presence: true, length: {minimum: 6}, confirmation: true
  validates :permission, numericality: {only_integer: true, less_than: 3}
end