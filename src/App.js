import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { FcCheckmark } from "react-icons/fc";

function App() {

  const [isCompleteScreen, setCompleteScreen] = useState(false)

  return (
    <div className="App">
      <h1>
        Assignment Tracker

        <div className='assignment-wrapper'>
          <div className='assignment-input'>
            <div className='assignment-input-item'>
              <label>Title</label>
              <input type="text" placeholder="What's the assignment name?" />
            </div>
            <div className='assignment-input-item'>
              <label>Description</label>
              <input type="text" placeholder="What's the assignment description?" />
            </div>
            <div className='assignment-input-item'>
              <button type='button' className='primary-button'>Add</button>
            </div>
          </div>

          <div className='button-area'>
            <button className={`secondary-button ${isCompleteScreen===false && 'active'}`} onClick={() => setCompleteScreen(false)}>In Progress</button>
            <button className={`secondary-button ${isCompleteScreen===true && 'active'}`} onClick={() => setCompleteScreen(true)}>Completed</button>
          </div>

          <div className='assignment-list'>
            <div className='assignment-list-item'>
              <div>
                <h3>Task 1</h3>
                <p>Description</p>
              </div>

              <div>
                <AiOutlineDelete className='icon'/>
                <FcCheckmark className='check-icon'/>
              </div>
            </div>
          </div>
        </div>
      </h1>
    </div>
  );
}

export default App;
