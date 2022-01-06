import React from 'react';
import { Container } from 'react-bootstrap';
import blog1 from '../../../images/blog/blog-1.png';
import blog2 from '../../../images/blog/blog-2.png';
import blog3 from '../../../images/blog/blog-3.png';
import './Blog.css'

const Blog = () => {
    return (
       <Container>
            <div className='mt-5 my-5'>
                <h2 className='text-md-start blog_text'>From The Blog</h2>
                <div className='blog_container'>
                    <div className='blog'>
                        <div className="blog_imag">
                            <img src={blog1} alt="" />
                        </div>
                        <h3 className='text-md-start'>The market by storm</h3>
                        <p className='text-md-start'>Inspired by our very own star, the Fusion is designed for those who aren't afraid to stand out from the background.Plated in rose gold and constructed with a fully stainless steel case, this watch is for those who know what they want and won't settle for less. </p>
                    </div>

                    <div className='blog'>
                        <div className="blog_imag">
                            <img src={blog2} alt="" />
                        </div>
                        <h3 className='text-md-start'> B2C E-commerce model</h3>
                        <p className='text-md-start'>Inspired by our very own star, the Fusion is designed for those who aren't afraid to stand out from the background.Plated in rose gold and constructed with a fully stainless steel case, this watch is for those who know what they want and won't settle for less. </p>
                    </div>

                    <div className='blog'>
                        <div className="blog_imag">
                            <img  src={blog3} alt="" />
                        </div>
                        <h3 className='text-md-start'>Goods individual customers</h3>
                        <p className='text-md-start'>Inspired by our very own star, the Fusion is designed for those who aren't afraid to stand out from the background.Plated in rose gold and constructed with a fully stainless steel case, this watch is for those who know what they want and won't settle for less. </p>
                    </div>
                </div>

            </div>
       </Container>
    );
};

export default Blog;