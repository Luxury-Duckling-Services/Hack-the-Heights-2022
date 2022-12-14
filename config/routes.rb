Rails.application.routes.draw do
  
  resources :ownerships, only: [:index , :create , :update]
  resources :activities, only: [:index]
  resources :pokemons, only: [:index]

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
