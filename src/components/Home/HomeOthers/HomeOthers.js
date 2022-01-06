import React from 'react';
import { Container } from 'react-bootstrap';
import './HomeOthers.css'


const HomeOthers = () => {
    return (

        <Container>

            <div className="all_items">
                <div className="item_size d-flex border align-items-center  rounded-3">
                    <div>
                        <i className="fas fa-paper-plane mx-2"></i>
                    </div>
                    <div className='items'>
                        <h5>Worlwide Shipping</h5>
                        <p>Order above $100</p>
                    </div>
                </div>

                <div className="item_size d-flex border align-items-center  rounded-3">
                    <i className="fab fa-artstation mx-2"></i>
                    <div className='items'>
                        <h5>Easy 30 Days Returns</h5>
                        <p>Back returns in 7 days</p>
                    </div>
                </div>


                <div className="item_size d-flex border align-items-center  rounded-3">
                    <i className="fab fa-shopify mx-2"></i>
                    <div className='items'>
                        <h5>Money Back Guarant</h5>
                        <p>Guarantee with in 30 day</p>
                    </div>
                </div>


                <div className="item_size d-flex border align-items-center rounded-3">
                    <i className="fas fa-headset mx-2"></i>
                    <div className='items'>
                        <h5>Easy online support</h5>
                        <p>Any time support</p>
                    </div>
                </div>

            </div>
        </Container> 

        // <section className="container my-4 ">
        //     <div className="first_Section">
        //         <div className="first_design">
        //             <div className='inner'>
        //                 <i className="fas fa-headset mx-2"></i>
        //             </div>
        //             <div className="shoes p-3 border d-flex align-items-center justify-content-between rounded-3">
        //                 <h5>Easy online support</h5>
        //                 <p>Any time support</p>
        //             </div>
        //         </div>  

        //         <div className="first_design">
        //             <div className='inner'>
        //                 <i className="fas fa-headset mx-2"></i>
        //             </div>
        //             <div className="shoes p-3 border d-flex align-items-center justify-content-between rounded-3">
        //                 <h5>Easy online support</h5>
        //                 <p>Any time support</p>
        //             </div>
        //         </div>  

        //         <div className="first_design">
        //             <div className='inner'>
        //                 <i className="fas fa-headset mx-2"></i>
        //                 </div>
        //             <div className="item_size d-flex border align-items-center  rounded-3">
        //                 <h5>Easy online support</h5>
        //                 <p>Any time support</p>
        //               </div>
        //         </div>  
                    


        //     </div>
        // </section>
        
    );
};

export default HomeOthers;

