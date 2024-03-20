// // Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
// const handler = async (event) => {
//   try {
//     const subject = event.queryStringParameters.name || 'World'
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: `Hello ${subject}` }),
//       // // more keys you can return:
//       // headers: { "headerName": "headerValue", ... },
//       // isBase64Encoded: true,
//     }
//   } catch (error) {
//     return { statusCode: 500, body: error.toString() }
//   }
// }

// module.exports = { handler }

const mailgun = require("axios");

exports.handler = async (event, context) => {
  const API_KEY = '787934F3EDA1952BCC3D49463EF7287CD75E6EC60CC65446E199D36826028F6A6E7FE2816431DC4452BCEF990C6B084F'; // Replace with your API key
  const SENDER_EMAIL = 'fow1078@gmail.com'; // This email must be verified with Elastic Email

  const data = new URLSearchParams({
    'apikey': API_KEY,
    'subject': 'subject',
    'from': SENDER_EMAIL,
    'to': 'cristarium11@gmail.com',
    'bodyHtml': 'test',
    'isTransactional': true
  });

  try {
    const response = await axios.post('https://api.elasticemail.com/v2/email/send', data);
    console.log(response.data);
    // Handle response here
  } catch (error) {
    console.error(error);
    // Handle error here
  }
};