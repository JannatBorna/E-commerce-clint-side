import { Box, Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React, { useState,useEffect } from 'react'
import Magnifier from "react-magnifier";
import { Link, useNavigate } from 'react-router-dom';
import './singlepage.css'
import useAuth from "../../Hooks/useAuth";
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Header from '../Shared/Header';
import Footer from '../Shared/Footer/Footer';
function Singlepage() {
    const [indexNumber, setIndexNumber] = useState(0);
    const history = useNavigate();
    const { user } = useAuth();
    const { id } = useParams();
    const [product, setProduct] = useState({})
    const [category, setCategory] = useState("");
    const [categorydata, setCategorydata] = useState([]);
    useEffect(() => {

        axios.get(`https://still-dusk-95591.herokuapp.com/singleproduct/${id}`)
            .then(res => {
                setProduct(res.data);
                setCategory(res.data.category)
            }).catch(err => console.log(err))
    }, [id])

    useEffect(() => {

        axios.get(`https://still-dusk-95591.herokuapp.com/categoryproduct/${category}`)
            .then(res => {
                setCategorydata(res.data);
              
            }).catch(err => console.log(err))
    }, [category])

   
    const addToCart = () => {
        console.log('clciked')
        let mydata = { ...product }
        let {category,description,price,src,title}=mydata
        console.log(category)
        const cart = {
            category,
            description,
            price,
            src,
            title,
            status: "pending",
            email:user.email
        };

        fetch("https://still-dusk-95591.herokuapp.com/addtocart", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(cart),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
                console.log('success');
              history("/cartpage");
            }
          });
      };

    
    return (
        <>
        <Header/>
        <Container sx={{ mt: "30px" }}>
            {/* singleproduct */}
            <Grid container spacing={2} sx={{paddingBottom:"15px",paddingRight:"15px",borderRadius:"10px"}}>
                <Grid item md={5} sm={6} xs={12} >
                    <Magnifier src={product.src} width="100%" height="500px"  style={{ borderRadius: "5px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" }} />
                </Grid>

                <Grid item md={7} xs={12} sm={6}>
                    <Box sx={{ display: "flex", justifyContent: 'space-between'}}>
                        <h2>{product.title}</h2>
                        <h5 style={{marginTop:"10px",color:"red"}}>${product.price}</h5>
                    </Box>
                    
                    <p style={{textAlign:"justify"}}>{product.description}</p>
                    
                    <br/>
                    <Button onClick={addToCart}  variant='contained' color="secondary">Add to cart</Button>
                </Grid>
            </Grid> 
            {/* singleproduct end */}
            <h2 style={{ backgroundColor:"#bcbbff",padding:"15px 15px",borderRadius:"5px", marginBottom:"15px"}}>Realated product</h2>
            <Grid container spacing={2}>
                {
                    categorydata.map((catdata) => {
                        return (
                            <Grid item md={3} sm={6} xs={6}>
                                <Card className="mycard" sx={{}}>
                                    <img src={catdata.src} width="100%" height="300px" />
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {catdata.title}
                                        </Typography>

                                    </CardContent>
                                    <CardActions>
                                        <ButtonGroup disableElevation variant="contained" style={{ width: "100%" }}>
                                           
                                            <Link to={`/singlepage/${catdata._id}`} variant="contained" style={{
                                                width: "100%",
                                                backgroundColor: "green",
                                                borderRadius: "5px",
                                                color: "white",
                                                display:"flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                textDecoration: "none",
                                                fontWeight: "bold",
                                                padding:"5px"
                                                
                                            }}>Details</Link>
                                            
                                            
                                            
                                           
                                        </ButtonGroup>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })
                }
                
            </Grid>
            </Container>
            <Footer/>
        </>
    )
}

export default Singlepage
