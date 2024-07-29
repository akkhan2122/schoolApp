import React from 'react'
export default function Gallery(props) {
    return (
        <div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <img src={props.Nine} alt="Profile Picture" className="mx-auto mb-4 h-60" />
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <img src={props.Ten} alt="Profile Picture" className=" mx-auto mb-4 h-60" />

                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <img src={props.Eleven} alt="Profile Picture" className="mx-auto mb-4 h-60" />
                    </div>
                </div>
            </div>

        </div>

    )
}
