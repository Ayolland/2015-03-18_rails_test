class Duck < ActiveRecord::Base
  attr_accessible :name, :description, :age, :gender
  
  has_and_belongs_to_many :users
  
  validates :name, presence: true
  validates :age, presence: true
  validates :gender, numericality: {only_integer: true, less_than: 3}
end
