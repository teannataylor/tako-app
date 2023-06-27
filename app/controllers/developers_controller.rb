class DevelopersController < ApplicationController
    # before_action :set_project
    before_action :set_developer, only: [:show, :update, :destroy]
    skip_before_action :authorize, only: [:index_all, :update_dev]

      # GET /developers
  def index_all
    developers = Developer.all
    render json: developers, status: :ok
  end
  
    # GET /projects/:project_id/developers
    def index
      developers = @project.developers
      render json: developers, status: :ok
    end
  
    # GET /projects/:project_id/developers/:id
    def show
      render json: @developer, status: :ok
    end
  
    # POST /projects/:project_id/developers
    def create
      developer = @project.developers.build(developer_params)
      if developer.save
        render json: developer, status: :created
      else
        render json: developer.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH /projects/:project_id/developers/:id
    def update
      if @developer.update(developer_params)
        render json: @developer, status: :ok
      else
        render json: @developer.errors, status: :unprocessable_entity
      end
    end

    def update_dev
      if @developer.update(developer_params)
        render json: @developer, status: :ok
      else
        render json: @developer.errors, status: :unprocessable_entity
      end
    end
  
  
    # DELETE /projects/:project_id/developers/:id
    def destroy
      @developer.destroy
      head :no_content
    end

    
  
    private
  
    def set_project
      @project = Project.find(params[:project_id])
    end
  
    def set_developer
      @developer = @project.developers.find(params[:id])
    end
  
    def developer_params
      params.require(:developer).permit(:name, :email, :is_admin,:password)
    end
  end
  

# t.string "name"
# t.string "email"
# t.string "password_digest"
# t.boolean "is_admin"