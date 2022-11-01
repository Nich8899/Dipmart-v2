import Link from 'next/link'
import React from 'react'


function MyCart() {
  return (
    <div>
         <nav>
      <div className=" shadow-sm p-4 text-center font-bold text-xl ">
        <h1 className="text-center">My Cart</h1>
      </div>
      </nav>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqtWEXPmoRa7l9IWAB3p0Tsw7Xgm5T2HJoQ&usqp=CAU" 
        alt="logo"
        className=' mt-30 my-8 ml-16'
         />
         <div className='flex flex-col space-y-0'>
         <h1 className= 'font-bold text-blue-900 ml-20'>Your Shopping Cart is Empty</h1><br />
        <p className='  ml-12 text-sm '> Looks like you have not added anything to</p>
        <p className=' ml-36 text-sm'>your cart yet</p>
         </div>  
      </div>
      <Link href="/">
      <div>
          <button
            name="openmodal-btn"
            type="button"
            className=" w-9/12 py-[13px] bg-blue-900 text-center  rounded-xl ml-12 mt-16 "
          >
            <span className="font-bold text-[18px] text-white">Start Shopping</span>
          </button>
        </div>
        </Link>
    
    </div>
  )
}

export default MyCart