import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
    { title:'All clients',to:'/',icon:<PeopleOutlinedIcon/>},
    {title:'Add client',to:'/',icon:<AddCircleOutlineIcon/>},
    {title:'Profile',to:'/',icon:<AccountCircleIcon/>}
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
   console.log(ismatchedPhone);
  return (<>
    <Box sx={{display: 'flex' }}>
       <Drawer variant="permanent"  open={open} >
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
// function SideBar() {
   
//     return (
//         <Box sx={{ height: '100vh', borderRight: 'solid 2px #003049' }}>
        
//         </Box>
//     )
// }

 