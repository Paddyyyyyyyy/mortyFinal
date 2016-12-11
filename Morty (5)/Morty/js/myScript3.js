	
	var index3 = 0;
	setInterval(function() {	
	$('#Beth').fadeOut(5000, function() {
    var $this = $(this);
        
    var sequence3 = ['I can finally go on that trip I\'ve been talking about.','"I\'m a real doctor"','"He\'s not a hot girl. He can\'t just bail on his life and set up shop in someone else\'s."','"I don\'t know man, Italy, Greece, Argentina..."','"If it were, you could call ME Ernest Hemingway."'];
        
    index3 = index3 == sequence3.length ? 0 : index3;
    $this.text(sequence3[index3++]);            
    $this.toggleClass('.fade1');          
    $this.fadeIn(3000);	
       
    });
}, 2000);
