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

document.querySelector('#skip').addEventListener('click', function() {
	console.log('Skip ahead');
	let skipTime = video.currentTime + 5;
	if (skipTime > video.duration){
		video.currentTime = 0;
	}
	else{
		video.currentTime = skipTime;
	}
	console.log(video.currentTime);
	video.play();

});

document.querySelector('#slower').addEventListener('click', function() {
	console.log('Slow Down');
	let slowSpeed = video.playbackRate - 0.1;
	video.playbackRate = slowSpeed;
	console.log(video.playbackRate);

});

document.querySelector('#faster').addEventListener('click', function() {
	console.log('Speed Up');
	video.playbackRate = video.playbackRate + 0.1;
	console.log(video.playbackRate);

});


document.querySelector('#old').addEventListener('click', function() {
	console.log('Old Time');
	document.getElementById('myVideo').classList.add('oldTime');

});

document.querySelector('#original').addEventListener('click', function() {
	console.log('Original');
	if (document.getElementById('myVideo').classList.contains('oldTime')){
		document.getElementById('myVideo').classList.remove('oldTime');
	}

});
