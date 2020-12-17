import logo from './logo.svg';
import './App.css';
import { MDBContainer } from "mdbreact";
import { Main } from './components'

function App() {
  return (
    <MDBContainer fluid>
      <Main />
    </MDBContainer>
  );
}

export default App;