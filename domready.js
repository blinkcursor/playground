;(function(){
	btn = document.querySelector('button');
	btn.addEventListener('click', cloneImg, false);
	clone = document.querySelector('.clone-wrapper');

	function cloneImg(e){
		newImg = document.querySelector('.wrapper33 > img').cloneNode(true);
		console.log(newImg.getAttribute('sizes'));
		newImg.setAttribute('sizes', '100vw');
		clone.appendChild(newImg);
		console.log(newImg.getAttribute('sizes'));
	}
})()