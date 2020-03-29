Rails.application.routes.draw do
  root 'maps#show'

  resources :maps, only: :show
end
