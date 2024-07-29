import React from 'react'

export default function Contacts() {
  return (
    <div>
       <section className="bg-white py-12">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl font-bold text-center mb-6">Leave Us A Message</h2>
                        <div className="flex flex-wrap justify-between items-start">
                            <div className="w-full md:w-1/2 bg-zinc-50 p-6 rounded-lg shadow-lg">
                                <form action="#" method="POST">
                                    <input type="text" placeholder="Name" className="block w-full mb-4 p-2 rounded" />
                                    <input type="email" placeholder="Email Address" className="block w-full mb-4 p-2 rounded" />
                                    <textarea placeholder="Your Message" className="block w-full mb-4 p-2 rounded" rows="4"></textarea>
                                    <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded">Send</button>
                                </form>
                            </div>
                            <div className="w-full md:w-1/2 mt-6 md:mt-0">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.1488597583134!2d66.98736280000004!3d24.961049500000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb36a9a050cef1f%3A0x6be5d88d25ecd0cc!2sRehmat%20Chowk%20Bus%20Stop!5e0!3m2!1sen!2s!4v1715771131042!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="100%" height="250" frameborder="0" style={{ border: '0' }} allowfullscreen="" hidden={false} tabIndex="0"></iframe>
                            </div>
                        </div>
                    </div>
                </section>
    </div>
  )
}
