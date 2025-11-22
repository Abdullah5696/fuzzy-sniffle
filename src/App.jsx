import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Refund from './pages/Refund'


export default function App() {
return (
<div className="min-h-screen flex flex-col">
<header className="bg-white shadow">
<div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
<Link to="/" className="text-xl font-semibold">My AI Chat</Link>
<nav className="space-x-4">
<Link to="/pricing" className="text-sm">Pricing</Link>
<Link to="/terms" className="text-sm">Terms</Link>
<Link to="/privacy" className="text-sm">Privacy</Link>
<Link to="/refund" className="text-sm">Refund</Link>
</nav>
</div>
</header>


<main className="flex-1 max-w-4xl mx-auto p-6">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/pricing" element={<Pricing/>} />
<Route path="/terms" element={<Terms/>} />
<Route path="/privacy" element={<Privacy/>} />
<Route path="/refund" element={<Refund/>} />
</Routes>
</main>


<footer className="bg-white border-t">
<div className="max-w-4xl mx-auto p-4 text-sm text-gray-600">
© {new Date().getFullYear()} My AI Chat — Placeholder site
</div>
</footer>
</div>
)
}











