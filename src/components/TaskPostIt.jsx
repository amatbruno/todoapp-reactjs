import React from 'react'

function TaskPostIt({ data }) {
    return (
        <article className='border rounded-xl flex py-3 px-5 gap-4 hover:bg-gray-800 hover:cursor-pointer transition-all'>
            <input type="checkbox" name="check" id="check" />
            <h2>{data}</h2>
        </article>
    )
}

export default TaskPostIt