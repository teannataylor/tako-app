class Project < ApplicationRecord
    has_many :developer_projects
    has_many :developers, through: :developer_projects
    has_many :tasks
  
    validates :name, presence: true

  end