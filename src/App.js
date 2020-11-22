import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import CreateUser from './pages/createUser';
import Books from './pages/books';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/create" component={CreateUser} />
        <Route path="/books" component={Books} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
