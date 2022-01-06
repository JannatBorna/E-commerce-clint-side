import React from 'react';
import './Slide.css';

const Slide = () => {
    return (
        <div className="custom-container">
            <div className="d-flex justify-content-around mt-3 pt-3">
                <div>
                    <img className="company-img" src="https://i.ibb.co/0Z6TNFX/3-155x63.png" alt="" />
                </div>
                <div>
                    <img className="company-img" src="https://i.ibb.co/k2HPPdk/2-155x63.png" alt="" />
                </div>
                <div>
                    <img className="company-img" src="https://i.ibb.co/P5GQh3s/6-155x63.png" alt="" />
                </div>
                <div>
                    <img className="company-img" src="https://i.ibb.co/jDX7DSn/1-155x63.png" alt="" />
                </div>
                <div>
                    <img className="company-img" src="https://i.ibb.co/q1R2XP0/4-155x63.png" alt="" />
                </div>
            </div>


            <hr style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: 2,
                borderColor: '#000000'
            }} />
        </div>
    );
};

export default Slide;