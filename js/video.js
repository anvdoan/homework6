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
	video.volume = (this.value) / 100

});

document.querySelector('#mute').addEventListener('click', function() {
	if(video.muted == false){
		video.muted = true;
		let mutebutton = document.querySelector('#mute').innerHTML = 'Unmute';
		console.log('Muted Video');
	}

	else{
		video.muted = false;
		document.querySelector('#mute').innerHTML = 'Mute';
		console.log('Unmuted Video');
	}
});

document.querySelector('#volumeSlider').addEventListener('change', function() {
	console.log(this)
	console.log(this.value)

});
