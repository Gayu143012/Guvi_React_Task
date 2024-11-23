import React from 'react';

const FeatureItem = ({ icon, title, description }) => {
    return (
      <div className="col-lg-4">
        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
          <div className="features-icons-icon d-flex">
            <div style={{ fontSize: '4rem', margin: 'auto', color: 'var(--bs-primary)' }}>
              {icon}
            </div>
          </div>
          <h3>{title}</h3>
          <p className="lead mb-0">{description}</p>
        </div>
      </div>
    );
  };
  export default FeatureItem;
  
  

