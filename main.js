// Assuming you have a basic AR.js setup and a 3D model loaded
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

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
    const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
    projector.unprojectVector(vector, camera);

    // Calculate objects intersecting the picking ray
    const intersects = projector.pick(mouse.x, mouse.y);

    if (intersects.length > 0) {
        const object = intersects[0].object;

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
