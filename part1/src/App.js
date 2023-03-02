import './App.css';
import logo from './logo.svg'

const App = () => {
  const a = 23;
  return (
    <div className="App">
      <p>Hola Mundo { a }</p>
      <img src={logo} alt="Logo"></img> 
    </div>
  )

}

export default App;
