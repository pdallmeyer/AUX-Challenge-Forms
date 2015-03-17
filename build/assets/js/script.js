
var $amex = $('#amex'),
	$discover = $('#discover'),
	$visa = $('#visa'),
	$mastercard = $('#mastercard');


$(function() {
    $('#card-number').validateCreditCard(function(result) {
        console.log(result.card_type.name);

   		if (result.card_type.name === "amex") {
   			 $amex.attr('checked', true);
   		}

    	
    	else if (result.card_type.name === "visa"){
    		$visa.attr('checked', true);
    	}

    	else if (result.card_type.name === "discover") {
    		$discover.attr('checked', true);
    	}

    	else if (result.card_type.name === "mastercard") {
    		$mastercard.attr('checked', true);
    	}
	

		else {
			alert("Nope!");
		}
    });


//function(change-crv){
//	if $amex.attr('checked', true);
//		crv.addClass('amex');}  


});