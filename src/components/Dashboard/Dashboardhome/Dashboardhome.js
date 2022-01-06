import React, { useState, useEffect } from 'react';
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
        axios.get("https://still-dusk-95591.herokuapp.com/allorders")
            .then(res => setMydata(res.data)).catch(err => console.log(err))
    }, [mydata])
    return (

        <Grid container spacing={2}>
            <Grid item md={12} sm={12} xs={12}>
                <Box style={{ marginTop: "20px" }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>serial</StyledTableCell>
                                    <StyledTableCell align="right">customer name</StyledTableCell>
                                    <StyledTableCell align="right">customer country</StyledTableCell>
                                    <StyledTableCell align="right">customer city</StyledTableCell>
                                    <StyledTableCell align="right">phonenumber</StyledTableCell>
                                    <StyledTableCell align="right">payment</StyledTableCell>
                                    
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
                                                <StyledTableCell align="right">{data.username}</StyledTableCell>
                                                <StyledTableCell align="right">{data.address}</StyledTableCell>
                                                <StyledTableCell align="right">{data.city}</StyledTableCell>
                                                <StyledTableCell align="right">{data.phonenumber}</StyledTableCell>
                                                <StyledTableCell align="right">${data.fees}</StyledTableCell>
                                               
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