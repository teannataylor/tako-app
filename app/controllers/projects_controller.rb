class ProjectsController < ApplicationController
    before_action :set_project, only: [:show, :update, :destroy]
  
    skip_before_action :authorize, only: [:index, :show, :delete]
  
    # GET /projects
    def index
      projects = Project.all
      render json: projects, status: :ok
    end
  
    # GET /projects/:id
    def show
      render json: @project, status: :ok
    end
  
    # POST /projects
    def create
      project = Project.new(project_params)
      if project.save
        render json: project, status: :created
      else
        render json: project.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH /projects/:id
    def update
      if @project.update(project_params)
        render json: @project, status: :ok
      else
        render json: @project.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /projects/:id
    def destroy
      @project.destroy
      @project.tasks.destroy_all
      head :no_content
    end
  
    private
  
    def set_project
      @project = Project.find(params[:id])
    end
  
    def project_params
      params.require(:project).permit(:name, :description, :due_date, developers:[])
    end
  end