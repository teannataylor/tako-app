class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create
  
    def create
      developer = Developer.find_by(email: params[:email])
      if developer &.authenticate(params[:password])
        session[:developer_id] = developer.id
        render json: developer, status: :created
      else
        render json: { errors: ["Invalid email or password"] }, status: :unauthorized
      end
    end

    def destroy
        session.delete :developer_id 
        head :no_content

    end

end
