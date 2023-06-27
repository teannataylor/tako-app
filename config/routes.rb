Rails.application.routes.draw do
  
  # resources generates a collection of standard routes that
  # follow the RESTful convention for CRUD operations.

  resources :projects do
    resources :developers do
      resources :tasks
    end
  end

  get "/developers", to: "developers#index_all"
  patch "/developers/:id", to: "developers#update_dev"
  post '/projects', to: 'projects#create'
  get '/projects/:project_id/tasks', to: 'tasks#index', as: 'project_tasks'
  get '/developers/:developer_id/tasks', to: 'tasks#developer_tasks', as: 'developer_tasks'
  get "/tasks", to: "tasks#index_all"
  get "/me", to: "developers#show"
  post "/signup", to: "developers#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
