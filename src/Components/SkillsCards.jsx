import React from 'react'
export default function SkillsCards(props) {
  return (
    <div>
           
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <img src={props.One} alt="Profile Picture" className="rounded-full mx-auto mb-4 h-60"/>
                    <div className="text-center">
                        <h3 className="text-lg font-semibold">Name: Hi, ELIS HERNAWATI, S.Pd.</h3>
                        <p className="text-sm text-zinc-600">IP: 196506051999203208</p>
                        <p className="text-sm text-zinc-600">Title: Teacher</p>
                    </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <img src={props.Two} alt="Profile Picture" className="rounded-full mx-auto mb-4 h-60"/>
                    <div className="text-center">
                        <h3 className="text-lg font-semibold">Name: Drs. Osad</h3>
                        <p className="text-sm text-zinc-600">IP: 196203121989301014</p>
                        <p className="text-sm text-zinc-600">Title: Teacher</p>
                    </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <img src={props.Three} alt="Profile Picture" className="rounded-full mx-auto mb-4 h-60"/>
                    <div className="text-center">
                        <h3 className="text-lg font-semibold">Name: Hi, ENJUNG NURHASANAH, S.Pd.</h3>
                        <p className="text-sm text-zinc-600">IP: 196202021983202006</p>
                        <p className="text-sm text-zinc-600">Title: Teacher</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
  )
}
