



export default function Pricing() {
  return (
    <div className="px-8 py-20">
      <h1 className="text-4xl font-bold mb-10 text-center">Pricing Plans</h1>

      <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
        Choose the plan that fits your needs. All subscriptions renew monthly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">

        {/* Starter */}
        <div className="border p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">Starter — $5/month</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✔ Unlimited AI chat</li>
            <li>✔ Access to Standard AI model</li>
            <li>✔ Normal response speed</li>
            <li>✔ Basic writing assistance</li>
          </ul>
        </div>

        {/* Pro */}
        <div className="border p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">Pro — $10/month</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✔ Faster responses</li>
            <li>✔ Access to Advanced AI models</li>
            <li>✔ AI document generator</li>
            <li>✔ Priority email support</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

















// export default function Pricing() {
// return (
// <div className="px-8 py-20">
// <h1 className="text-3xl font-bold mb-10 text-center">Pricing</h1>


// <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
// <div className="border p-8 rounded-xl shadow">
// <h2 className="text-2xl font-semibold mb-4">Starter — $5/month</h2>
// <ul className="space-y-2">
// <li>Unlimited AI chat</li>
// <li>Basic model access</li>
// <li>Standard response speed</li>
// </ul>
// </div>


// <div className="border p-8 rounded-xl shadow">
// <h2 className="text-2xl font-semibold mb-4">Pro — $10/month</h2>
// <ul className="space-y-2">
// <li>Faster responses</li>
// <li>Advanced AI features</li>
// <li>Priority support</li>
// </ul>
// </div>
// </div>
// </div>
// );
// }




