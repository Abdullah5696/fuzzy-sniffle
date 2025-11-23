
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
{/* */}

export default function App() {
return (
<>

<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/pricing" element={<Pricing />} />
<Route path="/terms" element={<Terms />} />
<Route path="/privacy" element={<Privacy />} />
<Route path="/refund" element={<Refund />} />
</Routes>

</>
);
}














// export default function Home() {
// return (
// <div className="px-8 py-20 text-center">
// <h1 className="text-4xl font-bold mb-6">Welcome to VoltAI</h1>
// <p className="text-lg max-w-2xl mx-auto mb-10">
// VoltAI is an AI-powered chat assistant designed to help you write, learn, code, plan, and discover information quickly.
// We offer free and premium plans for users who want faster responses, better models, and more tools.
// </p>
// <a href="/pricing" className="text-blue-600 underline text-xl">View Pricing →</a>
// </div>
// );
// }


















// import React from 'react'
// import { Routes, Route, Link } from 'react-router-dom'
// import Home from './pages/Home'
// import Pricing from './pages/Pricing'
// import Terms from './pages/Terms'
// import Privacy from './pages/Privacy'
// import Refund from './pages/Refund'


// export default function App() {
// return (
// <div className="min-h-screen flex flex-col">
// <header className="bg-white shadow">
// <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
// <Link to="/" className="text-xl font-semibold">My AI Chat</Link>
// <nav className="space-x-4">
// <Link to="/pricing" className="text-sm">Pricing</Link>
// <Link to="/terms" className="text-sm">Terms</Link>
// <Link to="/privacy" className="text-sm">Privacy</Link>
// <Link to="/refund" className="text-sm">Refund</Link>
// </nav>
// </div>
// </header>


// <main className="flex-1 max-w-4xl mx-auto p-6">
// <Routes>
// <Route path="/" element={<Home/>} />
// <Route path="/pricing" element={<Pricing/>} />
// <Route path="/terms" element={<Terms/>} />
// <Route path="/privacy" element={<Privacy/>} />
// <Route path="/refund" element={<Refund/>} />
// </Routes>
// </main>


// <footer className="bg-white border-t">
// <div className="max-w-4xl mx-auto p-4 text-sm text-gray-600">
// © {new Date().getFullYear()} My AI Chat — Placeholder site
// </div>
// </footer>
// </div>
// )
// }











