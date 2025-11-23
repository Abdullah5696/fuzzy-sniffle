
export default function Pricing() {
return (
<div className="px-8 py-20">
<h1 className="text-3xl font-bold mb-10 text-center">Pricing</h1>


<div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
<div className="border p-8 rounded-xl shadow">
<h2 className="text-2xl font-semibold mb-4">Starter — $5/month</h2>
<ul className="space-y-2">
<li>Unlimited AI chat</li>
<li>Basic model access</li>
<li>Standard response speed</li>
</ul>
</div>


<div className="border p-8 rounded-xl shadow">
<h2 className="text-2xl font-semibold mb-4">Pro — $10/month</h2>
<ul className="space-y-2">
<li>Faster responses</li>
<li>Advanced AI features</li>
<li>Priority support</li>
</ul>
</div>
</div>
</div>
);
}










// import React from 'react'
// export default function Pricing(){
// return (
// <div className="py-8">
// <h2 className="text-2xl font-semibold mb-4">Pricing (placeholder)</h2>
// <p className="text-gray-600 mb-6">Pricing will be published at launch. This page is provided for Paddle verification.</p>


// <div className="grid gap-4 sm:grid-cols-2">
// <div className="border rounded p-4">
// <h3 className="font-semibold">Free</h3>
// <p className="text-sm text-gray-600">Basic access — free</p>
// </div>
// <div className="border rounded p-4">
// <h3 className="font-semibold">Pro</h3>
// <p className="text-sm text-gray-600">Early-bird pricing — details coming soon</p>
// </div>
// </div>
// </div>
// )
// }