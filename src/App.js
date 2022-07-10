import {Route} from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Welcome from "./pages/Welcome"

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/product/:productId">
          <Product />
        </Route>
      </main>
    </div>
  )
}

export default App
