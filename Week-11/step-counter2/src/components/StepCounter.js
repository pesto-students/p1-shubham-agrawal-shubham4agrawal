import { useDispatch } from 'react-redux';
import '../styles/App.css';
import {addStep, resetSteps} from '../actions'
import DisplayCounter from './DisplayCounter';

function StepCounter() {

    const dispatch = useDispatch();

    return (
        <div className='App'>
            <DisplayCounter/>
            <div className='buttons'>
                <button className='add_button' onClick={() => dispatch(addStep())}>Add Step</button>
                <button className='reset_button' onClick={() => dispatch(resetSteps())}>Reset Steps</button>
            </div>
        </div>
    )
}

export default StepCounter