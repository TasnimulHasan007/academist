import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./components/Home/Home"
import NotFound from "./components/NotFound/NotFound"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Services from "./components/Services/Services"
import "./App.css"
import { useEffect, useState } from "react"
import About from "./components/About/About"
import Blog from "./components/Blog/Blog"

function App() {
  // state
  const [courses, setCourses] = useState([])

  // use effects
  useEffect(() => {
    fetch("./coursesData/coursesData.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data))
  }, [])
  return (
    <div className="App">
      <Router>
        {/* header */}
        <Header></Header>
        {/* routes */}
        <Switch>
          {/* home */}
          <Route path="/home">
            <Home courses={courses}></Home>
          </Route>
          <Route exact path="/">
            <Home courses={courses}></Home>
          </Route>
          {/* services */}
          <Route path="/services">
            <Services courses={courses}></Services>
          </Route>
          {/* blog */}
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          {/* about */}
          <Route path="/about">
            <About></About>
          </Route>
          {/* 404 */}
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        {/* footer */}
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App
