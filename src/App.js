import React, { useState } from 'react'
import Feed from './components/Feed'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import Navbar from './components/Navbar'
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import Add from './components/Add'

const App = () => {
  const [mode,setMode] = useState("light");
  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>

      <Box bgcolor={"background.default"} color={"text.primary"}>
    <Navbar />
    <Stack direction="row" gap={2} justifyContent="space-between">

      <Sidebar setMode={setMode} mode={mode}/>
      <Feed />
      <Rightbar />
    </Stack>
    <Add />
      </Box>
    </ThemeProvider>
  )
}

export default App