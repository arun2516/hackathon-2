import React, { useContext } from "react";
import NavCont from "./components/navbar";
import Login from "./components/loginModal";
import { LoginContext } from "./App";
import Footer from "./components/footer";

const About = () => {
  const [modalShow, setModalShow] = useContext(LoginContext);

  return (
    <React.Fragment>
      <div className="App container-fluid">
        <Login show={modalShow} onHide={() => setModalShow(false)} />
        <div className="row">
          <div className="col-12 about-cont">
            <NavCont />
            <h1 className="text-white col-12 text-center mb-5 mt-4">
              About Us
            </h1>
            <div className="text-light col-md-8 offset-md-2" >
              <h4 >
              MED-RENT Medical delivers quality care with compassion. We bring world class medical care into our patients’ homes and aim to make primary healthcare not only more accessible, but also more affordable and accountable to our patients’ needs.
                <br />
                <br /> With MED-RENT, you can be sure that you will receive hospital-quality healthcare in the comfort of your home. We provide doctors, nurses, and physiotherapists for home visits who have passed our rigorous hiring standards and have had their backgrounds and medical knowledge verified by senior doctors. We facilitate lab tests at home and medical equipment rentals, making health care more accessible for our patients.
                <br />
                <br />MED-RENT Medical’s clinical procedures were developed in consultation with leading home healthcare professionals in the United States, ensuring that you receive only the highest quality medical care; all of our doctors are members of international medical accreditation bodies. As a result of using our services, our patients are able to stay in their homes longer, save money, and have peace of mind.
                </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 footer-cont">
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default About;
