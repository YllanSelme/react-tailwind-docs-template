import Header from "./components/Header";
import { Link } from "react-router-dom";

function Home() {
    return (
      <div>
        <Header />
        <div className='relative flex flex-col gap-y-8 max-w-md md:max-w-4xl mx-auto pt-20 text-center'>
          <h1 className='text-slate-900 font-extrabold text-4xl md:text-6xl'>Quickly create your documentation site using React Tailwind</h1>
            <p className='text-lg'>Enjoy this <span className='text-blue-500'>template</span></p>
            <Link className='bg-slate-900 px-6 py-3 rounded-md text-white font-semibold mx-auto' to="/react-tailwind-docs-template/docs/gettingstarted/installation">Get started</Link>
          </div>
      </div>
    );
  }
  
  export default Home;