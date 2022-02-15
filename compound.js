var plan ;
var yearValue ;
var rate ;
var principal ;
var turn ;
var interest ;
var yearNam ;
var month ;
var total ;

function displayInterest() {
	if( plan == "monthly" && yearValue == "months" ) {
		principal = document.getElementById("principal").value ;
		turn = document.getElementById("turn").value ;
		total = parseInt(principal * turn + interest) ;
		document.getElementById("result").innerHTML = "If you deposite \<mark>&#8377;" + principal + "\</mark> monthly,\<br\>at an interest rate of \<mark>" + (rate * 100) + "%\</mark>.\<br\>You will receive an interest of \<mark>&#8377;" + Math.floor(interest) + "\</mark>,\<br>with total amount \<mark>&#8377;" + total + "\</mark>,\<br\>in \<mark>" + ( yearNam.getMonth() + 1 ) + "-" + yearNam.getFullYear() + "\</mark>" ;
	}
	else if( plan == "annually" && yearValue == "months" ) {
		document.getElementById("result").innerHTML = "If you deposite \<mark>&#8377;" + principal + "\</mark> annually,\<br\>at an interest rate of \<mark>" + (rate * 100) + "%\</mark>.\<br\>You will receive an interest of \<mark>&#8377;" + Math.floor(interest) + "\</mark>,\<br\>in \<mark>" + ( yearNam.getMonth() + 1 ) + "-" + yearNam.getFullYear() + "\</mark>" ;
	}
	else {
		total = parseInt(principal * turn + interest) ;
		document.getElementById("result").innerHTML = "If you deposite \<mark>&#8377;" + principal + "\</mark> annually,\<br\>at an interest rate of \<mark>" + (rate * 100) + "%\</mark>.\<br\>You will receive an interest of \<mark>&#8377;" + Math.floor(interest) + "\</mark>,\<br>with total amount \<mark>&#8377;" + total + "\</mark>,\<br\>in \<mark>" + ( yearNam.getMonth() + 1 ) + "-" + yearNam.getFullYear() + "\</mark>" ;
	}
}

function computeCompound()
{
	plan = document.getElementById("plan").value ;
	yearValue = document.getElementById("year").value ;
	rate = document.getElementById("rate").value / 100 ;
	var yearNam = new Date() ;
	var month = yearNam.getMonth() ;

//alert( "Principal : " + principal + "; Rate : " + rate + "; No. of Years : " + years + "; Interest : " + interest ) ;
	
	if( document.getElementById("principal").value <= 0 ) {
		alert("Enter a positive Amount") ;
		document.getElementById("result").innerHTML = " " ;
		document.getElementById("principal").focus() ;
		return false ;
	} else {
		if( plan == "monthly" ) {
			principal = document.getElementById("principal").value * 12 ;
			if( yearValue == "months" ) {
				turn = document.getElementById("turn").value / 12 ;
			}
			else {
				turn = document.getElementById("turn").value ;
			}
		}
		else {
			principal = document.getElementById("principal").value ;
			if( yearValue == "months" ) {
				turn = document.getElementById( "turn" ).value /12 ;
			}
			else {
				turn = document.getElementById("turn").value ;
			}
		}
		interest = principal * Math.pow( ( 1 + rate ) , turn ) - principal ;
// Compound Interest has been Calculated.

		turn = document.getElementById("turn").value ;
		if( yearValue == "months" ) {
			month +=  parseInt(turn) ;			
			if( month > 11 ) {
				month -= 12 ;
				yearNam.setFullYear( yearNam.getFullYear() + 1 ) ;
			}
			yearNam.setMonth(month) ;
		}
		else {
			yearNam.setFullYear( yearNam.getFullYear() + parseInt(turn) ) ;
		}
// Enhanced Date.	
		displayInterest() ;
//displayed interest with total amount
	}
	return true ;
}

function computeSimple() {

    	rate = document.getElementById("rate").value /100 ;
	plan = document.getElementById("plan").value ;
	yearValue = document.getElementById("year").value ;
	yearNam = new Date() ;
	month = yearNam.getMonth() ;
//alert( "Principal : " + principal + "; Rate : " + rate + "; No. of Years : " + years + "; Interest : " + interest ) ;

	if( document.getElementById("principal").value <= 0 ) {
		alert("Enter a positive Amount") ;
		document.getElementById("result").innerHTML = " " ;
		document.getElementById("principal").focus() ;
		return false ;
	}
	else {
		if( plan == "monthly" ) {
			principal = document.getElementById("principal").value * 12 ;
			if( yearValue == "months" ) {
				turn = document.getElementById("turn").value / 12 ;
			}
			else {
				turn = document.getElementById("turn").value ;
			}
		}
		else {
			principal = document.getElementById("principal").value ;
			if( yearValue == "months" ) {
				turn = document.getElementById("turn").value / 12 ;
			}
			else {
				turn = document.getElementById("turn").value ;
			}
		}
		interest = principal * rate * turn ;
// Simple Interest has been Calculated.

		turn = document.getElementById("turn").value ;
		if( yearValue == "months" ) {
			month +=  parseInt(turn) ;			
			if( month > 11 ) {
				month -= 12 ;
				yearNam.setFullYear( yearNam.getFullYear() + 1 ) ;
			}
			yearNam.setMonth(month) ;
		}
		else {
			yearNam.setFullYear( yearNam.getFullYear() + parseInt(turn) ) ;
		}
// Enhanced Date.
		displayInterest() ;
//displayed interest with total amount
	}
	return true ;
}

function updateRate() {
	var rateval = document.getElementById("rate").value ;
	document.getElementById("rateVal").innerText = rateval ;
 }       