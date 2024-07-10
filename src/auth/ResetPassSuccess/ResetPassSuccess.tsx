import '../../style/auth.css';
import { Row, Col } from 'antd';
import ResetPass from "../../assets/images/AuthImg/pass.png";
import AuthsideBanner from '../../components/Common/AuthsideBanner';
import Buttons from '../../components/Common/Button';
import { ROUTES } from '../../constant';

const ResetPassSuccess: React.FC = () => {
    const handleClick = () => {
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
                            <div className="resetpass_img" >
                                <img src={ResetPass} alt="" />
                            </div>
                            <div className="title_section">
                                <h2 className="title" >Reset Password
                                    Successfully!</h2>
                                <p className="description" >Your password has been reset successfully. You can now log in with your new password.</p>
                            </div>
                            <div>
                                <Buttons
                                    href={ROUTES.SIGN_IN.PATH}
                                    onClick={handleClick}
                                    type="primary"
                                    variant="primary"
                                    className="resetpass_fill_button"
                                    isDisabled={false}
                                >
                                    Login
                                </Buttons>

                            </div>

                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ResetPassSuccess;
