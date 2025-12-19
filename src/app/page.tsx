import React from 'react'

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          LUX Partners
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl">
          Join the Ecosystem
        </p>
        <p className="text-lg text-gray-400 max-w-2xl">
          Partner with Lux to build the future of decentralized technology.
        </p>
      </section>

      {/* Feature Sections */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Integration</h2>
          <p className="text-lg text-gray-400">Access SDKs, APIs, and developer tools to integrate with Lux.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Marketing Support</h2>
          <p className="text-lg text-gray-400">Amplify your reach through co-marketing with the Lux ecosystem.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Community Access</h2>
          <p className="text-lg text-gray-400">Connect with our global community of developers and users.</p>
        </div>
      </section>

    </main>
  )
}
