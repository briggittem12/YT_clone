import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Feed, Navbar, VideoDetail, ChanelDetail, SearchFeed } from "./components";


const App = () => (
    
    <BrowserRouter>
        <Box sx={{ backgroundColor: '#000'}}>
          <Navbar/>
          
          <Routes>

            <Route path="/" element={<Feed /> } />
            <Route path="/video/:id" element={<VideoDetail /> } />
            <Route path="/chanel/:id" element={<ChanelDetail /> } />
            <Route path="/search/:searchTerm" element={<SearchFeed /> } />
          
          </Routes>

        </Box>
    </BrowserRouter>
    
  )


export default App;
