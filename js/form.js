document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form data
    var formData = {
      name: document.getElementById('name').value,
      dob: document.getElementById('dob').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      address: document.getElementById('address').value,
      gender: document.getElementById('gender').value
    };
  
    // Example: You can now send this data to your backend using AJAX or fetch API
    // Replace 'your-backend-url' with your actual backend URL
    fetch('your-backend-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Handle success response here
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle error here
    });
  });
  