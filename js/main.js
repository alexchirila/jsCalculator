$(document).ready(function(){

	var entries = [];
	var temp_result = '';

	$(".calculator-button").on('click', function(){
		
		var button_value = $(this).text();
		
		if (!isNaN(button_value)) {
					
			temp_result += button_value;
			$('.result').text(temp_result.slice(0,10));

			} else if (button_value ===".") {

				if (temp_result.indexOf(".") > -1) { // do not allow the user to enter more than one . when inserting numbers
				return;
			} 

			temp_result += button_value;
			$('.result').text(temp_result.slice(0,10));

			} else if (button_value === "AC") {
				entries = [];
				temp_result = '';
				$('.result').text(temp_result);
							
			} else if (button_value === "CE") {
				temp_result = '';
				$('.result').text(temp_result);

			
			} else if (button_value === 'x') {
    			entries.push(temp_result);
    			entries.push('*');
    			temp_result = '';

			} else if (button_value === '÷') {
    			entries.push(temp_result);
    			entries.push('/');
    			temp_result = '';
    			console.log(entries);
    			
			} else if (button_value === '=') {
				entries.push(temp_result);

				var number = Number(entries[0]);  // get the numeric value of the first entry in the entries array

			 for (var i = 1; i < entries.length; i++) {  //loop throug the array and get the numbers and the operation symbols
		       var next_number = Number(entries[i+1]);
		       var symbol = entries[i];
		      
		       if (symbol === '+') { number += next_number; }  // update the value of number which is basically the resulf of the operation based 
		       												   // on the number that is being evaluated in the loop, the symbol and the following number  
		       	else if (symbol === '-') { number -= next_number; } 
		      	else if (symbol === '*') { number *= next_number; } 
		      	else if (symbol === '/') { number /= next_number; }
		      	else if (symbol === '%') { number = number * next_number / 100; }
		      
		      	
		    	}
		    
		    $(".result").text(number.toString().substring(0,10));
				entries = [];
		    	temp_result = '';
		    
		  
		  } else {
		    entries.push(temp_result);
		    entries.push(button_value);
		    temp_result = '';
		  }
		


	})
	

}); 