import './App.css';
import Navi from './layouts/navi/Navi';
import { Container } from 'semantic-ui-react';
import Dashboard from './layouts/dashboard/Dashboard';
import Footer from './layouts/footer/Footer';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div className="App">

      <Navi></Navi>
      <Container className="main">
        <Dashboard></Dashboard>
      </Container>
      <Footer></Footer>

    </div>
  );
}
export default App;
