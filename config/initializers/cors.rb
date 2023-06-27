# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors
# require 'rack'
# require 'rack/cors'

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end

# credentials: true is an option that can be specified within
# the CORS configuration and enables the handling of CORS requests
#  with credentials, such as cookies or authorization headeers.

# when credentials: true is set, the server allows the browser to 
# include cookies or other credentials in the cross-origin request

# this is useful when you have authentication or session-related functionality in your application