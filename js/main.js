//for row1 select shuffle show cards
$('#jackclubs1').hide();
$('#jackhearts1').hide();
$('#jackspades1').hide();
$('#queenclubs1').hide();

//for row2 select shuffle show cards
$('#kingclubs1').hide();
$('#Kingdiamonds1').hide();
$('#kinghearts1').hide();
$('#jackheart1').hide();

//for row3 shuffle show cards
$('#kingspades1').hide();
$('#kingclubs1_r3').hide();


function rowoneClick(){

	//row1 arrangement
	$('#jackhearts').hide();
	$('#jackclubs1').show();
	$('#kingclubs').hide();
	$('#jackhearts1').show();
	$('#jackspades').hide()
	$("#queenclubs1").show();
	$('#queenclubs').hide();
	$('#jackspades1').show();
}

function rowtwoClick(){


	//row2 arrrangement
	$('#jackclubs').hide();
	$('#kingclubs1').show();

	$('#kingclubs').hide();
	$("#jackhearts1").show();

	$('#jackhearts').hide();
	$('#jackclubs1').show();
	$('#king-hearts').hide();
	$("#Kingdiamonds1").show();

	$('#Kingdiamonds').hide();
	$('#kinghearts1').show();

}

function rowthreeClick(){
	$('#queenclubs').hide();
	$('#jackspades1').show();
	$('#jackspades').hide();
	$('#queenclubs1').show();

	$('#kingspades').hide();
	$('#kingclubs1_r3').show();

	$('#kingclubs').hide();
	$('#kingspades1').show();
}

var roneAction=1;
$('.row1-btn').on("click",function(event){

    if(roneAction==1){
   		rowoneClick();
	}
	else{
	    if($('.row').children('.row1').find('.jackdiamonds')){
	    	$('.row1 .card2').hide();
			$('.row1 .card3').hide();
			$('.row2').hide();
			$('.row3').hide();
		} 

	}  
	if((roneAction==1)&&(rtwoAction==2)){
		 if($('.row').children('.row1').find('.jackclubs1')){
	    	$('.card1').hide();
			$('.card3').hide();
			$('.row2').hide();
			$('.row3').hide();
		} 
	}
	if((roneAction==1)&&(rthreeAction==2)){
		if($('.row').children('.row1').find('#queenclubs1')){
	    	$('.card1').hide();
			$('.card2').hide();
			$('.row2').hide();
			$('.row3').hide();
		} 

	}
	++roneAction;
	
});

var rtwoAction=1;
$('.row2-btn').click(function(){
	
	if((roneAction==1)&&(rtwoAction==1)){
		rowtwoClick();
	}

	if((roneAction==1)&&(rtwoAction==2)){

		if($('.row').children('.row1').find('#kingsclubs1')){
	    	$('.card2').hide();
			$('.card3').hide();
			$('.row1').hide();
			$('.row3').hide();
		} 

	}
	if((roneAction==2)&&(rtwoAction==1)){
		if($('.row').children('.row2').find('#jackhearts1')){
			$('.row1').hide();
			$('.row2 .card1').hide();
			$('.row2 .card3').hide();
			$('.row3').hide();
		}
	}

	if((rtwoAction==1)&&(rthreeAction==2)){
		if($('.row').children('.row2').find('#kingspades1')){
	    	$('.card1').hide();
			$('.card3').hide();
			$('.row1').hide();
			$('.row3').hide();
			$('#jackhearts1').hide();		
		} 

	}
	++rtwoAction;
});

var rthreeAction=1;
$('.row3-btn').click(function(){

	if(rthreeAction==1){
		rowthreeClick();
		
	}
	else{
		if($('.row').children('.row3').find('#king-hearts')){
	    	$('.card2').hide();
			$('.card3').hide();
			$('.row1').hide();
			$('.row2').hide();
		} 

	}
	

	if((rtwoAction==2)&&(rthreeAction==1)){
		 if($('.row').children('.row3').find('.kingdiamonds1')){
	    	$('.card2').hide();
			$('.card3').hide();
			$('.row1').hide();
			$('.row2').hide();
		} 
	}
	if(roneAction==2){
		if($('.row').children('.row3').find('.jackspades')){
			$('.row1').hide();
			$('.row2').hide();
			$('.row3 .card1').hide();
			$('.row3 .card2').hide();
		}
	}
	++rthreeAction;
});

$('.reset-btn').click(function(){
	location.reload();
});
$('.exit-btn').click(function(){
	window.close();
});