import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
//
import StorageIcon from '@mui/icons-material/Storage';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PaymentIcon from '@mui/icons-material/Payment';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EmailIcon from '@mui/icons-material/Email';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import { grey } from '@mui/material/colors';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  // backgroundColor:theme.palette.primary.A100,
  backgroundColor:grey[400],
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor:grey[400],
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
 

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  })
);

export default function SideBar({selected,setSelected}) {
  const [open, setOpen] = React.useState(true);
  const items=[
    {title:'Dashboard',to:'/',icon:<HomeOutlinedIcon/>},
    { title:'Stock',to:'/',icon:<StorageIcon/>},
    {title:'Purchases and sales',to:'/',icon:<MonetizationOnIcon/>},
    {title:'customers',to:'/',icon:<PeopleAltIcon/>},
    {title:'Suppliers',to:'/',icon:<PaymentIcon/>},
    {title:'Profits',to:'/',icon:<TrendingUpIcon/>},
    {title:'Debts',to:'/',icon:<TrendingDownIcon/>},
    {title:'daily movement',to:'/',icon:<StackedBarChartIcon/>},
    {title:'HR performance',to:'/',icon:<ConnectWithoutContactIcon/>},
    {title:'Delivery orders',to:'/',icon:<LocalShippingIcon/>},
    {title:'Messages',to:'/',icon:<EmailIcon/>},
    {title:'Daily reports',to:'/',icon:<BarChartIcon/>},
    {title:'Store Informations',to:'/',icon:<AccountCircleIcon/>},
    {title:'Help',to:'/',icon:<HelpIcon/>}
  ]
  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const theme = useTheme();
   const ismatchedPhone=useMediaQuery(theme.breakpoints.down("md"))
   useEffect(()=>{
        if (ismatchedPhone) {
           setOpen(false)
        }else{
          setOpen(true)
        }
   },[ismatchedPhone])
   
  return (<>
    <Box sx={{display: 'flex' }}>
       <Drawer variant="permanent"  open={open}  >
        <DrawerHeader sx={{display:'flex',justifyContent:open?'space-between':'flex-end',p:'0 10px'}}>
            <Typography variant='h6' color='primary' sx={{opacity:open ?1 :0,fontWeight:'bolder'}}>
                ADMIN
            </Typography>
          <IconButton onClick={handleDrawerOpen} color='primary.main'>
          <MenuOutlinedIcon/>
          </IconButton>

        </DrawerHeader>
        {/* <Divider /> */}
        <List >
          {items.map((item, index) => (
            <ListItem 
            key={index} 
            disablePadding 
            onClick={()=>setSelected(item.title)}
            sx={{ display: 'block',color:selected==item.title?'whitesmoke':'primary.main',bgcolor:selected==item.title && 'primary.main' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color:selected==item.title?'whitesmoke':'primary.main'
                  }}
                  >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} sx={{opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
          </>
  );
}


 