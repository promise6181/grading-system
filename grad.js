function checkform() {
			var grades=bk.value;
			if (grades=='') {
				bg.innerHTML=('Input something')
			}
			else if (grades < 0) {bg.innerHTML=("OUT OF RANG")
		}
	else if (grades >= 0 && grades <= 39) {
		bg.innerHTML="Fail"
	}
	else if (grades >=39 && grades <= 49) {bg.innerHTML=("Fair")
	}
	else if (grades >= 49 && grades <= 59) {bg.innerHTML=("Good")
	} 
	else if (grades >= 59 && grades <= 69) {bg.innerHTML=("V.Good")
	}
	else if (grades >= 69 && grades <= 100) {bg.innerHTML=("Excellent")
	}
	else if (grades >= 100) {bg.innerHTML=("OUT OF RANG")
	}
	else if (grades = "") {bg.innerHTML=("enter number")}
		}