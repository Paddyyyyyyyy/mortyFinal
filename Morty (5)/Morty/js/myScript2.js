	
	var index2 = 0;
	setInterval(function() {	
	$('#Morty').fadeOut(5000, function() {
    var $this = $(this);
        
    var sequence1 = ['"Don\'t even trip about your pants, dawg. We got an extra pair right here."','"You\'re like Hitler, except...Hitler cared about Germany, or something"','"Aww, gee, you got me there, Rick."','"Why are you doing this bit? We\'re gonna die."','""Nobody exists on purpose. Nobody belongs anywhere. Everybody’s gonna die. Come watch TV?”"'];
        
    index2 = index2 == sequence1.length ? 0 : index2;
    $this.text(sequence1[index2++]);            
    $this.toggleClass('.fade1');          
    $this.fadeIn(3000);	
       
    });
}, 2000);
