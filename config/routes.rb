Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :topics, only: [:show]
    resources :authors, only: [:index, :show] do
      resources :feeds, only: [:index]

      resources :follows, only: [:create, :destroy] do
        collection do
          get "followers"
          get "following"
        end
      end


    end

    resource :user, only: [:create]

    resource :session, only: [:create, :destroy, :show]
    resources :stories, only: [:index, :show, :create, :destroy] do
      resources :comments, only: [:index, :create]
      resources :likes, only: [:index, :create, :destroy]
    end
  end
end
