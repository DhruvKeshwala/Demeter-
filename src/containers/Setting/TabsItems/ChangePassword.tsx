import { Form, Input } from 'antd';
import '../../../style/main.css';
import Buttons from '../../../components/Common/Button';
import { useState } from 'react';

function ChangePassword() {
    const [form] = Form.useForm();
    const [isFormValid, setIsFormValid] = useState(false);

    const handleClick = () => {
        form.validateFields()
    };

    const onFieldsChange = () => {
        const currentPassword = form.getFieldValue('currentPassword');
        const newPassword = form.getFieldValue('newPassword');
        const confirmPassword = form.getFieldValue('confirmPassword');

        const hasErrors = form.getFieldsError().some(({ errors }) => errors.length > 0);

        setIsFormValid(currentPassword && newPassword && confirmPassword && !hasErrors);
    };
    const onFinish = () => {
    };



    return (
        <div>
            <div className="contact_section">
                <Form
                    form={form}
                    name="changePassword"
                    onFinish={onFinish}
                    layout="vertical"
                    className="setting_form"
                    onFieldsChange={onFieldsChange}
                >
                    <Form.Item
                        label="Current password"
                        name="currentPassword"
                        rules={[{ required: true, message: 'Please enter your current password!' }]}
                        className="form_control"
                        
                    >
                        <Input.Password
                            type="password"
                            placeholder="Current password"
                            className="input"
                        />
                    </Form.Item>

                    <div className="form_control newpassword_section">
                        <Form.Item
                            label="New password"
                            name="newPassword"
                            rules={[
                                { required: true, message: 'Please enter your new password!' },
                                { min: 6, message: 'Password must be at least 6 characters long!' }
                            ]}
                            className="form_control"
                            
                        >
                            <Input.Password
                                type="password"
                                placeholder="New password"
                                className="input"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Confirm password"
                            name="confirmPassword"
                            dependencies={['newPassword']}
                            rules={[
                                { required: true, message: 'Please confirm your password!' },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('newPassword') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The two passwords do not match!'));
                                    },
                                }),
                            ]}
                            className="form_control"
                            
                        >
                            <Input.Password
                                type="password"
                                placeholder="Confirm password"
                                className="input"
                            />
                        </Form.Item>
                    </div>

                    <div className="delete_button_section password_buttons" >
                        <Buttons
                            type="secondary"
                            variant="secondary"
                            className="password_btn"
                            isDisabled={false}
                        >
                            Cancel
                        </Buttons>
                        <Buttons
                            type="primary"
                            variant="primary"
                            className="password_btn"
                            onClick={handleClick}
                            isDisabled={!isFormValid}
                        >
                            Save
                        </Buttons>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default ChangePassword;
