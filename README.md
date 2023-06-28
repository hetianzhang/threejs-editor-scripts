# Threejs Editor Scripts and Examples

This is an illustrative example to showcase scripts writing and add more module
to three.js editor.

## usecase example for threejs editor

You need to add OrbitControls Module, by default, OrbitControls Module is not included in the three.js editor.

1. open https://threejs.org/editor/
2. import example from the json file without any scripts
3. copy and save the scripts to the corresponding object and entities in the scene

## JS Code Snippets

init-add-audio
```
The script will add audio-related modules in the init-add-audio before running the scripts,
and play the marching music as the background sound.
It will stop play when hit stop in editor.
```

```
It uses THREE.Raycaster to check the mouse event with raycaster checking objects. Only play sound when click the helmet object. It will also play the corresponding sound based on the object rotation degree (updated).
```

init-add-center-origin-pivot
```
calculate the center of the object and add a pivot to the scence
```

update-rotate-y
```
rotate pivot and marble box under the head statue
```

update physicalWorld.stepSimulation 
```
set minimal simulation delta
``

