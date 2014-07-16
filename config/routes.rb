TrelloClone::Application.routes.draw do
  root to: 'static_pages#root'
  get '/welcome', to: 'static_pages#welcome'

  resources :users
  resource :session

  namespace :api, defaults: { format: :json } do
    resources :boards do
      resources :lists, only: [:create]
    end

    resources :lists, except: [:create] do
      resources :cards, only: [:create]
    end

    resources :cards, except: [:create]

    # resources :items
    # resources :board_memberships
    # resources :card_assignments
  end
end
