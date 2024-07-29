import React from 'react'
import Second from "../Picture/saqib.png"
export default function About() {
  return (
    <div>
       <section className="flex flex-col-reverse md:flex-row items-center justify-between p-8 bg-zinc-100 dark:bg-zinc-900">
                    <div className="md:w-1/2">
                        <img src={Second} alt="About Image" className=" w-10/12"/>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <h2 className="text-4xl font-bold text-zinc-800 dark:text-white">ABOUT US</h2>
                        <p className="mt-16 text-zinc-600 dark:text-zinc-300 w-3/4">
                            hp school, ahmedabad belongs to the navjyoti education society, gujarat, a religious and charitable registered body, under the registration act of xxi 1860 and the article 29 and 30 of the constitution of india. it is under the patronage of the catholic bishop of henry larze, who also is its president. hp school.  hp school, ahmedabad belongs to the navjyoti education society, gujarat, a religious and charitable registered body, under the registration act of xxi 1860 and the article 29 and 30 of the constitution of india. it is under the patronage of the catholic bishop of henry larze, who also is its president. hp school.
                        </p>
                        <button className="mt-14 bg-orange-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Read More</button>
                    </div>
                </section>
    </div>
  )
}
