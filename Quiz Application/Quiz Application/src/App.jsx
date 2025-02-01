import { React } from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from "./Components/Home"
import Quiz from "./Components/Quiz"
import Result from "./Components/Result"
const App = ()=>{
  return (
    
     
 <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Result" element={<Result />}/>
      <Route path="/Quiz" element={<Quiz />}/>
    </Routes>
     
     
      
     
     
  )
}
export default App


 