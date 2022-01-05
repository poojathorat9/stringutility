import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { BsEmojiSmile } from "react-icons/bs";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"black"}}>
        <Toolbar>     
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome to my String Utility  <BsEmojiSmile fontSize={15}  />
          </Typography>
         
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}