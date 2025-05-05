import Firstcall from "./pages/Firstcall";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        {/* <Route path='/call' element={<Firstcall/>}/> */}
        <Route path='/' element={<Homepage/>}/>
        <Route path='/call' element={<Firstcall/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
