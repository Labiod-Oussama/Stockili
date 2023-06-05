import React from 'react';
import { mockDataContacts } from '../Data/DataContacts';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Container } from '@mui/material';
import { grey } from '@mui/material/colors';
import TopBar from '../../Global/TopBar';
function Contacts() {
    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "registrarId", headerName: "Registrar ID", editable: true },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            editable: true
        },
        {
            field: "Store",
            headerName: "Store name",
            flex: 1,
            editable: true
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
            editable: true
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
            editable: true
        },
        {
            field: "address",
            headerName: "Address",
            flex: 1,
            editable: true
        }
    ];
    return (
        <>
            <TopBar title='All clients' />
            <Container >
                <Box
                    m="40px 0 0 0"
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
                        "& .css-axafay-MuiDataGrid-virtualScroller": { overflowX: "hidden" },
                        "& .MuiDataGrid-row": {
                            borderBottom: 'solid 1px grey'
                        }
                    }}
                >
                    <DataGrid
                        checkboxSelection
                        rows={mockDataContacts}
                        columns={columns}
                        components={{ Toolbar: GridToolbar }}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 6,
                                }
                            }
                        }}
                    />
                </Box>
            </Container>
        </>
    )
}

export default Contacts