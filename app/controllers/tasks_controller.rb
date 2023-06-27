class TasksController < ApplicationController
    # before_action :set_project_and_developer
    before_action :set_task, only: [:show, :update, :destroy]
    skip_before_action :authorize, only: :index_all

    def index_all
    tasks = Task.all
    render json: tasks, status: :ok
    end


    def index
      project = Project.find(params[:id])
      tasks = project.tasks
      render json: tasks, status: :ok
    end
  
    def developer_tasks
      developer = Developer.find(params[:developer_id])
      tasks = developer.tasks
      render json: tasks, status: :ok
    end
  
    # GET /projects/:project_id/developers/:developer_id/tasks/:id
    def show
      render json: @task, status: :ok
    end
  
    # POST /projects/:project_id/developers/:developer_id/tasks
    def create
      task = @developer.tasks.build(task_params)
      if task.save
        render json: task, status: :created
      else
        render json: task.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH /projects/:project_id/developers/:developer_id/tasks/:id
    def update
      if @task.update(task_params)
        render json: @task, status: :ok
      else
        render json: @task.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /projects/:project_id/developers/:developer_id/tasks/:id
    def destroy
      @task.destroy
      head :no_content
    end
  
    private
  
    def set_project_and_developer
      @project = Project.find(params[:project_id])
      @developer = @project.developers.find(params[:developer_id])
    end
  
    def set_task
      @task = @developer.tasks.find(params[:id])
    end
  
    def task_params
      params.require(:task).permit(:name, :description, :due_date, :is_completed)
    end
  end
  
# t.string "name"
# t.text "description"
# t.date "due_date"
# t.boolean "is_completed"