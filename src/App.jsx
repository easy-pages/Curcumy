import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Vsl from "./pages/Vsl"
import { Suspense } from "react"
import Presell from "./pages/Presell"


function App() {


  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Suspense fallback={<span className="text-xl text-orange-950">CARREGANDO...</span>}><Home /></Suspense>} />
          <Route path="/sp/:id_client" element={<Suspense fallback={<span className="text-xl text-orange-950">CARREGANDO...</span>}><Home /></Suspense>} />
          <Route path="/vsl" element={<Vsl />} />
          <Route path="/whatsapp" element={<Presell />} />
          <Route path="/politicas" element={<Vsl />} />
          <Route path="/termos" element={<Vsl />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
