import React, { useState } from 'react';
import { mockDataAccept } from '../Data/DataContacts';
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Container } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { green, grey } from '@mui/material/colors';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import TopBar from '../../Global/TopBar';
function AddClients() {
    const [selected, setSelected] = useState({ title: 'Accept it', color: 'primary.A100' });
    const [ListAccept, setListAccept] = useState([]);
    const [ListRejected, setListRejected] = useState([]);
    // const [idSelected, setIdSelected] = useState(null)
    // const [isCellClicked, setIsCellClicked] = useState(false);
    // const handleCellClick = (params) => {
    //     if (!isCellClicked) {
    //         const clickedRowId = params.id;
    //         setIdSelected(clickedRowId);
    //     }
    // };
    // const handleAccept = () => {
    //     console.log(idSelected);
    //     setIsCellClicked(false)
    //     if (idSelected) {
    //         setListAccept([...ListAccept, idSelected]);
    //     }
    // }
    // const handleReject = () => {
    //     console.log(idSelected);
    //     setIsCellClicked(false)
    //     if (idSelected) {
    //         setListRejected([...ListRejected, idSelected]);

    //     }
    // }
    const renderSelectInput = (params) => {
        return (
            <>
                <Button
                    variant='contained'
                    sx={{ bgcolor: green[600], mr: 1, color: 'primary.main', fontWeight: 'bold' }}
                >
                    Accept
                </Button>
                <Button variant='contained'
                    sx={{ bgcolor: 'primary.A400', color: 'primary.main', fontWeight: 'bold' }}>
                    Reject
                </Button>

                {/* {
                    ListAccept.some(id => id == params.id) ? <Button
                        variant='contained'
                        sx={{ bgcolor: green[600], mr: 1, color: 'primary.main' }}
                    >
                        Accepted
                    </Button> : ListRejected.some(id => id == params.id) ? <Button
                        variant='contained'
                        sx={{ bgcolor: 'primary.A400', mr: 1, color: 'primary.main' }}
                    >
                        Rejected
                    </Button> : <>
                        <Button
                            variant='contained'
                            sx={{ bgcolor: 'primary.A100', mr: 1, color: 'primary.main' }}
                            onClick={handleAccept}
                        >
                            Accept le
                        </Button>
                        <Button variant='contained'
                            onClick={handleReject}
                            sx={{ bgcolor: 'primary.A400', color: 'primary.main' }}>
                            Reject le
                        </Button>
                    </>
                } */}
            </>
        )
    };
    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            editable: true
        },
        {
            field: "Store",
            headerName: "Store Name",
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
            field: "address",
            headerName: "Address",
            flex: 1,
            editable: true
        },
        {
            field: "status",
            headerName: "Status",
            flex: 1,
            renderCell: renderSelectInput
        }
    ];
    return (
        <>
            <TopBar title='Add client' />
            <Container>
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
                        // "& .css-axafay-MuiDataGrid-virtualScroller": { overflowX: "hidden" },
                        "& .MuiDataGrid-row": {
                            borderBottom: 'solid 1px grey'
                        },
                    }}
                >
                    <DataGrid
                        rows={mockDataAccept}
                        columns={columns}
                    // onCellClick={handleCellClick}
                    />
                </Box>
            </Container>
        </>
    )
}

export default AddClients