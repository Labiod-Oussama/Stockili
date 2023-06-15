import React from 'react'
import { Box, Container, Button, InputAdornment, Paper, TextField, Typography } from '@mui/material';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import AdfScannerIcon from '@mui/icons-material/AdfScanner';
import { mockDataProducts } from '../Data/DataProducts';
import { DataGrid } from "@mui/x-data-grid";
import { grey } from '@mui/material/colors';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate()
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "products",
      headerName: "Products",
      flex: 1,
      editable: true
    },
    {
      field: "Price",
      headerName: "Price (DA)",
      flex: 1,
      editable: true
    },
    {
      field: "Quantite",
      headerName: "Quantite",
      flex: 1,
      editable: true
    },
    {
      field: "Amount",
      headerName: "Amount (DA)",
      flex: 1,
      editable: true
    }
  ]
  return (
    <Container sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Button
        variant='contained'
        color='primary'
        endIcon={<ArrowRightAltIcon />}
        sx={{ mb: 1, marginLeft: 'auto', fontWeight: 'bold' }}
        onClick={() => navigate('/Supplier')}
      >
        Our supplier
      </Button>

      <Paper sx={{ width: '70%', pr: 1, pl: 1 }}>

        <Box display='flex' alignItems='center' p={1}>
          <Typography variant='h5' color='primary' flex={1} mr={2}>Customer's ID : 1</Typography>
          <TextField
            type='text'
            variant='outlined'
            label='Scan product code'
            color='primary'
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <QrCodeScannerIcon color='primary' />
                </InputAdornment>
              ),
            }}
            sx={{ flex: 1 }}
          />
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <AdfScannerIcon sx={{ bgcolor: 'primary.A100', color: 'primary.main', p: 1, borderRadius: '50%', cursor: 'pointer' }} />
          </Box>
        </Box>
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
          <DataGrid
            rows={mockDataProducts}
            columns={columns}
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
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 1, pb: 1 }}>
          <Typography variant='h6' color='primary' mb={1} textAlign='right'>

             {new Date().getFullYear()}/{new Date().getMonth()+1}/{new Date().getDate()}

          </Typography>
          <Box sx={{display: 'flex',alignItems:'center'}}>
            <Typography variant='h6' color='primary' mr={2} fontWeight='bold'>Total :</Typography>
            <Typography variant='body1' color='primary.light' fontWeight='bold'>150 DA</Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  )
}

export default Home