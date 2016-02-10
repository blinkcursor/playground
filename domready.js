;(function(){
	btn = document.querySelector('button');
	btn.addEventListener('click', cloneImg, false);
	clone = document.querySelector('.clone-wrapper');

	function cloneImg(e){
		newImg = document.querySelector('img').cloneNode(true);
		newImg.sizes = "100vw";
		console.log(newImg);
		clone.appendChild(newImg);
	}
})()