import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{display:{xs:"none", sm:"block"}}}>
      <Box width={300}>
        <Typography variant="h6" fontWeight={100} mt={1} mb={1}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
  <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2015/07/09/00/29/woman-837156_960_720.jpg" />
  <Avatar alt="Travis Howard" src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg" />
  <Avatar alt="Cindy Baker" src="https://cdn.pixabay.com/photo/2018/03/12/12/32/woman-3219507__340.jpg" />
  <Avatar alt="Agnes Walker" src="https://cdn.pixabay.com/photo/2018/05/22/14/00/girl-3421489__340.jpg" />
  <Avatar alt="Trevor Henderson" src="https://cdn.pixabay.com/photo/2018/01/25/14/12/nature-3106213__340.jpg" />
  <Avatar alt="Agnes Walker" src="https://cdn.pixabay.com/photo/2015/06/22/08/37/children-817365__340.jpg" />
  <Avatar alt="Trevor Henderson" src="https://cdn.pixabay.com/photo/2018/02/21/08/40/woman-3169726__340.jpg" />
  <Avatar alt="Agnes Walker" src="https://cdn.pixabay.com/photo/2014/07/31/22/50/photographer-407068__340.jpg" />
  <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/11500404/pexels-photo-11500404.jpeg?cs=srgb&dl=pexels-rosivan-morais-11500404.jpg&fm=jpg" />
</AvatarGroup>
<Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Posts
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={6}>
          <ImageListItem>
           <img src="https://images.unsplash.com/photo-1518281420975-50db6e5d0a97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60"
           alt="post1" />
          </ImageListItem>
          <ImageListItem>
          <img src="https://images.unsplash.com/photo-1505816014357-96b5ff457e9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60"
           alt="post1" />
          </ImageListItem>
          <ImageListItem>
          <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-3680219.jpg&fm=jpg"
           alt="post1" />
          </ImageListItem>
          <ImageListItem>
          <img src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&w=1000&q=80"
           alt="post1" />
          </ImageListItem>
          <ImageListItem>
          <img src="https://media.istockphoto.com/photos/heart-and-soul-picture-id1216425366?k=20&m=1216425366&s=612x612&w=0&h=2DTHso4Ryo4bobdaKDuLgqArtrgHpAPIq-8-mVGtyHs="
           alt="post1" />
          </ImageListItem>
          <ImageListItem>
          <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000"
           alt="post1" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Chats
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-3680219.jpg&fm=jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&w=1000&q=80" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob3RvfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
      </Box>
  )
}

export default Rightbar