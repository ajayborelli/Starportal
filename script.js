document.addEventListener('DOMContentLoaded', function() {
    // Select all tab buttons and content sections
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Add click event listener to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'active' class from all buttons and content sections
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add 'active' class to the clicked button
            this.classList.add('active');

            // Get the corresponding content section and add 'active' class to it
            const tab = this.getAttribute('data-tab');
            document.getElementById(tab).classList.add('active');
        });
    });

    // Social Icons Hover Effect 
    const socialIcons = document.querySelectorAll('.social-icons a');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });
        icon.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
