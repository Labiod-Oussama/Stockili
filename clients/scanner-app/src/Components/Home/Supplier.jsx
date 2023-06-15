import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { DataGrid } from "@mui/x-data-grid";
import { grey } from '@mui/material/colors';

const Supplier = () => {
    const [Facture, setFacture] = useState({})
    const [allFacture, setAllFactures] = useState([])
    const [idCounter, setIdCounter] = useState(1);
    const [Total, setTotal] = useState(0)
    useEffect(() => {
        if (Facture?.quantite && Facture?.price) {
            setTotal(Facture?.quantite * Facture?.price)
            setFacture({...Facture,total:Total})
        }
    }, [Facture?.quantite, Facture?.price])
    const isObjectEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    }
    const isValueObjectEmpty = (obj) => {
        var condition = true;
        if (Object.keys(obj).length != 5) {
            return true
        }
        Object.values(obj).forEach(ele => {
            if (ele != '') {
                condition = false
            }
            else {
                condition = true
            }
        })
        return condition;
    }
    const handleAdd = () => {
        if (!isObjectEmpty(Facture) && !isValueObjectEmpty(Facture)) {
            setAllFactures((prevFactures) => [
                ...prevFactures,
                { ...Facture, id: idCounter }
            ]);
            setIdCounter((prevCounter) => prevCounter + 1);
        }
    }
    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        {
            field: "product",
            headerName: "Products",
            flex: 1,
            editable: true
        },
        {
            field: "price",
            headerName: "Price (DA)",
            flex: 1,
            editable: true
        },
        {
            field: "quantite",
            headerName: "Quantite",
            flex: 1,
            editable: true
        },
        {
            field: "total",
            headerName: "Total (DA)",
            flex: 1,
            editable: true
        }
    ]

    return (
        <Container sx={{ mt: 2 }}>
            <Typography variant='h4' color='primary' mb={2} sx={{ textAlign: 'center', fontWeight: 'bold', letterSpacing: '2px' }}>Soummam</Typography>
            <Paper elevation={2} sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 3, mt: 4, mb: 3 }}>
                <TextField
                    type='text'
                    variant='outlined'
                    color='primary'
                    label="Product's name"
                    onChange={(e) => setFacture({ ...Facture, product: e.target.value })}
                    sx={{ flex: '1 1 150px' }}
                />
                <TextField
                    type='number'
                    variant='outlined'
                    color='primary'
                    label="Quantite"
                    onChange={(e) => setFacture({ ...Facture, quantite: e.target.value })}
                    sx={{ flex: '1 1 150px' }}
                />
                <TextField
                    type='number'
                    variant='outlined'
                    color='primary'
                    label="price"
                    onChange={(e) => setFacture({ ...Facture, price: e.target.value })}
                    sx={{ flex: '1 1 150px' }}
                />
                <TextField
                    type='text'
                    variant='outlined'
                    color='primary'
                    label="Total"
                    InputProps={{
                        readOnly: true,
                    }}
                    value={Total}
                    sx={{ flex: '1 1 150px' }}
                />
                <TextField
                    type='date'
                    variant='outlined'
                    color='primary'
                    onChange={(e) => setFacture({ ...Facture, date: e.target.value })}
                    sx={{ flex: '1 1 150px' }}
                />
                <Button
                    variant='contained'
                    color='primary'
                    endIcon={<AddCircleIcon />}
                    sx={{ fontWeight: 'bold' }}
                    onClick={handleAdd}
                >
                    Add
                </Button>

            </Paper>
            <Box
                m="10px 0 0 0"
                sx={{
                    "& .MuiDataGrid-columnHeaders": {
                        bgcolor: 'primary.A100',
                        color: 'primary.main'
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: grey[300],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor: 'primary.A100',
                    },
                    "& .MuiDataGrid-row": {
                        borderBottom: 'solid 1px grey'
                    },
                }}
            >
                {

                    allFacture.length != 0 &&
                    <DataGrid
                        rows={allFacture}
                        columns={columns}
                        getRowId={(row) => row.id}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                }
            </Box>

        </Container>
    )
}

export default Supplier