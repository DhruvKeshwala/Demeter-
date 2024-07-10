import { Form, Input, Row, Col, Alert } from "antd";
import AlertIcon from "../../assets/images/AuthImg/alert.svg";
import { FormInstance } from "antd/lib/form";
import AuthsideBanner from "../../components/Common/AuthsideBanner";
import Buttons from "../../components/Common/Button";
import { ROUTES } from "../../constant";
import { useState } from "react";

const NewPassword: React.FC = () => {
  const [form] = Form.useForm<FormInstance>();
  const [isFormValid, setIsFormValid] = useState(false);

  const handleClick = () => {
    form.validateFields()
  };

  const onFieldsChange = () => {
    const newpassword = form.getFieldValue('newpassword');
    const confirmpassword = form.getFieldValue('confirmpassword');
    const hasErrors = form.getFieldsError().some(({ errors }) => errors.length > 0);

    setIsFormValid(newpassword && confirmpassword && !hasErrors);
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
                <h2 className="title" >New Password</h2>
                <p className="description" >
                  Your password should be at least 8 characters long, and
                  include a upper and lower case letters, numbers, and special
                  characters.
                </p>
              </div>
              <div className=" alert_div">
                <Alert
                  message="Invalid email address!"
                  type="error"
                  icon={<img src={AlertIcon} />}
                  showIcon
                  closable
                />
              </div>
              <Form
                form={form}
                name="login"
                layout="vertical"
                initialValues={{ remember: true }}
                onFieldsChange={onFieldsChange}
              >
                <Form.Item
                  label="New password"
                  name="newpassword"
                  rules={[
                    {
                      required: true,
                      message: "Please enter Your New password!",
                    },
                  ]}
                  className="form_control"
                  
                >
                  <Input.Password
                    type="password"
                    placeholder="Enter new password"
                    className="input"
                  />
                </Form.Item>
                <Form.Item
                  label="Confirm password "
                  name="confirmpassword"
                  rules={[
                    {
                      required: true,
                      message: "Please enter Confirm password!",
                    },
                  ]}
                  className="form_control"
                  
                >
                  <Input.Password
                    type="password"
                    placeholder="Confirm new password"
                    className="input"
                  />
                </Form.Item>
                <div>
                  <Buttons
                    href={ROUTES.RESET_PASSWORD_SUCCESS.PATH}
                    onClick={handleClick}
                    type="primary"
                    variant="primary"
                    className="newpassword_fill_btn"
                    isDisabled={!isFormValid}
                  >
                    Update
                  </Buttons>
                </div>
                <div>
                  <Buttons
                    href={ROUTES.FORGOT_PASSWORD.PATH}
                    onClick={handleClick}
                    type="primary"
                    variant="secondary"
                    className="custom-class"
                    isDisabled={false}
                  >
                    Back
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

export default NewPassword;
