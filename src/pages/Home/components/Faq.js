
import { Accordion } from "./Accordion";


export const Faq = () => {
   

    const faqs = [
        {
            id:"1",
            question: `What is React?`,
            answer: `React is a JavaScript 
                     library for building user interfaces.`
        },
        {
            id:"2",
            question: `What is Tailwind CSS?`,
            answer: `Tailwind CSS is a utility-first 
                     CSS framework for creating custom designs.` },
        {
            id:"3",
            question: `How do you install Tailwind CSS?`,
            answer: `You can install Tailwind CSS using npm 
                     and configure it in your project.`},
        {
            id:"4",
            question: `How do you toggle content visibility?`,
            answer: `You can use state management in 
                     React to toggle content visibility.` },
        {
            id:"5",
            question: `What is a state in React?`,
            answer: `State is an object that holds the 
                     values that determine the behavior of a component.` }
    ];

    
  return (
    
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm" id="accordion-collapse" data-accordion="collapse" >
        <h1 className="text-2xl font-semibold dark:text-slate-100 mb-3 mt-4 text-red-500 text-center ">Frequently Asked Questions
            <div className="w-full mx-auto p-4">
                {faqs.map((faq)=>(
                    <Accordion key={faq.id} faq={faq}/>
                ))}
            </div>
        </h1>
        
        
        
       
        
    </section>
  )
    

}
