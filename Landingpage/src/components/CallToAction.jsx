import React from "react";
import PropTypes from "prop-types";
import EmailForm from "./EmailForm"; 
import ButtonComponent from "./ButtonComponent"; 

const CallToAction = ({ title, onSubmit }) => {
  return (
    <section className="call-to-action text-white text-center" id="signup">
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <h2 className="mb-4">{title}</h2>
            {/* EmailForm Component */}
            <EmailForm onSubmit={onSubmit}>
              <div className="row">
                {/* Email Input */}
                <div className="col">
                  <EmailForm.Input
                    id="emailAddressBelow"
                    placeholder="Email Address"
                  />
                </div>
                {/* Submit Button */}
                 <ButtonComponent value="SUBMIT"/>
              </div>
            </EmailForm>
          </div>
        </div>
      </div>
    </section>
  );
};

CallToAction.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CallToAction;
