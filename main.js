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

// Example function to handle click events
function handleClick() {
    // Perform raycasting against the AR content here
    // This is a placeholder for where you'd implement your logic
    console.log("Clicked!");
}

// Attach the handleClick function to the window's click event
window.addEventListener('click', handleClick, false);
