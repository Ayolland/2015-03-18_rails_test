class Like < ActiveRecord::Base
  attr_accessible :user_id, :duck_id
  
  belongs_to :user
  belongs_to :duck
  
  # validates_associated :user #WHY NOT??
  validates_associated :duck
end