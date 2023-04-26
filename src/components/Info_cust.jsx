import React from 'react'

const Info_cust = () => {
  return (
    <>
       
       <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 590"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,600 C 0,600 0,300 0,300 C 114.9090909090909,338.0382775119617 229.8181818181818,376.07655502392345 331,383 C 432.1818181818182,389.92344497607655 519.6363636363637,365.73205741626793 616,320 C 
712.3636363636363,274.26794258373207 817.6363636363635,206.99521531100478 906,193 C 994.3636363636365,179.00478468899522 1065.8181818181818,218.28708133971293 1152,245 C 1238.1818181818182,271.7129186602871 
1339.090909090909,285.85645933014354 1440,300 C 1440,300 1440,600 1440,600 Z"
          stroke="none"
          stroke-Width="0"
          fill="#051f48"
          fill-Opacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 300)"
        ></path>
      </svg>
       
      <div className=" absolute rounded  top-[8%] p-4 right-[5%] w-1/2 h-[500px]">


<h1 className="text-white font-bold text-3xl ms-11 mt-2 mb-2">
  Customer Info
</h1>


<form className="">


  <div>
    <label
      htmlFor=""
      className="text-white ms-4 mt-2 text-xl font-semibold "
    >
       Name
    </label>
    <div>
      <input
        type="text"
        className="focus:outline-none  shadow-xl p-1 w-80 shadow-black focus:bg-white mt-2 rounded"
      />
    </div>
  </div>


  <div>
    <label
      htmlFor=""
      className="text-white ms-4 mt-3 text-xl font-semibold "
    >
      City
    </label>
    <div>
      <input
        type="text"
        className="focus:outline-none  shadow-xl p-1 w-80 shadow-black  border-black mt-2 rounded"
      />
    </div>
  </div>


  <div>
    <label
      htmlFor=""
      className="text-black ms-4 mt-3 text-xl font-semibold "
    >
      Mobile
    </label>
    <div>
      <input
        type="text"
        className="focus:outline-none  shadow-xl p-1 w-80 shadow-black  border-black mt-2 rounded"
      />
    </div>
  </div>


  <div className="w-80">
    <label
      htmlFor=""
      className="text-black ms-4 mt-3 text-xl w-20 font-semibold "
    >
      type
    </label>
    <input
        type="text"
        className="focus:outline-none  shadow-xl p-1 w-80 shadow-black  border-black mt-2 rounded"
      />
    <div>
      
    </div>
  </div>

  <button className="bg-[#051f48] p-2 w-80 rounded mt-4 text-white">Log In</button>
</form>
</div>
    </>
  )
}

export default Info_cust