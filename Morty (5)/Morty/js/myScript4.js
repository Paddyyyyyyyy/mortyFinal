var index4 = 0;
	setInterval(function() {	
	$('#Jerry').fadeOut(4000, function() {
    var $this = $(this);
        
    var sequence4 = ['"are you hungry for apples? ARE YOU HUNGRY FOR APPLESSS!?"','"I\'m Mr. Crowbar, and here is my friend, who is also a crowbar!"','"Nobody\'s killing me until after I catch my wife with another man."','"Pluto\'s a planet."','"If I\'ve learned one thing, it\'s that before you get anywhere in life, you gotta stop listening to yourself."'];
        
    index4 = index4 == sequence4.length ? 0 : index4;
    $this.text(sequence4[index4++]);            
    $this.toggleClass('.fade1');          
    $this.fadeIn(3000);	
       
    });
}, 2000);