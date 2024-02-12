const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const firstName = document.querySelector('input[name="first-name"]').value;
  const lastName = document.querySelector('input[name="last-name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;

  const formData = {
    firstName,
    lastName,
    email,
    password
  };

  try {
    const response = await fetch('process-form.php', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    console.log(responseData);
    
    // Add your code to handle the response data here
    
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    // Add your code to handle the error here
  }
});