Rails.application.routes.draw do
  resources :scores

  root 'home#index'
  post 'scores/api', to: 'scores#api_create'

end
