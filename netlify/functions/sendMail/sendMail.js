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

const mailgun = require("mailgun-js");

exports.handler = async (event, context) => {
    const DOMAIN = "sandboxa20a34cc13ba4c6babb98c99e1b7c3fc.mailgun.org";
    const mg = mailgun({apiKey: "44f43e9157921d644260c3639482ae7c-309b0ef4-54de112b", domain: DOMAIN});

    const emailData = {
        from: "Helper <posters@sandboxa20a34cc13ba4c6babb98c99e1b7c3fc.mailgun.org>",
        to: 'fow1078@gmail.com',
        subject: 'Contact Us Request',
        text: "Name: fkfkrfmfrr"
    };

    try {
        const body = await mg.messages().send(emailData);
        console.log(body)
        return {
            statusCode: 200,
            body: JSON.stringify(body)
        };
    } catch (error) {
        console.log(error)
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        };
    }
};