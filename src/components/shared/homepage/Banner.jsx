import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';

const Banner = () => {
  return (
    <div>
         <div className="hero bg-base-100 container mx-auto h-100">
            <div className="hero-content text-center ">
                <div className="">

                    <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>

                      <p className="py-6 justify-center mx-auto max-w-xl">
                      Your personal shelf of meaningful connections. Browse, tend, and nurture the
                      relationships that matter most.
                      </p>

                        <button className="btn bg-[#244D3F] text-white font-bold"><AiOutlinePlus /> Add a Friend</button>
                </div>
            </div>
        </div>
        

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto container'>   

            <div className="card bg-base-100 shadow-xl border border-gray-100 py-10 ">
                <div className="card-body items-center text-center">
                  <h2 className="card-title">10</h2>
                  <p>Total Friends</p>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl border border-gray-100 py-10">
                <div className="card-body items-center text-center">
                  <h2 className="card-title">10</h2>
                  <p>On Track</p>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl border border-gray-100 py-10">
                <div className="card-body items-center text-center">
                  <h2 className="card-title">10</h2>
                  <p>Need Attention</p>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl border border-gray-100 py-10">
                <div className="card-body items-center text-center">
                  <h2 className="card-title">10</h2>
                  <p>Interactions This Month</p>
                </div>
            </div>

          </div>

    </div>

  
  
  )
}
export default Banner;