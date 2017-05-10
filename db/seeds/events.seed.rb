15.times do
	Event.create({
		date: Faker::Date.between(Date.today, (Date.today + 30.days)),
		timeslot: 1,
		name: Faker::Lorem.sentence,
		description: Faker::Lorem.sentence
	})
end 
