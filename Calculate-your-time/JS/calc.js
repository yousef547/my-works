/*jslint plusplus: true, evil: true   */
/*global console, alert*/

// start datd 




var h = document.getElementById("hours"),
    
    m = document.getElementById("Minutes"),
    
    s = document.getElementById("seconds"),
    
    t = document.getElementById("type"),
    
    type = "AM";



  
function myTime() {
    
    "use strict";
    
    var myDate = new Date(),

        hours = myDate.getHours(),

        Minutes = myDate.getMinutes(),

        seconds = myDate.getSeconds();

    if (hours > 12) {
    
        type = "PM";
        
        hours -= 12;
    }
    
    
    if (hours < 10) {
        
        hours = "0" + hours;
    }
    
    if (Minutes < 10) {
        
        Minutes = "0" + Minutes;
    }
    
    if (seconds < 10) {
        
        seconds = "0" + seconds;
    }
    
    h.innerHTML = hours;

    m.innerHTML = Minutes;

    s.innerHTML = seconds;

    t.innerHTML = type;
    
    setTimeout(myTime, 800);
                                                    
}

myTime();


var myDate = new Date(),
    
    year = myDate.getFullYear(),
    
    week = myDate.getDay(),
    
    month = myDate.getMonth(),
    
    day = myDate.getDate();


if (day < 10) {
    
    day = "0" + day;
}

if (week === 0) {
    
    week = "Sunday";
    
} else if (week === 1) {
    
    week = "Monday";
} else if (week === 2) {
    
    week = "Tuesday";
} else if (week === 3) {
    
    week = "Wednesday";
    
} else if (week === 4) {
    
    week = "Thursday";
    
} else if (week === 5) {
    
    week = "Friday";
    
} else if (week === 6) {
    
    week = "Saturday";
}




if (month === 0) {
    
    month = "January";
    
} else if (month === 1) {
    
    month = "February";
    
} else if (month === 2) {
    
    month = "March";
    
} else if (month === 3) {
    
    month = "April";
    
} else if (month === 4) {
    
    month = "May";
    
} else if (month === 5) {
    
    month = "June";
    
} else if (month === 6) {
    
    month = "July";
    
} else if (month === 7) {
    
    month = "August";
    
} else if (month === 8) {
    
    month = "September";
    
} else if (month === 9) {
    
    month = "October";
    
} else if (month === 10) {
    
    month = "November";
    
} else if (month === 11) {
    
    month = "December";
}


document.getElementById("year").innerHTML = year;

document.getElementById("month").innerHTML = month;

document.getElementById("day").innerHTML = day;

document.getElementById("week").innerHTML = week;





function start() {
    
    "use strict";
    
    var names = document.getElementById("too").value,
        
        last = document.getElementById("scName").value,
        
        sleep = document.getElementById("slept").value,
        
        myWork = document.getElementById("works").value,
        
        myPray = document.getElementById("pray").value,

        
        // start Your age
        
        patt = /\d/,
        
        hhName = patt.test(names),
        
        llName = patt.test(last),

        yourBirth = document.getElementById("years").value,
        
        oldBrith = yourBirth,
        
        birth = new Date(oldBrith),

        myDate = new Date(),
        
        ssyear = myDate.getFullYear(),
        
        ssmonth = myDate.getMonth(),
        
        ssdDay = myDate.getDate(),
        
        yeares = myDate.getFullYear(),
        
        birYear = birth.getFullYear(),
        
        weekes = birth.getDay(),
        
        monthes = birth.getMonth(),
        
        thDay = birth.getDate(),
        
        newDataes = new Date(yeares, monthes, thDay),
        
        birthess = new Date((yeares + 1), monthes, thDay),
        
        nowMonth = birthess.getMonth(),
        
        nowDay = birthess.getDate(),
        
        nowyear = birthess.getFullYear(),
        
        sxBirth = birthess.getDay(),
        
        dayBirth = newDataes.getDay(),
        
        resBirth = Math.round((newDataes - myDate) / (1000 * 60 * 60 * 24)),
        
        theMonth = Math.floor(resBirth / 30),
                           
        theDays = Math.floor(resBirth - (theMonth * 30)),
        
        szbirth = Math.round((birthess - myDate) / (1000 * 60 * 60 * 24)),
        
        szMonth = Math.floor(szbirth / 30),
                           
        szDays = Math.floor(szbirth - (szMonth * 30)),
        
        szdayBirth = birthess.getDay(),
        
        result = Math.round((myDate - birth) / (1000 * 60 * 60 * 24)),
        
        yearss = Math.floor(result / 365.25),
        
        month = Math.floor((result - (yearss * 365.25)) / 30),
                           
        days = Math.floor((result - (yearss * 365.25)) - (month * 30)),
    
        // end Your age
        
        
        // start your Questions
        
        months = (yearss * 12) + month,
        
        yooms = Math.floor((yearss * 365.25) + (month * 30) + days),
        
        hours = (yooms * 24),
        
        munats = (hours * 60),
        
        // end your Questions
    
        // start your SC Questions
        
        
        resSleep = Math.floor(yooms * sleep),
    
        resWorks  = Math.floor(yooms * myWork),
        
        resPray = Math.floor(yooms * myPray),
        
        ss = 1,
        
        lostTime = (sleep * ss) + (myWork * ss) + (myPray * ss),
        
        resLost = (24 - lostTime),
        
        ressLost = yooms * resLost,
    
        // end your SC Questions
    
        // start additional information
        
        aidMonth = 11 - month,
        
        aidDays = 30 - days + 3,
        
        valid = true,
        
        check = document.getElementById('check').value;
    
        // end additional information
    
        // start IF additional information
            
    if (weekes  === 0) {
    
        weekes = "Sunday";
    
    } else if (weekes === 1) {

        weekes = "Monday";
        
    } else if (weekes === 2) {

        weekes = "Tuesday";
        
    } else if (weekes === 3) {

        weekes = "Wednesday";

    } else if (weekes === 4) {

        weekes = "Thursday";

    } else if (weekes === 5) {

        weekes = "Friday";

    } else if (weekes === 6) {

        weekes = "Saturday";
    }
    
    
            
    if (dayBirth  === 0) {
    
        dayBirth = "Sunday";
    
    } else if (dayBirth === 1) {

        dayBirth = "Monday";
        
    } else if (dayBirth === 2) {

        dayBirth = "Tuesday";
        
    } else if (dayBirth === 3) {

        dayBirth = "Wednesday";

    } else if (dayBirth === 4) {

        dayBirth = "Thursday";

    } else if (dayBirth === 5) {

        dayBirth = "Friday";

    } else if (dayBirth === 6) {

        dayBirth = "Saturday";
    }
    
    
    if (szdayBirth  === 0) {
    
        szdayBirth = "Sunday";
    
    } else if (szdayBirth === 1) {

        szdayBirth = "Monday";
        
    } else if (szdayBirth === 2) {

        szdayBirth = "Tuesday";
        
    } else if (szdayBirth === 3) {

        szdayBirth = "Wednesday";

    } else if (szdayBirth === 4) {

        szdayBirth = "Thursday";

    } else if (szdayBirth === 5) {

        szdayBirth = "Friday";

    } else if (dayBirth === 6) {

        szdayBirth = "Saturday";
    }
    
    
    

        // end IF additional information
        
        // start IF

    if (birth > myDate) {
        
        alert("Date of birth is wrong");
        
        valid = false;
        
    } else if (oldBrith === "") {
        
        alert("Please fill out the Date of birth");
        
        valid = false;
        
    }
    
    if (hhName) {
        
        alert("Do not fill the first name with numbers");
        
        valid = false;
        
    } else if (llName) {
        
        alert("Do not fill the last name with numbers");
        
        valid = false;
    }
    
    
    
    if (names === "") {
        
        alert("Please fill out the first name");
        
        valid = false;
    }
    
    if (last === "") {
        
        alert("Please fill out the last name");
        
        valid = false;
    }
    
    if (sleep > 24) {
        
        alert("You must write the number of hours from 1 to 24");
        
        valid = false;
        
    } else if (sleep < 0) {
        
        alert("The number of hours should not be negative");
        
        valid = false;
    }
    
    if (myWork > 24) {
        
        alert("You must write the number of hours from 1 to 24");
        
        valid = false;
        
    } else if (myWork < 0) {
        
        alert("The number of hours should not be negative");
        
        valid = false;
    }
    
    if (myPray > 24) {
        
        alert("You must write the number of hours from 1 to 24");
        
        valid = false;
        
    } else if (myPray < 0) {
        
        alert("The number of hours should not be negative");
        
        valid = false;
    }
    
    if (lostTime > 24) {
        
        alert("Total fields are more than 24 hours");
        
        valid = false;
    }
    
    if (myPray === "-") {
        
        alert("Total fields are negative");
        
        valid = false;
        
    }
    
    
    
    
    if (myDate > newDataes) {
            
        theMonth = szMonth - 1;
        
    } else if (myDate > newDataes) {
        
        theDays = szDays;
    }
    
    if (myDate > newDataes) {
        
        dayBirth = szdayBirth;
    }

        
            
   
    
    if (valid === false) {
        return false;
    }
        // start result your age
     
    document.getElementById("arts").innerHTML = "Wolcome " + names + " " + last +
        " you calculated your time, It's your result, But it is a virtual result .";
    
    document.getElementById("thi").innerHTML = "Thank you, " + names + " for using this application to calculate your time .... please write your comment about this application .";
    
    document.getElementById("mm").innerHTML = yearss;

    document.getElementById("dd").innerHTML = month;

    document.getElementById("yy").innerHTML = days;
    
        // end result your age
    
        // start result your Questions
    
    document.getElementById("date").innerHTML = months;

    document.getElementById("days").innerHTML = yooms;
    
    document.getElementById("hour").innerHTML = hours;
    
    document.getElementById("minut").innerHTML = munats;
    
         // start result your Questions
    
    
        // start your result SC Questions
    
    document.getElementById("slpt").innerHTML = resSleep;
    
    document.getElementById("worked").innerHTML = resWorks;
    
    document.getElementById("prays").innerHTML = resPray;
    
    document.getElementById("lost").innerHTML = ressLost;

    
        // end your result SC Questions
    
        // start result additional information 
    
    document.getElementById("brith").innerHTML = "Your next birthday " + theMonth + " month" + " and " + theDays + " days";
    
    document.getElementById("born").innerHTML = "Your birthday will be " + dayBirth;
    
    document.getElementById("dborn").innerHTML = "You were born a " + weekes;
    
    
  
    if (check === '0' && valid) {
        document.getElementById('form').submit();
    }
    document.getElementById('resultsec').scrollIntoView({
        behavior: 'smooth'
    });
    
    
}






// end date 
/*

<!--
          
	  function isNumberKey(evt)
	  {
		 var charCode = (evt.which) ? evt.which : event.keyCode
		 if (charCode > 31 && (charCode < 48 || charCode > 57))
			return false;

		 return true;
	  }
      //-->


*/
     



