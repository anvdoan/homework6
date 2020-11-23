var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log('Starting');
	console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol= document.querySelector("#volume").innerHTML = video.volume + '%'
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();

});

document.querySelector('#volumeSlider').addEventListener('change', function() {
	console.log(this)
	console.log(this.value)

});

document.querySelector('#mute').addEventListener('click', function(){
	if (video.muted == false){
		video.muted = true;
		let button= document.querySelector('#mute').innerHTML = 'Unmute';
		console.log('Video Muted');

	}
	else{
		video.muted = false;
		button = 'Mute';
		console.log('Video Unmuted');
	}
});
