import { Link } from "react-router-dom"


export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 justify-between items-center mx-auto max-w-screen-xl p-4">
        <div className="text my-5 w-1/2" >
            <h1 className="text-5xl font-bold">The Ultimate eBook Store</h1>
            <p className="text-2xl my-7 px-1 dark:text-slate-300">CodeBook is world's popular and authoritative source for computer science ebooks. Find ratings and access to the newest book digitally. Explore and Enjoy.</p>
            <Link to="/products" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Explore eBooks</Link>
        </div>
        <div className="visual my-5 lg:max-w-xl">
            <img className="rounded-lg max-h-full" src="https://b83eeb945e2915539af8.ucr.io/-/quality/best/https://d1qwl4ymp6qhug.cloudfront.net/Images%20for%20blog/Ebook.png" alt="eBook"></img>
        </div>
    </section>
  )
}
