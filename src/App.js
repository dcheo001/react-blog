import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(false)
  const [author, setAuthor] = useState({author_name: '', author_id: ''})
  return (
    <Router>
      <TopBar user={user} setUser={setUser}/>
      <Switch>
        <Route path="/">{user ? <Home setAuthor={setAuthor} author={author}/> : <Login author={author} setAuthor={setAuthor} user={user} setUser={setUser}/>}</Route>
        <Route path="/register">{user ? <Home setAuthor={setAuthor} author={author}/> : <Login author={author} setAuthor={setAuthor} user={user} setUser={setUser}/>}</Route>
        <Route path="/login">{user ? <Home  setAuthor={setAuthor} author={author}/> : <Login author={author} setAuthor={setAuthor} user={user} setUser={setUser} />}</Route>
        <Route path="/write">{user ? <Write author={author}/> : <Login author={author} setAuthor={setAuthor} user={user} setUser={setUser}/>}</Route>
        <Route path="/settings">{user ? <Settings /> : <Login author={author} setAuthor={setAuthor} user={user} setUser={setUser}/>}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;