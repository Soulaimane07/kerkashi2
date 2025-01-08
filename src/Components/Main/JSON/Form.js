import React, { useState } from 'react'
import { MdClear } from "react-icons/md";


function Form() {
    const [text, setText] = useState("")

  return (
    <>
        <form>
        <div class="flex-1  border border-gray-200 rounded-lg bg-gray-50  ">
            <div class="px-4 py-2 bg-white rounded-t-lg">
                <label for="comment" class="sr-only">Your comment</label>
                <textarea value={text} onChange={(e)=> setText(e.target.value)} id="comment" rows="6" class="w-full outline-none px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0  " placeholder="Write your code..." required ></textarea>
            </div>
            <div class="flex items-center justify-between px-3 py-2 border-t ">
                <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-orange-500 rounded-lg focus:ring-4 focus:ring-orange-200 hover:bg-orange-600">
                    Download file
                </button>
                <div class="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                    <button onClick={()=> setText("")} type="button" class="inline-flex space-x-1 justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                        <MdClear /> <p className='text-sm'>Clear</p>
                        <span class="sr-only">Clear</span>
                    </button>
                </div>
            </div>
        </div>
        </form>
    </>
  )
}

export default Form