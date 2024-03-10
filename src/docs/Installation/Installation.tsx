import Header from "../../Home/components/Header";
import Map from "../../Home/components/Map";
import { Link } from "react-router-dom";
import { onThisPage, changePage } from "./Data";

function Installation() {
    return(
        <div>
            <Header />
            <div className="flex">
                <div className="hidden md:block"><Map /></div>
                <div className="p-3 md:p-10 border-l border-r max-w-4xl">
                    <h1 className="text-slate-900 font-extrabold text-4xl">Installation</h1>
                    <p>The simplest way to install websitename</p>
                    <div className="py-14">
                        <h2 className="text-slate-900 font-extrabold text-3xl">Guide</h2>
                        <div className="flex flex-col lg:flex-row mt-10 items-center gap-x-10">
                            <p className="mb-5">Install websitename via npm.</p>
                            <div className="flex justify-between px-8 py-4 rounded-md bg-slate-800 text-white font-semibold w-full">
                                <div>
                                    <p>npm install websitename</p>
                                    <p>cd websitename</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div className="py-14">
                        <h2 className="text-slate-900 font-extrabold text-3xl">Lorem</h2>
                        <div className="flex mt-10 items-center gap-x-10 max-w">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    {changePage.previous.title !== "" && (
                        <div className="flex flex-col gap-4">
                            <Link className="flex items-center border p-5 rounded-md justify-between hover:bg-blue-50 duration-300" to={changePage.previous.to}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="rotate-180 w-8 h-8 "><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path></svg>
                                <div>
                                    <p className="text-slate-500 text-right">previous</p>
                                    <h2 className="text-right">{changePage.previous.title}</h2>
                                </div>
                            </Link>
                            {changePage.next.title !== "" && (
                                <Link className="flex items-center border p-5 rounded-md justify-between hover:bg-blue-50 duration-300" to={changePage.next.to}>
                                    <div>
                                        <p className="text-slate-500">next</p>
                                        <h2>{changePage.next.title}</h2>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-8 h-8 "><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path></svg>
                                </Link>
                            )}
                        </div>
                    )}

                    {changePage.previous.title === "" && changePage.next.title !== "" && (
                        <Link className="flex items-center border p-5 rounded-md justify-between hover:bg-blue-50 duration-300" to={changePage.next.to}>
                            <div>
                                <p className="text-slate-500">next</p>
                                <h2>{changePage.next.title}</h2>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className=" relative -right-3 w-8 h-8 "><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path></svg>
                        </Link>
                    )}
                </div>

                <div className="py-5 px-10 flex-col gap-y-14 hidden md:block">
                    <ul>
                        <h3 className="pt-10 pb-3">On this page</h3>
                        {onThisPage.map(section => (
                            <li key={section.title}>
                                <Link className="px-5 block text-slate-500 border-l hover:text-blue-500 hover:border-blue-500" to={section.to}>{section.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <Link to="https://github.com" className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3C3C3C" aria-hidden="true" className="w-4 h-4 mr-2"><path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z"></path><path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z"></path></svg>                        
                        <h3 className="text-[#3C3C3C] hover:underline">Edit this page on GitHub</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Installation;