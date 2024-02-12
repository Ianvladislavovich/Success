const form = document.querySelector('form');

// Add an event listener for the submit event
form.addEventListener('submit', async (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data as an object
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    // Send the form data to the server using fetch
    const response = await fetch('process-form.php', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Check if the response is OK
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Log the response data to the console
    const responseData = await response.json();
    console.log(responseData);

    // Add your code to handle the response data here

  } catch (error) {
    console.error('Error:', error);
  }
});