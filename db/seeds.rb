# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

Developer.destroy_all
Project.destroy_all
Task.destroy_all
DeveloperProject.destroy_all

# Developer Data
developers = []

15.times do
  name = Faker::Name.unique.name
  email = "#{name.downcase.gsub(' ', '_')}@takoappi.com"
  developer = Developer.create(
    name: name,
    email: email,
    password: '12345',
    is_admin: [true, false].sample
  )
  developers << developer
end

# Create projects and assign 1 to 3 developers to each project
projects = []

8.times do
  project = Project.create(
    name: Faker::App.name,
    description: Faker::Lorem.paragraph,
    due_date: Faker::Time.between(from: DateTime.now, to: 1.year.from_now)
  )

  num_developers = rand(2..4)
  developers.sample(num_developers).each do |developer|
    DeveloperProject.create(developer: developer, project: project)
  end

  projects << project
end

# Create tasks for each project
projects.each do |project|
  developers = project.developers.to_a

  num_tasks = rand(3..7)
  num_tasks.times do
    task = Task.create(
      name: Faker::Lorem.sentence,
      description: Faker::Lorem.paragraph,
      due_date: Faker::Time.between(from: DateTime.now, to: 1.year.from_now),
      is_completed: [true, false].sample,
      project: project,
      developer: developers.sample
    )
  end
end

puts 'Did the seed grow?'