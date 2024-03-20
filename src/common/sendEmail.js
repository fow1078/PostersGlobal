export const sendEmail = async () => {
  try {
      const response = await fetch('/.netlify/functions/sendMail', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          }
      });
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.error("Error sending email:", error);
  }
};
