import React, {useEffect,useState} from 'react'
import { Avatar, Box, Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Container, FormControl, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import axios from 'axios'
import useAuth from '../../Hooks/useAuth';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { useForm } from "react-hook-form";

function Cart() {

    const [cartdata, setCartdata] = useState([]);
    const [showshipping, setShowshipping] = useState(false);
    const {user}=useAuth()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [fees, setFees] = useState(0)
    const history = useNavigate();

    useEffect(() => {

        axios.get(`https://still-dusk-95591.herokuapp.com/cartproductshow/${user.email}`)
            .then((res) => setCartdata(res.data))
            .then((err) => console.log(err))
    }, []);

    const showshippingbtn = (fees) => {
        setFees(fees);
        setShowshipping(true)
    }

    const hendledelete = (id) => {
        const confirmdelete = window.confirm("Are you sure you want to delete this product?");
        if (confirmdelete) {
            setShowshipping(false)
            axios.delete(`https://still-dusk-95591.herokuapp.com/cartproductdelete/${id}`).then(res => {

                const filterdata = cartdata.filter(data => data._id !== id);
                setCartdata(filterdata);
                swal("Good job!", "cart product delete successfully", "success");


            }).catch(err => console.log(err))
        }
    }



    let total = 0;
    let i = 0;
    let delivarycharge = 20;
    let tax=0

    const onSubmit = data => {
        const paymentInfo={...data, status:"unpaid", fees , email: user.email}
        console.log(paymentInfo);

    fetch("https://still-dusk-95591.herokuapp.com/saveoder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(paymentInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          history(`/payment/${data.insertedId}`);
        }
      });


};
    return (
        <>
            <Header/>
        <Container style={{marginTop:"10px"}}>

            <Grid container spacing={2}>
                <Grid item md={9} sm={12} xs={12}>
                    <Typography variant='h4' style={{ backgroundColor: "#bcbbff",padding:"8px 15px",borderRadius:"5px"}}>
                       Cart page 
                    </Typography>

                    <Box style={{marginTop:"20px"}}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead style={{backgroundColor:"#bcbbff"}}>
                                    <TableRow>
                                        <TableCell>image</TableCell>
                                        <TableCell align="center">product name</TableCell>
                                        <TableCell align="center">quantity</TableCell>
                                        <TableCell align="center">price</TableCell>
                                        <TableCell align="center">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        cartdata?.map((cart) => {
                                            i++
                                            total = total + parseInt(cart.price);
                                            return (
                                                <TableRow

                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        <img src={cart.src} style={{ width: "100px", height: "100px" }} />
                                                    </TableCell>
                                                    <TableCell align="center">{ cart.title}</TableCell>
                                                    <TableCell align="center">
                                                        <input type="number" value="1" min="1" style={{ width: "80px" }} />
                                                    </TableCell>
                                                    <TableCell align="center">{ cart.price}</TableCell>
                                                    <TableCell align="center">
                                                        <IconButton color="secondary">
                                                            <DeleteIcon onClick={() =>hendledelete(cart._id)}/>
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }
                                        
                                 
                                </TableBody>
                            </Table>
                        </TableContainer>
                      
                    </Box>
                </Grid>
                <Grid item md={3} sm={12} xs={12}>
                    <Box style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",borderRadius:"5px"}}>
                        <h4 style={{textAlign:"center",backgroundColor:"black",color:"white",padding:"10px",borderTopRightRadius:"5px",borderTopLeftRadius:"5px"}}>Order summery</h4>
                       
                        <List>
                            <ListItem
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete">
                                        {i}
                                    </IconButton>
                                }
                            >
                                <ListItemText
                                    primary="Product Quantity"
                                />
                            </ListItem>

                                <ListItem
                                        secondaryAction={
                                            <IconButton edge="end" aria-label="delete">
                                               ${total}
                                            </IconButton>
                                        }
                                  >
                                     <ListItemText
                                         primary="Product total"
                                     />
                            </ListItem>
                            
                            

                            <ListItem
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete">
                                        $20
                                    </IconButton>
                                }
                            >
                                <ListItemText
                                    primary="Delivary charge"
                                />
                            </ListItem>

                            <ListItem
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete">

                                       ${tax = (total + 20) / 10}
                                    </IconButton>
                                }
                            >
                                <ListItemText
                                    primary="Tax(10%)"
                                />
                            </ListItem>
                            <Divider/>
                            <ListItem
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete">
                                        ${total+tax+20}
                                    </IconButton>
                                }
                            >
                                <ListItemText
                                    primary="Total"
                                />
                               
                            </ListItem>
                            <Divider />
                           
                          
                            <Button style={{width:"100%",padding:"15px"}} onClick={()=>showshippingbtn(total+tax+20)}>
                                Proceed to checkout   
                            </Button>
                                
                                
                           
                          
                         </List>
                        
                        </Box>
                        <br />
                        {
                            showshipping===true? <Box>
                                <Typography variant='h4' style={{ backgroundColor: "#bcbbff", padding: "8px 15px", borderRadius: "5px" }}>

                                    Shipping information

                                </Typography>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <FormControl fullWidth style={{ margin: "10px 0px" }} variant="standard">
                                        <TextField id="outlined-basic" {...register("username", { required: true })} label="User name" variant="outlined" />
                                    </FormControl>
                                    {errors.username && <span>This field is required</span>}
                                    <FormControl fullWidth style={{ margin: "10px 0px" }} variant="standard">
                                        <TextField id="outlined-basic" {...register("address", { required: true })} label="Address" variant="outlined" />
                                    </FormControl>
                                    {errors.adderss && <span>This field is required</span>}
                                    <FormControl fullWidth style={{ margin: "10px 0px" }} variant="standard">
                                        <TextField id="outlined-basic" {...register("city", { required: true })} label="City name" variant="outlined" />
                                    </FormControl>
                                    {errors.city && <span>This field is required</span>}
                                    <FormControl fullWidth style={{ margin: "10px 0px" }} variant="standard">
                                        <TextField id="outlined-basic" {...register("phonenumber", { required: true })} label="Phonenumber" variant="outlined" />
                                    </FormControl>
                                    {errors.phonenumber && <span>This field is required</span>}
                                    <FormControl fullWidth style={{ margin: "10px 0px" }} variant="standard">
                                        <TextField id="outlined-basic" {...register("postalcode", { required: true })} label="Postalcode" variant="outlined" />
                                    </FormControl>
                                    {errors.postalcode && <span>This field is required</span>}
                                    <FormControl fullWidth style={{ margin: "10px 0px" }} variant="standard">
                                        <Button type="submit" style={{ width: "100%" }} variant='contained'>order submit</Button>
                                    </FormControl>
                                </form>
                            </Box>:""
                        }
                        
                </Grid>
                
            </Grid>
            </Container>
            <Footer/>
        </>
    )
}

export default Cart
