var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log('Starting');
	console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol= document.querySelector("#volume").innerHTML = (video.volume) * 100 + '%'
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();

});

document.querySelector('#volumeSlider').addEventListener('change', function() {
	console.log(this)
	console.log(this.value)

});
