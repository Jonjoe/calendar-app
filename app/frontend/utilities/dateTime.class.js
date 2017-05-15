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
		return this.monthNames()[this.now.getMonth()]		
	}
}

export default DateTime
