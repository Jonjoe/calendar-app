class Event < ApplicationRecord
	/* Class Methods */
	class << self
		/*
		|	Returns an ARRAY of INTEGERS containing free slots.
		*/
		def days_availability(day)
			return Event.where(day:day).pluck(:slot)
		end

		/*
		| Returns INTEGER counting days in current month.
		*/		
		def days_in_current_month
			currnt_month = Time.now.month
			current_year = Time.now.year

			return Time.days_in_month(current_month, current_year)
		end
	end

	/* Instance Methods */
	/* 
	| Returns a BOOLEAN based on slot availability.
	*/
	def check_slot(day, slot)
		events = Event.where(day: day)
		used_slots = events.pluck(:slot)

		if used_slot.include? slot
			return false
		else
			return true
		end 
	end 
end
