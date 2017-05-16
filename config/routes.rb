Rails.application.routes.draw do
  root 'home#index'

  resources :events

	namespace :api do
		namespace :v1 do
  		resources :events

			get '/events/day/:day/:month/:year', to: 'events#day', as: 'events_day'
		end
	end 
end
