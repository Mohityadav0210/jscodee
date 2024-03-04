document.getElementById('phoneForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  var formData = new FormData(this);
  var jsonData = {};

  formData.forEach(function(value, key) {
    jsonData[key] = value;
  });

  // Retrieve the uploaded image file
  var imageFile = formData.get('image');

  // Check if an image was uploaded
  if (imageFile) {
    var reader = new FileReader();

    reader.onload = function(event) {
      // Store the data URL of the image in the JSON data
      jsonData['image'] = event.target.result;

      // Retrieve existing data from local storage
      var storedData = localStorage.getItem('phoneData');
      var existingData = [];

      if (storedData) {
        existingData = JSON.parse(storedData);
        
        // Check if existingData is an array
        if (!Array.isArray(existingData)) {
          console.error('Existing data is not an array.');
          existingData = []; // Initialize existingData as an empty array
        }
      }
    
      // Append new form data to existing array
      existingData.push(jsonData);
    
      // Store combined data in local storage
      localStorage.setItem('phoneData', JSON.stringify(existingData));
    
      alert('Form data stored locally.');
    };

    // Read the uploaded image file as a data URL
    reader.readAsDataURL(imageFile);
  } else {
    alert('Please select an image.');
  }
});

document.getElementById('1').addEventListener('click', function() {
  localStorage.clear();
  alert('Local storage cleared.');
});

