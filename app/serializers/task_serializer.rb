class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :due_date, :is_completed
  belongs_to :developer
  belongs_to :project
end
