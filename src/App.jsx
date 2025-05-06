import {Route, Routes, BrowserRouter} from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainLayout from "./Layouts/MainLayout";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<MainLayout/>}>
          <Route path='/' element={<Homepage/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
