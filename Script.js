function submitForm() {
    const destination = document.getElementById('destination').value;
    const people = document.getElementById('people').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const description = document.getElementById('description').value
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
    const today = new Date();

    if (startDateObj <= today) {
        alert('Start date must be a future date.');
        return;
    }
    if (endDateObj <= startDateObj) {
        alert('End date must be after the start date.');
        return;
    }
    if (destination && people && startDate && endDate && description.length >= 50 && description.length <= 500) {
        alert('Booking successful!');
    } else {
        alert('Please fill in all fields correctly.');
            }
    }

    function validateForm() {
        const fullname = document.getElementById("fullname").value.trim();
        const contact = document.getElementById("contact").value.trim();
        const dob = document.getElementById("dob").value;
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const gender = document.querySelector("input[name='gender']:checked");
    
        if (fullname.length < 3) {
            alert("Full name must be at least 3 characters long.");
            return false;
        }
    
        if (!/^\d{10}$/.test(contact)) {
            alert("Please enter a valid 10-digit contact number.");
            return false;
        }
    
        if (!dob) {
            alert("Please enter your date of birth.");
            return false;
        }
    
        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address.");
            return false;
        }
    
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return false;
        }
    
        if (!gender) {
            alert("Please select a gender.");
            return false;
        }
    
        alert("Registration successful!");
        return true;
    }
    
