import Logo from "../../assets/images/AuthImg/logo.svg";
import Demeter from "../../assets/images/AuthImg/demeter.svg";
import Graph from "../../assets/images/AuthImg/graph.svg";

function AuthsideBanner() {
    return (
        <>
            <div className="logo_container">
                <div className="under_img">
                    <div>
                        <img src={Logo} alt="Demeter Logo" className="logo" />
                    </div>
                    <div>
                        <img src={Demeter} alt="Demeter Logo" className="logo" />
                    </div>
                </div>
                <div className="graph_logo">
                    <img src={Graph} alt="Demeter Logo" className="logo" />
                </div>
            </div>
        </>
    )
}

export default AuthsideBanner
