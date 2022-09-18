import { Avatar, Box, Button, ButtonGroup, Fab, Modal, TextField, Tooltip, Typography} from '@mui/material'
import {Add as AddIcon} from "@mui/icons-material";
import React, { useState } from 'react'
import styled from '@emotion/styled';
import { Stack } from '@mui/system';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import ImageIcon from '@mui/icons-material/Image';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const StyledModal = styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
})

const UserBox = styled(Box)({
  display:"flex",
  alignItems:"center",
  gap:"15px",
  marginBottom:"20px"
})

const Add = () => {
  const [open,setOpen]= useState(false)
  return (
    <><Tooltip onClick={()=>{setOpen(true)}}
    title="Create posts" sx={{position:"fixed",bottom:20,
    left:{xs:"calc(50%)",md:30}}}>
     <Fab color='primary' aria-label='add' >
      <AddIcon />
     </Fab>
    </Tooltip>
    <StyledModal
  open={open}
  onClose={()=>{setOpen(false)}}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={290} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={6}>
  <Typography variant="h6" color="gray" textAlign="center">
    Create Post
  </Typography>
  <UserBox>
    <Avatar src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&w=1000&q=80" />
    <Typography variant="span" fontWeight={500}>
      Lily Petrick
    </Typography>
  </UserBox>
  <TextField
          sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind ?"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={3} mb={4}>
         <EmojiEmotionsOutlinedIcon sx={{color:"orange"}} />
         <ImageIcon sx={{color:"green"}}/>
         <VideoCameraBackIcon sx={{color:"red"}}/>
         <PersonAddAlt1OutlinedIcon sx={{color:"skyblue"}}/>
        </Stack>
        <ButtonGroup variant="contained" aria-label="outlined primary button group" mt={3} fullWidth>
  <Button>Post</Button>
  <Button sx={{width:"100px"}}><CalendarMonthIcon /></Button>
</ButtonGroup>
  </Box>
</StyledModal>
    </>
    
  )
}

export default Add