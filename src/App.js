import React, { useContext, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import { AuthContext, FirebaseContext } from './store/Context';
import Post  from './store/postContext';
import View from './Components/View/View';

function App() {

  const {user,setUser} = useContext(AuthContext)
 const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{  //used to check whether user is present and get username we passed  from signup 
      setUser(user)
      
    })
  })

  return (
    <div>
      <Post> {/*context can set where we want to use here we just set for all route*/}
      <Router>

      <Route exact path='/' >  {/*exact is used to show home when url shows the exact url ,, otherwise its in a order so signup and other come in the home page */}
      <Home />
      </Route>

      <Route path='/signup' >
      <Signup/>
      </Route>

      <Route path='/login'>
        <Login/>
      </Route>

      <Route path='/create'>
        <Create/>
      </Route>

      <Route path='/view'>
        <View/>
      </Route>

      </Router>

      </Post>
    </div>
  );
}

export default App;
