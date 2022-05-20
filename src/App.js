import logo from './logo.svg';
import './App.css';





//criando um componente
function MyButton(){
  return (
    <button>
    Click me
  </button>
  )

}

function App() {
  return (
    <div>
      <h1>Benvindo a minha app</h1>
      <MyButton />
     </div>
  );
}

export default App;
