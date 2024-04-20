// Get the width and height of the window
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

// Specify the number of buttons you want to create
const numberOfButtons = Math.max(10, Math.random() * 1000);

// Create buttons
for (let i = 0; i < numberOfButtons; i++) {
    // Create a button element
    const button = document.createElement("button");

    // Set the button text to "Play"
    button.innerText = "Play";

    // Generate random positions for the button
    const randomX = Math.floor(
        Math.random() * windowWidth - button.offsetWidth
    );
    const randomY = Math.floor(
        Math.random() * windowHeight - button.offsetHeight
    );

    // Set the button position
    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;

    // Add CSS styles to make the buttons look prettier
    button.style.padding = "10px 20px";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.backgroundColor = "#007bff";
    button.style.color = "#fff";
    button.style.fontFamily = "Arial, sans-serif";
    button.style.fontSize = "16px";
    button.style.cursor = "pointer";

    // Add hover effect
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "#8973b6";
    });

    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "#007bff";
    });

    // Check if it's the first button
    if (i === 0) {
        // Set a link for the first button
        button.addEventListener("click", () => {
            window.location.href = "https://vivianbll.itch.io/anniversaire---l";
        });

        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "#4aad91";
        });

        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = "#007bff";
        });
    }

    // Append the button to the document body
    document.body.appendChild(button);
}
