class DeveloperSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :is_admin, :password_digest
  has_many :projects
  has_many :tasks
end
