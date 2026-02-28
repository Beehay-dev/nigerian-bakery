import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "./Pages/Landing/Landing"
import AboutPage from "./Pages/About/AboutPage"
import Blog from "./Pages/Blog/Blog"
import "./App.css"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing" element={<Landing/>}/>
        <Route path="/aboutpage" element={<AboutPage/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </Router>
  )
}

export default App
