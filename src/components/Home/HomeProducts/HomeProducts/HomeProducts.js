import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import HomeProduct from '../HomeProduct/HomeProduct';
import './HomeProducts.css'


const HomeProducts = () => {
    const [homeProducts, setHomeProducts] = useState([]);
    const [limit, setLimit] = useState(6);

    useEffect(() => {
        fetch('https://still-dusk-95591.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setHomeProducts(data))
    }, [])
    return (
       <Container>
            <div>
                <h2 className='mb-5 mt-5 services_text text-sm-start mx-3'>Dress collection</h2>
                <div className="services_container">

                    {
                        homeProducts.slice(0, limit ? limit : homeProducts.length).map(homeProduct => <HomeProduct
                            homeProduct={homeProduct.id}
                            homeProduct={homeProduct}
                        ></HomeProduct>)
                    }

                </div>
            </div>

            <hr style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: 2,
                borderColor: '#000000'
            }} />
       </Container>
    );
};

export default HomeProducts;