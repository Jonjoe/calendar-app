module Api
	module V1
		class EventsController < ApplicationController
			def index
				time = Date.new(Date.today.year, Date.today.month).to_time  
				events = Event.where(day: time..time.end_of_month)
				
				render json: events  
			end

			def day
				day = params[:day].to_i
				month = params[:month].to_i
				year = params[:year].to_i

				date = "#{day}/#{month}/#{year}"


				events = Event.where(day: date)
				render json: events
			end 
		end
	end
end
