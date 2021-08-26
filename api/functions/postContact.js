const isEmail = require('validator/lib/isEmail');
const { connectToSendgrid, verifyRecaptcha } = require('../helper');

exports.handler = async (event) => {
    try {
        let body;

        try {
            body = JSON.parse(event.body);

            if (body.name === undefined
                || body.email === undefined
                || body.message === undefined
                || body.token === undefined
                || body.name.length === 0
                || body.email.length === 0
                || body.message.length === 0
                || body.token.length === 0
                || !isEmail(body.email)) {
                throw new Error('Bad Request');
            }
        } catch (err) {
            return { statusCode: 400 };
        }

        const {
            name, email, message, token,
        } = body;

        const isRecaptchaValid = await verifyRecaptcha(token);

        if (isRecaptchaValid) {
            const sg = connectToSendgrid();

            const msg = {
                to: 't.ghosh.me@gmail.com',
                from: 't.ghosh.me@gmail.com',
                subject: 'Contact through portfolio',
                text: `${name} (${email}) contacted through portfolio contact form`,
                html: `Name: <strong>${name}</strong><br><br>Email: <strong>${email}</strong><br><br>Message: <strong>${message}</strong>`,
            };

            await sg.send(msg);

            return { statusCode: 200 };
        }

        return { statusCode: 400 };
    } catch (error) {
        console.log(error);

        return {
            statusCode: 500,
        };
    }
};
