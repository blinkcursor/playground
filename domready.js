;(function(){
	btn = document.querySelector('button');
	btn.addEventListener('click', cloneImg, false);

	function cloneImg(e){
		newImg = document.querySelector('img').cloneNode(true);
		newImg.sizes = "100vw";
		console.log(newImg);
	}
})()