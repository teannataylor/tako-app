class Developer < ApplicationRecord
    has_secure_password
    has_many :developer_projects
    has_many :projects, through: :developer_projects
    has_many :tasks, through: :projects
  
    validates :name, presence: true
    validates :email, presence: true
    validates :is_admin, inclusion: { in: [true, false] }
  end