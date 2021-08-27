const sgMail = require('@sendgrid/mail');
const axios = require('axios');
const querystring = require('querystring');

module.exports = {
    connectToSendgrid: () => {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        return sgMail;
    },
    verifyRecaptcha: async (token) => {
        const { data } = await axios.post('https://www.google.com/recaptcha/api/siteverify',
            querystring.stringify({
                secret: process.env.RECAPTCHA_SECRET_KEY,
                response: token,
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

        if (data && data.success) {
            return true;
        }
        return false;
    },
};
