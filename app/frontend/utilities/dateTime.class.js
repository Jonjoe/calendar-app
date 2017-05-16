class DateTime {
	constructor() {
		this.now = new Date
	}

	monthNames() {
		return [
			"January", 
			"February", 
			"March", 
			"April", 
			"May", 
			"June",   
			"July", 
			"August", 
			"September", 
			"October", 
			"November", 
			"December"
		]
	}

	theDay() {
		return this.now.getDate()
	}
	
	theMonth() {
		return this.now.getMonth() + 1		
	}

	theMonthName() {
		return this.monthNames()[this.now.getMonth()]		
	}

	theYear() {
		return this.now.getFullYear()
	}
	
	countThisMonthsDays() {
		return new Date(this.now.getFullYear(), this.now.getMonth()+1, 0).getDate();
	}
}

export default DateTime
