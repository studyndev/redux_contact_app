import './styles/App.scss';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from './store'
import Contacts from './Components/Contacts'
import Navbar from './Components/Layout/Navbar'
import AddContact from './Components/Contact/AddContact'
import EditContact from './Components/Contact/EditContact'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/AddContact" component={AddContact} />
                <Route exact path="/EditContact/:id" component={EditContact} />
              </Switch>
             
            </div>
          </div>
        </div>
      </Router>


    </Provider>
  );
}

export default App;
