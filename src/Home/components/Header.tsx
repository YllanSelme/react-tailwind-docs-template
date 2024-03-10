import { Link } from "react-router-dom";
import HamburgerMenu from "./Hamburger";
import Links from "./Links";

function Header() {
    return (
        <div className='flex justify-between py-7 px-14'>
            <HamburgerMenu />
            <Link to="/react-tailwind-docs-template" className='text-2xl font-semibold'>websitename</Link>
            <div className="hidden md:block"><Links /></div>
        </div>
    );
  }
  
  export default Header;