import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextareaAutosize, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'
import swal from 'sweetalert';
const AddProducts = () => {
    const [category, setCategory] = useState("");

    const { register, handleSubmit, watch, formState: { errors } ,reset} = useForm();
    const onSubmit = (data) => {
        console.log(data.src)
        const formData = new FormData();
        formData.append('title',data.title);
        formData.append('src', data.src);
        formData.append("category", data.category)
        formData.append("price", data.price)
        formData.append("description",data.description)
        
        // for (var pair of formData.entries()) {
        //     console.log(pair[0] + ', ' + pair[1]);
        // }
        
        axios.post('https://still-dusk-95591.herokuapp.com/addproduct', formData)
            .then(res => {
                if (res.data.insertedId) {
                    swal("Good job!", "product add successfully", "success"); 
                }
             
            }).catch(err => console.log(err));
        reset();
        
    };

    const handleChangecategory = (e) => {
        setCategory(e.target.value)
    }
    return (
        <Grid container spacing={2}>
            <Grid item md={12} sm={12} xs={12}>


                <Box>
                    <Typography variant='h4' style={{ backgroundColor: "#bcbbff", padding: "8px 15px", borderRadius: "5px" }}>

                        Product Add

                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <FormControl fullWidth style={{ margin: "10px 0px" }} variant="standard">
                            <TextField id="outlined-basic"{...register("title", { required: true })} label="product title" variant="outlined" />
                        </FormControl>
                        <FormControl fullWidth style={{ margin: "10px 0px" }} variant="standard">
                            <TextField id="outlined-basic" {...register("price", { required: true })} label="product price" variant="outlined" />
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                {...register("category", { required: true })}
                                value={category}
                                label="select category"
                                onChange={handleChangecategory}
                                sx={{ width: "300px" }}
                            >

                                <MenuItem value="Male">Male</MenuItem>
                                <MenuItem value="Female">Female</MenuItem>
                                <MenuItem value="child">Child</MenuItem>
                            </Select>
                        </FormControl>
                        <TextareaAutosize
                            maxRows={4}
                            aria-label="maximum height"
                            placeholder="Maximum 4 rows"
                            {...register("description", { required: true })}
                            style={{ width: "100%", height: "200px", marginTop: "20px" }}
                        />
                        <FormControl fullWidth style={{ margin: "10px 0px" }} variant="standard">
                            <TextField id="outlined-basic" {...register("src", { required: true })} label="Image link" variant="outlined" />
                        </FormControl>
                        
                        <FormControl fullWidth style={{ margin: "10px 0px" }} variant="standard">
                            <Button type="submit" style={{ width: "100%" }} variant='contained'>Add product</Button>
                        </FormControl>
                    </form>
                </Box>
            </Grid>

        </Grid>
    );
};

export default AddProducts;




