// lilshit.js
document.addEventListener('DOMContentLoaded', function() {
    // Create the lizard image and append it to the body
    var lizardImage = document.createElement('img');
    lizardImage.src = 'https://github.com/brahkiearchive/brarchive/blob/main/assets/imageAssets/lilshit.png?raw=true';
    lizardImage.alt = 'Lizard';
    lizardImage.id = 'lilshit';
    lizardImage.style.position = 'fixed';
    lizardImage.style.pointerEvents = 'none';
    lizardImage.style.width = '50px';
    lizardImage.style.height = 'auto';
    lizardImage.style.left = '0px';
    lizardImage.style.top = '0px';
    document.body.appendChild(lizardImage);

    // Initial lizard position
    var lizardX = 0;
    var lizardY = 0;

    // Function to move the lizard image
    function moveLizard(event) {
        // Target cursor position
        var targetX = event.clientX;
        var targetY = event.clientY;
        
        // Update the lizard's position to move towards the cursor
        lizardX += (targetX - lizardX) * 0.05; // Slower movement
        lizardY += (targetY - lizardY) * 0.05; // Slower movement
        
        // Apply the position style to the lizard image
        lizardImage.style.left = lizardX + 'px';
        lizardImage.style.top = lizardY + 'px';

        // Use requestAnimationFrame for smoother animation
        requestAnimationFrame(function() {
            moveLizard(event);
        });
    }

    // Attach the event listener to the document
    document.addEventListener('mousemove', moveLizard);
});
