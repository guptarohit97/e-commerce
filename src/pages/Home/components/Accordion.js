import { useState } from "react"


export const Accordion = ({faq}) => {
    const [show,setShow]=useState(false)
    const {question,answer}=faq
  return (
    <div>
        <h2 id="accordion-collapse-heading-1">
            <button onClick={()=>setShow(!show)} type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
            <span>{question}</span>
            {show===false?<i className="bi bi-chevron-down"></i>:<i className="bi bi-chevron-up"></i>}
            </button>
        </h2>
        
        {show && (<div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p className="mb-2 text-gray-500 dark:text-gray-400">{answer}</p>  
            </div>
        </div>)}
        
        
    </div>
  )
}
