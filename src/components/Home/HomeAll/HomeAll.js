import React from 'react';
import img1 from '../../../images/categories/watch-3.png';
import img2 from '../../../images/categories/watch-2.png';
import img3 from '../../../images/categories/watch.png';
import './HomeAll.css'
import { Container } from 'react-bootstrap';

const HomeAll = () => {
    return (
      <Container>
            <div className="first_Section">
               <div className="first_design">
                    <div className="watch p-3 border d-flex align-items-center justify-content-between rounded-3">
                        <h3 className="text-black">Apple Watch <br /> Flat 20% Discount</h3>
                     <div className='inner'>
                            <img src={img1} alt="" />
                     </div>
                    </div>
                </div>

                <div className="first_design">
                    <div className="bag p-3 border d-flex align-items-center justify-content-between rounded-3">
                        <h3 className="text-black">Men's Watches <br /> Flat 20% Discount</h3>
                        <div className='inner'>
                            <img src={img2} alt="" />
                        </div>
                    </div>
                </div>

                <div className="first_design">
                    <div className="shoes p-3 border d-flex align-items-center justify-content-between rounded-3">
                        <h3 className="text-black">Casio g-shock<br /> Flat 20% Discount</h3>
                        <div className='inner'>
                            <img src={img3} alt="" />
                        </div>
                    </div>
                </div>


            </div>
   
           </Container>
       
    );
};

export default HomeAll;

                      
                    
                
                




                

                    


                
