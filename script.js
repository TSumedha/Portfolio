// Log to console to confirm that the script is loaded and running
console.log("Script Running....");

// Initially hide the 'cross' icon on page load
document.querySelector('.cross').style.display = 'none';

// Add a click event listener to the 'hamburger' element
document.querySelector('.hamburger').addEventListener("click", () => {
    
    // Toggle the 'sidebarGo' class on the 'sidebar' when the hamburger is clicked
    document.querySelector('.sidebar').classList.toggle('sidebarGo');

    // Check if the 'sidebar' now has the 'sidebarGo' class after toggling
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        
        // If it does, then show the hamburger icon and hide the cross icon
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.cross').style.display='none';
    }
    else {
        // If it doesn't, then hide the hamburger icon
        document.querySelector('.ham').style.display='none';
        
        // Display the cross icon, but with a delay of 300ms 
        // (to allow for any animations or transitions to finish)
        setTimeout(() => {
            document.querySelector('.cross').style.display='inline';
        }, 300);
    }
});
function displayMessage() {
    alert('CV is currently unavailable. Please check back later or contact me directly.');
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    var name = document.getElementById('clientname').value;
    var email = document.getElementById('clientemail').value;
    var phone = document.getElementById('clientphone').value;

    if (name === "") {
        alert('Please provide your name.');
        return;
    }

    if (email === "") {
        alert('Please provide your email.');
        return;
    }

    if (phone === "") {
        alert('Please provide your phone number.');
        return;
    }

    alert('Thank you for reaching out! I will get back to you soon.');
});
