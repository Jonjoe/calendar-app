module Api
	module V1
		class EventsController < ApplicationController
			def index
				time = Date.new(Date.today.year, Date.today.month).to_time  
				events = Event.where(day: time..time.end_of_month)
				
				render json: events  
			end 
		end
	end
end
