import React from 'react';
import './TaskPostIt.css';

function TaskPostIt({ data }) {
    return (
        <article className='border rounded-xl flex py-3 px-5 gap-4 w-full hover:bg-gray-800 hover:cursor-pointer transition-all items-center'>
            <label className="checkbox">
                <input className="checkbox__input" type="checkbox" id="checkbox" />
                <svg className="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                    <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
                    <path className="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
                </svg>
            </label>
            <h2 className='font-sans font-bold text-3xl'>{data}</h2>
        </article>
    )
}

export default TaskPostIt