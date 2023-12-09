// lilshit.js
document.addEventListener('DOMContentLoaded', function() {
    // Create the lizard image and append it to the body
    var lizardImage = document.createElement('img');
    lizardImage.src = 'https://github.com/brahkiearchive/brarchive/blob/main/assets/imageAssets/lilshit.png?raw=true';
    lizardImage.alt = 'Lizard';
    lizardImage.id = 'lilshit';
    lizardImage.style.position = 'absolute';
    lizardImage.style.pointerEvents = 'none';
    lizardImage.style.width = '50px'; // Set the size of your lizard image
    lizardImage.style.height = 'auto';
    lizardImage.style.left = '0px';
    lizardImage.style.top = '0px';
    document.body.appendChild(lizardImage);

    // Track the cursor position
    var cursorX = 0;
    var cursorY = 0;

    document.addEventListener('mousemove', function(event) {
        cursorX = event.clientX;
        cursorY = event.clientY;
        updateLizardPosition();
    });

    // Move and rotate the lizard image
    function updateLizardPosition() {
        var lizardRect = lizardImage.getBoundingClientRect();
        var lizardCenterX = lizardRect.left + lizardRect.width / 2;
        var lizardCenterY = lizardRect.top + lizardRect.height / 2;

        // Calculate angle
        var angle = Math.atan2(cursorY - lizardCenterY, cursorX - lizardCenterX) * 180 / Math.PI;

        // Rotate the lizard image
        lizardImage.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

        // Move the lizard image
        var dx = cursorX - lizardCenterX;
        var dy = cursorY - lizardCenterY;
        lizardImage.style.left = `${lizardRect.left + dx * 0.05}px`;
        lizardImage.style.top = `${lizardRect.top + dy * 0.05}px`;
    }

    // Start the initial position update
    updateLizardPosition();
});
