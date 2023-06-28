var sound;

function init(){
	const listener = new THREE.AudioListener();
	const camer = scene.getObjectByName('camera-main');
	// create an Audio source
	sound = new THREE.Audio( listener );

	// load a sound and set it as the Audio object's buffer
	const audioLoader = new THREE.AudioLoader();
	audioLoader.load( 'sounds/march.mp3', function( buffer ) {
		sound.setBuffer( buffer );
		sound.setLoop(true);
		sound.setVolume(1.0);
		sound.play();
	});

	// create an AudioAnalyser, passing in the sound and desired fftSize
	const analyser = new THREE.AudioAnalyser( sound, 32 );

	// get the average frequency of the sound
	const data = analyser.getAverageFrequency();
}

function stop() {
	sound.stop();
}
