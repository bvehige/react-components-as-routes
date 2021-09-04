import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route} from "react-router-dom";


const SignUp = () => {
  return(
    <div>
      <h1>Sign Up for the App!</h1>
    </div>
  )
}

const Messages = () => {
  return(
    <div>
      <h1>This is where the messages are.</h1>
    </div>

  )
}

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About}/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/messages" component={Messages} />

    </div>
  </Router>,
  document.getElementById('root')
);
