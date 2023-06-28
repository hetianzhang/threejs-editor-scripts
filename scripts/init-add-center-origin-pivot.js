function init() {
	var obj = scene.getObjectByName('darth_vader_helmet.glb');
	console.log(obj);
	
	var box = new THREE.Box3().setFromObject( obj );
	const old_position = new THREE.Vector3(obj.position.x, obj.position.y, obj.position.z);
	
	console.log('old position', old_position);
	console.log('current rotation', obj.rotation);
	
	var center_position = box.getCenter(obj.position); // this re-sets the mesh position
	
	//visualize pivot point
	//var pivotSphereGeo = new THREE.SphereGeometry( 50 );
    //var pivotSphere = new THREE.Mesh(pivotSphereGeo);
    ///pivotSphere.position.set( center_position );
    //scene.add( pivotSphere );
	
	console.log('center position', center_position);
	console.log('rotation after center', obj.rotation);
	
	obj.position.multiplyScalar( - 1 );
	//obj.position = obj.position.sub(old_position);
	obj.position.sub(old_position);
	
	
	obj.traverse( function( o ) {

    if ( o.isMesh ) {
		console.log( o.geometry );
		//o.geometry.position = center_position;
	}

	} );
	
	
	var marble_box = scene.getObjectByName('Box');
	var old_position_box = new THREE.Vector3(marble_box.position.x, marble_box.position.y, marble_box.position.z);
	
	console.log(marble_box);
	console.log('old_position_box', old_position_box);
	
	var box = new THREE.Box3().setFromObject( marble_box );
	box.getCenter(marble_box.position);
	marble_box.position.multiplyScalar( - 1 );
	//marble_box.position -= old_position_box;
	
	var pivot = new THREE.Group();
	pivot.name = "center_pivot";
	scene.add( pivot );
	pivot.add( obj );
	
	//only convert back y relative position, maintain x, z at origin(0,0)
	console.log('cur old_position', old_position);
	pivot.position.x = 0;
	pivot.position.y = old_position.y-obj.position.y;
	pivot.position.z = 0;
	//pivot.add(marble_box);
	
	console.log('pivot position', pivot.position)
	console.log('mesh position', obj.position)
	console.log('box position', marble_box.position)
	
}
