const sgMail = require('@sendgrid/mail');

module.exports = {
    connectToSendgrid: () => {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        return sgMail;
    },
};
