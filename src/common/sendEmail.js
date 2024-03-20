export const sendEmail = async (emailData) => {
  try {
      const response = await fetch('/.netlify/functions/sendMail', {
          method: 'POST',
          body: JSON.stringify(emailData),
          headers: {
              'Content-Type': 'application/json'
          }
      });
      if (!response.ok) {
          // throw new Error('Network response was not ok');
          // console.log('Error')
      }
      const data = await response.json();
      // console.log(data);
  } catch (error) {
      console.error("Error sending email:", error);
  }
};
