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

	ify(day) {
		const st = [1,21,31]
		const nd = [2, 22]
		const rd = [3, 23]
		
		if(st.indexOf(day)){
			return `${day}st`
		}

		if(nd.indexOf(day)){
			return `${day}nd`
		}

		if(rd.indexOf(day)){
			return `${day}rd`
		}

		return `${day}th`
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
