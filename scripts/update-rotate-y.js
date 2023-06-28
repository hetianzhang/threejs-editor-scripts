function update( event ) {
	var pivot = scene.getObjectByName('center_pivot');
	
	//console.log(this);
	//console.log(marble_box);
	
	pivot.rotation.y += 0.001;
	
	var box = scene.getObjectByName('Box');
	
	box.rotation.y += 0.001;
}
