import { BrowserRouter, Routes, Route } from "react-router-dom"
import Notes from "./pages/Notes"
import LoginRegister from "./pages/LoginRegister"
import PrivateRoutes from "./components/PrivateRoutes"
import { AuthProvider } from "./context/AuthContext"



function App() {

  const selectedTheme = localStorage.getItem("theme")

  if(selectedTheme){
    document.querySelector("body").setAttribute("data-theme", selectedTheme)
  }
 
 

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route element={<Notes />} path="/" />
          </Route>
          <Route element={<LoginRegister />} path="/login" />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
