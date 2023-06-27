class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid
  before_action :authorize

  protected

  def authorize 
    @current_developer = Developer.find_by(id: session[:developer_id])
    render json: { errors: "Not authorized" }, status: :unauthorized unless @current_developer
  end

  def handle_invalid(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: 422
  end

end
