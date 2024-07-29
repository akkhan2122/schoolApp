import React from 'react'

export default function Footer() {
  return (
    <div>
       <footer className="bg-zinc-800 text-white py-6">
                    <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-between">
                        <div>
                            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
                            <ul>
                                <li><a href="#" className="text-zinc-400 hover:text-white">Contact Us</a></li>
                                <li><a href="#" className="text-zinc-400 hover:text-white">About Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-3">Others</h3>
                            <ul>
                                <li><a href="#" className="text-zinc-400 hover:text-white">Legal</a></li>
                                <li><a href="#" className="text-zinc-400 hover:text-white">Privacy Policy</a></li>
                                <li><a href="#" className="text-zinc-400 hover:text-white">Terms and Conditions</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-3">Subscribe</h3>
                            <form action="#">
                                <input type="email" placeholder="Email Address" className="p-2 rounded bg-zinc-700 text-white mb-4" />
                                <button type="submit" className="bg-orange-500 px-4 py-2 rounded">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className="text-center text-zinc-400 mt-4">
                        <p>&copy; 2024 Company Name. All rights reserved.</p>
                    </div>
                </footer>
    </div>
  )
}
