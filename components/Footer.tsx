'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white text-[#333] px-6 py-6 shadow-md">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Mission */}
        <div>
          <Image src="/images/logo2.png" alt="Riza Logo" width={120} height={40} />
          <p className="mt-4 text-sm text-gray-700">
            Healthy, home-cooked meals prepared right in your kitchen.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold text-primary mb-2">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            
            <li><Link href="/quiz">Take the Quiz</Link></li>
            
            
          </ul>
        </div>

        {/* Service Area */}
        <div>
          <h4 className="text-lg font-semibold text-primary mb-2">Service Area</h4>
          <p className="text-sm text-gray-700">
            Currently serving the Bay Area, California.<br />Based in Sunnyvale, CA.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-primary mb-2">Contact</h4>
          <p className="text-sm text-gray-700">Email: hmrhimself@gmail.com</p>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-200 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Riza. All rights reserved. | Privacy Policy | Terms
      </div>
    </footer>
  )
}