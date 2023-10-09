$(document).ready(function(){
	function getRandomColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	  }
	  
	  $(':root').css('--orange',color=getRandomColor());

	const words = [" Web Developer." ," Freelancer." ," Web Designer."," Coder.","Python Programmer"];
	let i = 0;
	let timer;
	
	function typingEffect() {
		let word = words[i].split("");
		var loopTyping = function() {
			if (word.length > 0) {
				document.getElementById('word').innerHTML += word.shift();
			} else {
				deletingEffect();
				return false;
			};
			timer = setTimeout(loopTyping, 200);
		};
		loopTyping();
	};
	
	function deletingEffect() {
		let word = words[i].split("");
		var loopDeleting = function() {
			if (word.length > 0) {
				word.pop();
				document.getElementById('word').innerHTML = word.join("");
			} else {
				if (words.length > (i + 1)) {
					i++;
				} else {
					i = 0;
				};
				typingEffect();
				return false;
			};
			timer = setTimeout(loopDeleting, 100);
		};
		loopDeleting();
	};
	
	typingEffect();

	// $('#all-color').change(function(){
	// 	c=$(this).val()
	// 	$(':root').css('--allcolor',color=c);
	// 	// alert(c);
	// })
})

