Tako - Financial Project Management App


FULL CRUD on Accounts // can create profile for user 
Read & Create for every other model

Example:
At least one reciprocal many-to-many relationship (implemented by using 2 has-many-through relationships)

    [Student]
    has_many :schedules
    has_many :courses, through: :schedules

    [Schedule]
    belongs_to :student
    belongs_to :course

    [courses]
    has_many :schedules, dependent: :destroy
    has_many :students, through: :schedules


___________________________________________________________________________

    [User/Developers]
    has_many :projects
    has_many :Tasks through: :Projects
    
    [Projects ]
    user_id
    category_id
    belongs_to :User
    belongs_to :category

    [Tasks(?)]
    has_many :users, through: accounts

[Developer]
:id - primary key
:name
:is_admin? (i.e developer or manager)
:user_name or :email
:password_digest

[Project]
:id - primary key
:name
:due_date

[Task]
:id - primary key 
:name
:is_completed?

[Notes]
:id - primary key
:content
:task_id (foreign key referencing tasks)

[developers_projects]
id(primary key)
developer_id
project_id

[projects_tasks]
id(primary key)
project_id
task_id


Functions: Developer Project Planner 

Users should only be able to view accounts/transactions after logging in
Now that a user is logged in, they can update,create, delete, or review transactions & accounts that they have access to
Admins -- can delete other users? has access over everything??


[Components - FrontEnd]
User Context component
Login Component
LoginForm
Home 
Category Toggle
AccountsList
TransactionList
NewTransaction
NewAccount
App
NavBar
Create Transaction/Account Form
SignUp Form
UserDashboard --(may be tied into homepage??)

[Backend info]

[Account]
user_id
category_id
status
balance:
name:
description:
due_date: (i.e q1,q2,q3,q4)
on_time_?: (project is on time, behind schedule, or ahead of schedule)
datetime "create_at"
datetime "updated_at"


[Category]
name:


[User]
name:
position(full time or temp/consultant):
email/username
password
datetime create_at
datetime updated_at

[Rails Folders]
Controllers - create conroller actions (CRUD)
Models - logic, belongs_to has_many
Serializer - for each model
Schema, Seeds, Migration
Config ---> Routes
Sessions/Cookies

TO DO:
finishing controllers
finish serlizaers
routes & sessions/cookies


then can switch to front end?

admin and non admin

projects -- only admin can delete
notes -- only that user can edit/delete 


--Log in, Log out
- dashboard view - see projects; see tasks
- be able to search for projects and tasks
- admins can delete a project 
- create new projects, new taks, and notes 
update notes and tasks and projects??


6/22 --
Login/Logout and Signup functions work!
need to finish cards and forms styling
write blog post
record video and upload/unlock phase 5 

projects/task/notes -- need to be able to create, read, and update and delete

profile -- just need to be able to edit profile