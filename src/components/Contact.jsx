/* eslint-disable max-len */
import {
    Form, Input, Button,
} from 'antd';
import axios from 'axios';

const Contact = () => {
    const [form] = Form.useForm();
    const { TextArea } = Input;

    const submitContactForm = async (values) => {
        await axios.post('/api/postContact', values);
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

                    <Form.Item>
                        <Button className="btn" type="primary" htmlType="submit">
                            Get in touch
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </section>
    );
};

export default Contact;
