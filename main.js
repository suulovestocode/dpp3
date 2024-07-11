document.addEventListener('DOMContentLoaded', function() {
    var sceneEl = document.querySelector('a-scene');
    var cameraEntity = sceneEl.querySelector('a-camera');

    // Initialize raycaster and projector
    var raycaster = new THREE.Raycaster();
    var projector = new THREE.Projector();
    var camera = cameraEntity.object; // Get the Three.js camera from the A-Frame camera entity

    // Function to update the raycaster with the current mouse position
    function onMouseMove(event) {
        // Normalize mouse pos to [-1, 1] range
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    // Listen for mousemove events
    window.addEventListener('mousemove', onMouseMove, false);

    // Function to handle click events
    function handleClick(event) {
        // Convert the mouse position to normalized device coordinates
        // (-1 to +1 for both components)
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // Update the picking ray with the camera and mouse position
        var vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
        projector.unprojectVector(vector, camera);

        // Calculate objects intersecting the picking ray
        var intersects = projector.pick(mouse.x, mouse.y);

        if (intersects.length > 0) {
            var object = intersects[0].object;

            // Check if the clicked object is the 3D model
            if (object.id === 'house-model') {
                console.log('3D Model clicked!');
                // Here you can show a text popup or any other action
            } else if (object.id === 'ar-video') {
                console.log('Video clicked!');
                // Here you can control the video playback or any other action
            }
        }
    }

    // Attach the handleClick function to the window's click event
    window.addEventListener('click', handleClick, false);
});
