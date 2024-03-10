import { Link } from "react-router-dom"

function Links() {
    return (
        <ul className='items-center gap-x-14 font-semibold flex'>
            <li>
                <Link to="react-tailwind-docs-template/docs/gettingstarted/installation">Docs</Link>
            </li>
            <li>
                <Link to="/react-tailwind-docs-templates">Lorem</Link>
            </li>
            <li>
                <Link to="/react-tailwind-docs-template">Impsum</Link>
            </li>
        </ul>
    )
}

export default Links;