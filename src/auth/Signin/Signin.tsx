import '../../style/auth.css';
import { Form, Input, Row, Col, Alert } from 'antd';
import { useState } from 'react';

import EmailIcon from "../../assets/images/AuthImg/sms.svg";
import AlertIcon from "../../assets/images/AuthImg/alert.svg";
import AuthsideBanner from '../../components/Common/AuthsideBanner';
import Buttons from '../../components/Common/Button';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constant';

const Signin: React.FC = () => {
    const [form] = Form.useForm();
    const [isFormValid, setIsFormValid] = useState(false);

    const handleClick = () => {
        form.validateFields()
    };

    const onFieldsChange = () => {
        const email = form.getFieldValue('email');
        const password = form.getFieldValue('password');
        const hasErrors = form.getFieldsError().some(({ errors }) => errors.length > 0);

        setIsFormValid(email && password && !hasErrors);
    };

    return (
        <div>
            <div className="login_container">
                <Row className="row">
                    <Col xs={24} sm={24} md={24} lg={12} className="logo_col">
                        <AuthsideBanner />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} className="form_col">
                        <div className="form_container">
                            <div className="title_section">
                                <h2 className="title" >Log in</h2>
                                <p className="description" >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className="alert_div">
                                <Alert message="Invalid email address or password!" type="error" icon={<img src={AlertIcon} />} showIcon closable />
                            </div>
                            <Form
                                form={form}
                                name="login"
                                layout="vertical"
                                initialValues={{ remember: true }}
                                onFieldsChange={onFieldsChange}
                            >
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[
                                        { required: true, message: 'Please enter your email!' },
                                        { type: 'email', message: 'Please enter a valid email!' }
                                    ]}
                                    className="form_control"
                                    
                                >
                                    <Input
                                        placeholder="Enter your email"
                                        className="input"
                                        suffix={<img src={EmailIcon} alt="Email Icon" className="anticon" />}
                                    />
                                </Form.Item>
                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[
                                        { required: true, message: 'Please enter your password!' },
                                        { min: 6, message: 'Password must be at least 6 characters!' }
                                    ]}
                                    className="form_control"
                                    
                                >
                                    <Input.Password
                                        type="password"
                                        placeholder="Password"
                                        className="input"
                                    />
                                </Form.Item>
                                <Link to={ROUTES.FORGOT_PASSWORD.PATH} className="forgot_password" >Forgot Password?</Link>
                                <div>
                                    <Buttons
                                        href={"/"}
                                        onClick={handleClick}
                                        type="primary"
                                        variant="primary"
                                        className="resetpass_fill_button"
                                        isDisabled={!isFormValid}
                                    >
                                        Login
                                    </Buttons>

                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Signin;
