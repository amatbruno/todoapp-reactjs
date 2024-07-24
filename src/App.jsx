import { useState } from 'react';
import './App.css'
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

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
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
          className='border-2 border-white text-xl py-1 px-5 rounded-lg font-medium hover:bg-white hover:text-black transition-all'>+ New task
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
              <input
                className="btn-submit"
                type="submit"
                onClick={value ? handleSubmit : null}
              />
            </form>
          </div>
        </article>
      </div>

      <main className='py-3 mt-7 w-1/2 m-auto h-fit'>
        {
          todos.length !== 0
            ?
            <div className='grid grid-cols-2 justify-items-center'>
              {
                todos.map((todo, index) => (
                  <div key={todo} className='flex justify-center'>
                    <article className='bg-[gold] hover:bg-[#e4c727] transition-all rounded-md w-full h-[275px] items-center'>
                      <div className='flex justify-end w-full'>
                        <button onClick={() => handleDelete(index)} className='m-3'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-gray-400 hover:stroke-green-800 transition-all">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 11l3 3l8 -8" />
                            <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
                          </svg>
                        </button>
                      </div>
                      <h2 className='w-[250px] pt-3 px-5 font-sans font-semibold text-2xl select-none text-black'>{todo}</h2>
                    </article>
                  </div>
                ))
              }
            </div>
            : <div className='flex flex-col justify-center items-center h-full'>
              <p className='text-center font-bold text-lg mb-3'>Congrats! You don't have any ToDo right now!</p>
              <h1 className='text-center text-9xl'>👍</h1>
            </div>
        }
      </main>
    </>
  )
}

export default App
