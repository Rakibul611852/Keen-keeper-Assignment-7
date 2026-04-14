import React from 'react'

import FooterLogo from "../../../assets/logo-xl.png"
import instagram from "../../../assets/instagram.png"
import facebook from "../../../assets/facebook.png"
import twitter from "../../../assets/twitter.png"
 const Footer = () => {
  return (
    <div className=' bg-[#244D3F] py-20 mt-12'>
        <div  className="hero-content text-center justify-center container mx-auto text-white ">
            <div className='space-y-5'>
         <img src={FooterLogo} alt="" className='text-center mx-auto' />
              <p>
                Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
              </p>
               <div className='space-y-5 mb-10'>
                   <h3 className='text-2xl font-bold '>Social Links</h3>
                    <div className='flex justify-center items-center gap-5'>
                      <img src={instagram} alt="instagram" className=' hover:scale-110 transition h-10 w-10' />
                      <img src={facebook} alt="facebook" className='hover:scale-110 transition h-10 w-10' />
                      <img src={twitter} alt="twitter" className='hover:scale-110 transition h-10 w-10' />
                    </div>
                </div>
            </div>

        </div>

        <div className='border-t border-green-100 container mx-auto text-white py-10'>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            <div>
              <p className="text-sm text-center md:text-left">
                Copyright -© {new Date().getFullYear()} KeenKeeper. All rights reserved.
              </p>
            </div>

            <div>
              <ul className='flex gap-6 text-sm'>
                <li className="cursor-pointer hover:underline">Privacy Policy</li>
                <li className="cursor-pointer hover:underline">Terms of Service</li>
                <li className="cursor-pointer hover:underline">Cookies</li>
              </ul>
            </div>

          </div>
        </div>
    </div>
  )
}
export default Footer;