class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :due_date
  has_many :developers
  has_many :tasks
end
