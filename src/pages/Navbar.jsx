import { Link } from "react-router-dom";


export default function Navbar() {
return (
<nav className="w-full bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
<div className="text-xl font-semibold">AlttAI</div>
<div className="space-x-6">
<Link to="/" className="hover:text-gray-300">Home</Link>
<Link to="/pricing" className="hover:text-gray-300">Pricing</Link>
<Link to="/terms" className="hover:text-gray-300">Terms</Link>
<Link to="/privacy" className="hover:text-gray-300">Privacy</Link>
<Link to="/refund" className="hover:text-gray-300">Refund</Link>
</div>
</nav>
);
}