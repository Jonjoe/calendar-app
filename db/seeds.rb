days_used = []

def new_day
	return rand(Event.days_in_current_month)
end

def new_slot
	return rand(24)
end
 
18.times do
	day = new_day()

	while not day_used.include? day
		day = new_day()
	end

	days_used.push(day)
		
	formatted_day = '${Time.now.month}/${day}/${Time.now.year}'
	random_amount_of_events = rand(8)

	random_amount_of_events.times do
		event = Event.new({
			title: Faker::Lorem.sentence,
			description: Faker::Lorem.sentence,
			day: formatted_day,
			slot: null
		})
	
		slot = new_slot()

		while not Event.check_slot(formatted_date, slot)
			slot = new_slot()
		end

		event.slot = slot
		event.save
	end 
end 
