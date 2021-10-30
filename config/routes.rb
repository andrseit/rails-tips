Rails.application.routes.draw do
  resources :post_categories
  resources :posts
  root "pages#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
