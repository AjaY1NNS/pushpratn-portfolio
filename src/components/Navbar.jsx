import { Link } from 'react-router-dom';
import logo from "../assets/pushpratn_logo.png"

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-blue-600">
                    PushpRatan Orgnaics
                </Link>
                {/* <div className="space-x-4">
                    <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                    <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                    <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
                    <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
                </div> */}
            </div>
        </nav>
    );
}