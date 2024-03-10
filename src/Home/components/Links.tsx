import { Link } from "react-router-dom"

function Links() {
    return (
        <ul className='items-center gap-x-14 font-semibold flex'>
            <li>
                <Link to="/docs/gettingstarted/installation">Docs</Link>
            </li>
            <li>
                <Link to="/blogs">Lorem</Link>
            </li>
            <li>
                <Link to="/contact">Impsum</Link>
            </li>
        </ul>
    )
}

export default Links;