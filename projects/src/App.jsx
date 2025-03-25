import {BrowserRouter as Router, Routes, Route} from 'react-router'

import Home from './pages/home'
import ComponentsBtstrp from "./pages/componentsBtsrp";
import Card from "./pages/card";
import Calculator from "./pages/calculator";
import TodoList from "./pages/todoList";
import FormStudents from "./pages/formStudents";
import Nav from "./components/nav"

function App() {

  return (
    <>
    <Router>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App