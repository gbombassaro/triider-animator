import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import Books from './pages/books';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/books" component={Books} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
