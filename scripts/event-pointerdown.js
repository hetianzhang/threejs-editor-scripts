var head = this.getObjectByName( 'darth_vader_helmet.glb' );
var cube = this.getObjectByName( 'Box' );



var raycaster = new THREE.Raycaster();
var objects = [ head, cube ];
var intersectedObject;
var sound_list = [ 'sounds/powerofdarkside.mp3', 'sounds/iamurfather.mp3', 'sounds/asuwish.mp3'];
var sound1;

function playclicksound_head(sound_num) {
	const listener = new THREE.AudioListener();
	//const camera = scene.getObjectByName('camera-main');
	// create an Audio source
	sound1 = new THREE.Audio( listener );

	// load a sound and set it as the Audio object's buffer
	const audioLoader = new THREE.AudioLoader();
	audioLoader.load( sound_list[sound_num], function( buffer ) {
		sound1.setBuffer( buffer );
		sound1.setLoop(false);
		sound1.setVolume(1.0);
		if(sound_num == 3) {
			sound1.setVolume(2.0);
		}
		sound1.play();
	});
}

function pointerdown(event) {
	//var camera = this.getObjectByName( 'camera-main' );
	const pivot = scene.getObjectByName( 'center_pivot' );
	raycaster.setFromCamera(
                    {
                        x: (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
                        y: -(event.clientY / renderer.domElement.clientHeight) * 2 + 1,
                    },
                    camera
                )
	console.log(camera.position);
	
    var intersects = raycaster.intersectObjects(objects)
    if (intersects.length > 0) {
        intersectedObject = intersects[0].object;
		console.log(intersectedObject);
		
		if(intersectedObject.name == 'Plane014_MetalGraphitePitted001_3K_0') {
			//sound.setVolume(0.5);
			const sound_num = Math.ceil(pivot.rotation.y)%sound_list.length;
			console.log('sound_num', sound_num);
			playclicksound_head(sound_num);
			//sound.setVolume(1.0);
		}
		
    } else {
        intersectedObject = null
    }
}

function update(event) {
	//console.log(camera.position);
}
