/* eslint-disable max-len */
import React, { useState, useRef } from 'react';
import {
    Form, Input, Button, message,
} from 'antd';
import axios from 'axios';
import ReCaptchaV2 from 'react-google-recaptcha';

import LoadingSpinner from './LoadingSpinner';

const Contact = () => {
    const [form] = Form.useForm();
    const { TextArea } = Input;

    const recaptchaRef = useRef();

    const [isLoading, setIsLoading] = useState(false);

    const submitContactForm = async (values) => {
        try {
            setIsLoading(true);

            const token = await recaptchaRef.current.executeAsync();
            await axios.post('/api/postContact', { ...values, token });

            form.resetFields();

            setIsLoading(false);
            message.success("Thanks for contacting me! I'll get back to you shortly.", 5);
        } catch (error) {
            setIsLoading(false);
            message.error('Something went wrong. Please try again later.', 5);
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="content">
                <h1>Contact me</h1>
                <p>If you have an application you are interested in developing, a feature that you need built or a project that needs coding, I’d love to help with it. </p>

                <Form form={form} onFinish={submitContactForm}>
                    <Form.Item
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}
                    >
                        <Input placeholder="Full name" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                            {
                                type: 'email',
                                message: 'Invalid email!',
                            },
                        ]}
                    >
                        <Input placeholder="Email" />
                    </Form.Item>

                    <Form.Item
                        name="message"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your message!',
                            },
                        ]}
                    >
                        <TextArea placeholder="Write your message here" rows={7} />
                    </Form.Item>

                    <ReCaptchaV2
                        ref={recaptchaRef}
                        size="invisible"
                        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                    />

                    <Form.Item>
                        <Button className="btn" type="primary" htmlType="submit">
                            Get in touch
                        </Button>
                    </Form.Item>
                </Form>
            </div>

            {isLoading && <LoadingSpinner />}
        </section>
    );
};

export default Contact;
