import { Link } from "react-router-dom"
import { sections } from "./sections"

function Map() {
    return (
        <ul className="py-5 pl-20 px-10">
            {sections.map(section => (
                <li key={section.title}>
                    <h3 className="pt-10 pb-3">{section.title}</h3>
                    <ul>
                        {section.children.map(child => (
                            <li key={child.title}>
                                <Link className="px-5 block text-slate-500 border-l hover:text-blue-500 hover:border-blue-500" to={child.to}>{child.title}</Link>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}

export default Map;