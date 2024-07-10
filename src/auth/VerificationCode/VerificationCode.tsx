import React, { useEffect, useState } from 'react';
import { Row, Col, Form } from 'antd';
import OTPInput from 'react-otp-input';
import '../../style/auth.css';
import AuthsideBanner from '../../components/Common/AuthsideBanner';
import Buttons from '../../components/Common/Button';
import { ROUTES } from '../../constant';

const VerificationCode: React.FC = () => {
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(() => {
    const storedTime = localStorage.getItem('otpTimer');
    return storedTime ? parseInt(storedTime) : 60;
  });
  const [canResend, setCanResend] = useState(false);
  const [showVerifyButton, setShowVerifyButton] = useState(true);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          const newTime = prev - 1;
          localStorage.setItem('otpTimer', newTime.toString());
          return newTime;
        });
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
      setShowVerifyButton(false);
      localStorage.removeItem('otpTimer');
    }
  }, [timer]);

  const handleClick = () => {
  };

  const handleResend = () => {
    if (canResend) {
      setTimer(60);
      setCanResend(false);
      setShowVerifyButton(true);
      localStorage.setItem('otpTimer', '60');
    }
  };

  return (
    <>
      <div className="login_container">
        <Row className="row">
          <Col xs={24} sm={24} md={24} lg={12} className="logo_col">
            <AuthsideBanner />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} className="form_col">
            <div className="form_container">
              <div className="title_section">
                <h2 className="title" >Verification Code</h2>
                <p className="description" >We have sent a verification code to the email address</p>
              </div>
              <Form
                name="login"
                layout="vertical"
                initialValues={{ remember: true }}
              >
                <Form.Item className="otp_container" >
                  <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderInput={(props) => <input {...props} />}
                  />
                  <div className="resend_otp_div">
                    {!canResend ? (
                      <p className="otp_time">Resend code in 00:{timer < 10 ? `0${timer}` : timer}</p>
                    ) : (
                      <p className="resend_otp" onClick={handleResend}>Resend the code.</p>
                    )}
                  </div>
                </Form.Item>

                {showVerifyButton && (
                  <div>

                    <Buttons
                      href={ROUTES.NEW_PASSWORD.PATH}
                      onClick={handleClick}
                      type="primary"
                      variant="primary"
                      className="custom-class"
                      isDisabled={false}
                    >
                      Verify
                    </Buttons>
                  </div>
                )}
                <div>

                  <Buttons
                    href={ROUTES.SIGN_IN.PATH}
                    onClick={handleClick}
                    type="secondary"
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
    </>
  );
};

export default VerificationCode;
