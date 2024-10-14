import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoguinForm';
import NatVar from './components/Natvar';
import ProductForm from './components/CrearProducForm'
import ProductsList from './components/ProductsList'


function App() {
  return (
    <div className="App">
      <NatVar />
      <RegisterForm />
      <LoginForm />
      <ProductForm />
      <ProductsList/>
    
    </div>
  );
}

export default App;