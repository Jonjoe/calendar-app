days_used = []

def new_day
	new_day = rand(Event.days_in_current_month)
	
	if new_day === 0
		new_day = new_day + 1
	end

	return new_day
end

def new_slot
	return rand(24)
end
 
18.times do
	puts "New Day"
	day = new_day()

	while not days_used.include? day
		puts "---- day #{day} used ... recycling"
		day = new_day()
		
		unless days_used.include? day
			days_used.push(day)
			puts "---- new day is #{day}"
		end
	end
		
	formatted_day = Date.parse("#{day}/#{Time.now.month}/#{Time.now.year}")
	random_amount_of_events = rand(8)

	puts "---- creating events for day #{day}"
	random_amount_of_events.times do
		puts "---- ---- NEW event"
		event = Event.new({
			name: Faker::Lorem.sentence,
			description: Faker::Lorem.sentence,
			day: formatted_day,
			slot: 0
		})
	
		slot = new_slot()
		while not Event.check_slot(formatted_day, slot)
			puts "---- ---- slot already used ... recycling"
			slot = new_slot()
		end

		event.slot = slot
		event.save

		puts "---- ---- event created for slot #{slot}"
	end 
end 
