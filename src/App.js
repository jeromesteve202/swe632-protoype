import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { FcCheckmark } from "react-icons/fc";

function App() {

  const [isCompleteScreen, setCompleteScreen] = useState(false);
  const [allAssignments, setAssignments] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddAssignment = () => {
    let newAssignmentItem = {
      title: newTitle,
      description: newDescription
    }

    let updatedAssignmentsArray = [...allAssignments];
    updatedAssignmentsArray.push(newAssignmentItem);

    setAssignments(updatedAssignmentsArray);
    
    localStorage.setItem('assignmentList', JSON.stringify(updatedAssignmentsArray))
  }

  useEffect(() => {
    let savedAssignments = JSON.parse(localStorage.getItem('assignmentList'));

    if (savedAssignments) {
      setAssignments(savedAssignments);
    }
  }, [])

  return (
    <div className="App">
      <h1>
        Assignment Tracker

        <div className='assignment-wrapper'>
          <div className='assignment-input'>
            <div className='assignment-input-item'>
              <label>Title</label>
              <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="What's the assignment name?" />
            </div>
            <div className='assignment-input-item'>
              <label>Description</label>
              <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="What's the assignment description?" />
            </div>
            <div className='assignment-input-item'>
              <button type='button' onClick={handleAddAssignment} className='primary-button'>Add</button>
            </div>
          </div>

          <div className='button-area'>
            <button className={`secondary-button ${isCompleteScreen===false && 'active'}`} onClick={() => setCompleteScreen(false)}>In Progress</button>
            <button className={`secondary-button ${isCompleteScreen===true && 'active'}`} onClick={() => setCompleteScreen(true)}>Completed</button>
          </div>

          <div className='assignment-list'>
            
            {allAssignments.map((item, index) => (
              <div className='assignment-list-item' key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                </div>
                <div>
                  <AiOutlineDelete
                    title="Delete?"
                    className="icon"
                  />
                  <FcCheckmark
                    title="Completed?"
                    className=" check-icon"
                  />
                </div>
              </div>
            ))}
            </div>
        </div>
      </h1>
    </div>
  );
}

export default App;
