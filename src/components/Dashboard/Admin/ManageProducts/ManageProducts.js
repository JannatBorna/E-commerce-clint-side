import React,{useState,useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Container, Grid } from '@mui/material';
import axios from 'axios'
import swal from 'sweetalert';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));




export default function ManageProducts() {

    const [mydata, setMydata] = useState([]);
    let i = 0;
    useEffect(() => {
        axios.get("https://still-dusk-95591.herokuapp.com/products")
        .then(res=>setMydata(res.data)).catch(err=>console.log(err))
    }, [mydata])
    
    const hendledelete = (id) => {
         const confirmdelete = window.confirm("Are you sure you want to delete this product?");
         if (confirmdelete) {

             axios.delete(`https://still-dusk-95591.herokuapp.com/productdelete/${id}`).then(res => {
                 
                 const filterdata = mydata.filter(data => data._id !== id);
                 setMydata(filterdata);
                 swal("Good job!", "product delete successfully", "success");
                 
                
             }).catch(err => console.log(err))
         }
         }
    
    return (
      
             <Grid container spacing={2}>
            <Grid item md={12} sm={12} xs={12}>
                <Box style={{ marginTop: "20px" }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>serial</StyledTableCell>
                                    <StyledTableCell align="right">product name</StyledTableCell>
                                    <StyledTableCell align="right">product price</StyledTableCell>
                                    <StyledTableCell align="right">product image</StyledTableCell>
                                    <StyledTableCell align="right">product category</StyledTableCell>
                                    <StyledTableCell align="right">Action</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { 
                                    mydata.map((data) => {
                                       i++
                                        return (
                                            <StyledTableRow >
                                                <StyledTableCell component="th" scope="row">
                                                    {i}
                                                </StyledTableCell>
                                                <StyledTableCell align="right">{data.title}</StyledTableCell>
                                                <StyledTableCell align="right">{data.price}</StyledTableCell>
                                                <StyledTableCell align="right">
                                                    <img src={data.src} width="80" height="90"/>
                                                </StyledTableCell>
                                                <StyledTableCell align="right">{data.category}</StyledTableCell>
                                                <StyledTableCell align="right">
                                                    <Button variant='contained' onClick={()=>hendledelete(data._id)}>Delete</Button>
                                                </StyledTableCell>
                                            </StyledTableRow>  
                                        )
                                    })
                              }
                                    
                              
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </Box>
                </Grid>
                
            </Grid>
        
       
    );
}