// export default function App() {
//   return (
//     <h1 className="text-3xl bg-blue-200 font-bold underline">
//       Hello world!
//     </h1>
//   )
// }
import {Routes, Route} from "react-router-dom"
// import Home from "./Home"
// import About from "./About"
// import Contact from "./Contact"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import NotificationBanner from "./Components/Header/Head"
import Footer from "./Components/Footer/Footer"

function App(){
  return (
    <div className="App">
      <NotificationBanner/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App