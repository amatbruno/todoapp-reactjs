
import './App.css'
import TaskPostIt from './components/TaskPostIt'
import { IoMdClose } from "react-icons/io";

function App() {

  const togglePopup = () => {
    const formEl = document.getElementById('popup-form');
    formEl.classList.toggle('show');
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
                id="name"
                name="name"
                required />
              <label
                className="form-label"
                htmlFor="email">
                Description
              </label>
              <textarea
                className="form-input resize-none"
                id="email"
                rows={2}
                required >
              </textarea>
              <label
                className="form-label"
                htmlFor="state">
                State
              </label>
              <select
                required
                className='form-input'
                name="state"
                id="state">
                <option value="toBegin">To begin</option>
                <option value="inProgress">In progress</option>
                <option value="done">Done</option>
              </select>
              <button
                className="btn-submit"
                type="submit">
                Submit
              </button>
            </form>
          </div>
        </article>
      </div>
      <main className='border mt-8 w-1/2 m-auto h-fit'>

      </main>

    </>
  )
}

export default App
