document.addEventListener('DOMContentLoaded', function() {
    var sceneEl = document.querySelector('a-scene');
    var cameraEntity = sceneEl.querySelector('[camera]');
    var houseModel = document.getElementById('house-model');
    var videoElement = document.getElementById('ar-video');
    var videoControls = document.getElementById('video-controls');
    var video = document.getElementById('video');
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();
    var camera = cameraEntity.getObject3D('camera');

    // Function to update the raycaster with the current mouse position
    function onMouseMove(event) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    // Listen for mousemove events
    window.addEventListener('mousemove', onMouseMove, false);

    // Function to handle click events
    function handleClick(event) {
        raycaster.setFromCamera(mouse, camera);

        var intersects = raycaster.intersectObjects(sceneEl.object3D.children, true);

        if (intersects.length > 0) {
            var object = intersects[0].object;

            if (object.el && object.el.id === 'house-model') {
                console.log('3D Model clicked!');
                var cube = document.createElement('a-box');
                cube.setAttribute('position', '0 0.5 0');
                cube.setAttribute('material', 'color: pink');
                houseModel.appendChild(cube);
            } else if (object.el && object.el.id === 'ar-video') {
                console.log('Video clicked!');
                videoControls.style.display = 'block';
            }
        }
    }

    // Attach the handleClick function to the window's click event
    window.addEventListener('click', handleClick, false);
});

function playVideo() {
    var video = document.getElementById('video');
    video.play();
}

function pauseVideo() {
    var video = document.getElementById('video');
    video.pause();
}
