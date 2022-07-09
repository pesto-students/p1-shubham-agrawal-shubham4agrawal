import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import toggleLight from './actions';

function App() {

  const isLightOn = useSelector((state) => state.switchButton)
  const dispatch = useDispatch();

  function flipLight() {
    dispatch(toggleLight());
  }

  const lightedness = isLightOn ? "lit" : "dark";
  return (
       <div className={`room ${lightedness}`}>
          the room is  {lightedness}
          <br />
          <button onClick={flipLight}>flip</button>
       </div>
  );
}

export default App;
