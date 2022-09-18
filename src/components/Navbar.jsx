import styled from '@emotion/styled'
import { AppBar, Badge, InputBase, Toolbar, Typography, Box, Avatar, Menu, MenuItem } from '@mui/material'
import Mail from "@mui/icons-material/Mail"
import Diversity2Icon from '@mui/icons-material/Diversity2';
import React, { useState } from 'react'
import { Notifications } from '@mui/icons-material';


const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"

})

const Icons = styled(Box)(({ theme })=>({
  display:"flex",
  gap:"20px",
  alignItems:"center",
  // [theme.breakpoints.up("sm")]:{
  //   display:"flex"
  // }
}));
const UserBox = styled(Box)({
  display:"flex",
  gap:"10px",
  alignItems:"center"
});

const Search = styled("div")((theme)=>({
     backgroundColor:"white",
     padding:"0 10px",
     borderRadius: "14px",
     width:"25%",
   
}));
const Navbar = () => {
  const [open,setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
      <Typography variant='h5' sx={{display:{xs:"none",sm:"block"}}}>
        SocialApp
      </Typography>
      <Diversity2Icon sx={{display:{xs:"block",sm:"none"}}}/>
      <Search><InputBase placeholder='search...'/></Search>
      <Icons sx={{display:{xs:"none",sm:"flex"}}}>
        <Badge badgeContent={7} color="error">
          <Mail />
        </Badge>
        <Badge badgeContent={2} color="error">
          <Notifications />
        </Badge>
        <Avatar sx={{width:30,height:30}} src="https://images.pexels.com/photos/582039/pexels-photo-582039.jpeg?auto=compress&cs=tinysrgb&w=300" 
        onClick={()=>{setOpen(true)}}
        />
      </Icons>
      <UserBox sx={{display:{xs:"flex",sm:"none"}}}>
      <Avatar sx={{width:30,height:30}} src="https://images.pexels.com/photos/415263/pexels-photo-415263.jpeg?auto=compress&cs=tinysrgb&w=310" 
      onClick={()=>{setOpen(true)}}
      onClose={()=>{setOpen(false)}}
      />
      <Typography variant='span'>
        Mymoona
      </Typography>
      </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={()=>{setOpen(false)}}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </AppBar>
  )
}

export default Navbar