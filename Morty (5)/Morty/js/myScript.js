
	var index1 = 0;
	setInterval(function() {
	$('#Rick').fadeOut(3000, function() {
    var $this = $(this);
        
    var sequence = ['"Grassssss... tastes bad!"','"Yo! What up my glip glops!"','"Don\'t break an arm jerking yourself off Morty."','"I\'m sorry, Morty. It\'s a bummer. In reality you\'re as dumb as they come."','"Sometimes science is a lot more art, than science. A lot of people don\'t get that."'];
        
     index1 = index1 == sequence.length ? 0 : index1;
     $this.text(sequence[index1++]);        
     $this.toggleClass('.fade1');        
     $this.fadeIn(3000);
       
    });
}, 2000);
