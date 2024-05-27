import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <h2>Fitur Menakjubkan</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="feature">
              <i className="fas fa-lightbulb"></i>
              <h3>Fitur 1</h3>
              <p>Penjelasan singkat fitur 1.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature">
              <i className="fas fa-cog"></i>
              <h3>Fitur 2</h3>
              <p>Penjelasan singkat fitur 2.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature">
              <i className="fas fa-chart-line"></i>
              <h3>Fitur 3</h3>
              <p>Penjelasan singkat fitur 3.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
