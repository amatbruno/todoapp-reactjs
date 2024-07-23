import { useState } from 'react';
import './App.css'
import TaskPostIt from './components/TaskPostIt'
import { IoMdClose } from "react-icons/io";

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const togglePopup = () => {
    const formEl = document.getElementById('popup-form');
    formEl.classList.toggle('show');
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, value]);
    setValue("");
    togglePopup();
  }

  return (
    <>
      <header className='mt-10 text-center'>
        <h1 className='text-6xl font-bold mb-10'>My Todo App</h1>
        <p className='text-xl font-normal'>Manage all your tasks efficiently for your daily routine!</p>
      </header>
      <div className='flex justify-center py-10'>
        <button
          onClick={togglePopup}
          className='border-4 text-xl py-1 px-5 rounded-lg font-medium hover:bg-white hover:text-black transition-all'>+ Add a new task
        </button>
        <article id='popup-form' className='overlay-form'>
          <div className="popup-box">
            <div className='flex justify-end'>
              <IoMdClose
                onClick={togglePopup}
                className='hover:cursor-pointer'
                size='20'
                color='black'
              />
            </div>
            <form className="form-container">
              <label
                className="form-label"
                htmlFor="name">
                Title
              </label>
              <input
                className="form-input"
                type="text"
                id="title"
                name="title"
                value={value}
                onChange={handleChange}
                required
              />
              <button
                className="btn-submit"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </article>
      </div>

      <main className='py-3 mt-10 w-1/2 m-auto h-fit'>
        <div>
          <ul>
            {
              todos.length !== 0
                ?
                todos.map((todo) => (
                  <li key={todo}><TaskPostIt data={todo} /></li>
                ))
                :
                <div className='flex-col'>
                  <p className='text-center font-bold text-lg mb-3'>Congrats! You don't have any ToDo right now!</p>
                  <h1 className='text-center text-9xl'>👍</h1>
                </div>
            }
          </ul>
        </div>
      </main>

    </>
  )
}

export default App
