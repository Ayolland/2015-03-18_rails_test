class Duck < ActiveRecord::Base
  attr_accessible :name, :description, :age, :gender
  
  validates :name, presence: true
  validates :age, presence: true
  validates :gender, numericality: {only_integer: true, less_than: 3}
end
