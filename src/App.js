import './App.css';
import { addTopping, clearTopping} from './pizzaSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const pizza = useSelector(state => {
    console.log('state.pizza : ', state.pizza)
    return state.pizza
  });


  const dispatch = useDispatch();

  return (
    <>
      <button onClick={()=> dispatch(addTopping('pepperoni-1'))}>Add Pepperoni 1</button>
      <button onClick={()=> dispatch(addTopping('pepperoni-2'))}>Add Pepperoni 2</button>
      <button onClick={()=> dispatch(addTopping('pepperoni-3'))}>Add Pepperoni 3</button>
      <button onClick={()=> dispatch(clearTopping())}>Clear</button>

      <h1>Pizza</h1>

      {pizza.toppings.map(topping => (
        <div key={topping}>{topping}</div>
      ))}

    </>
  )

}

export default App;
