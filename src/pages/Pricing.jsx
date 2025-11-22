import React from 'react'
export default function Pricing(){
return (
<div className="py-8">
<h2 className="text-2xl font-semibold mb-4">Pricing (placeholder)</h2>
<p className="text-gray-600 mb-6">Pricing will be published at launch. This page is provided for Paddle verification.</p>


<div className="grid gap-4 sm:grid-cols-2">
<div className="border rounded p-4">
<h3 className="font-semibold">Free</h3>
<p className="text-sm text-gray-600">Basic access — free</p>
</div>
<div className="border rounded p-4">
<h3 className="font-semibold">Pro</h3>
<p className="text-sm text-gray-600">Early-bird pricing — details coming soon</p>
</div>
</div>
</div>
)
}