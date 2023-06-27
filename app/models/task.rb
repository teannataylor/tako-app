class Task < ApplicationRecord
  belongs_to :developer
  belongs_to :project

  validates :name, presence: true

end


#validates is a method provided by Rails for defining validations
#on model attributes

#inclusion: specifies that the attribute's value must be included in the array
# i.e [true,false]