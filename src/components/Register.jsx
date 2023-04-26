import React from "react";

const Register = () => {
  return (
    <>
     <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" class="transition duration-300  ease-in-out delay-150"><path d="M 0,600 C 0,600 0,300 0,300 C 113.67857142857142,340.5357142857143 227.35714285714283,381.07142857142856 350,389 C 472.64285714285717,396.92857142857144 604.25,372.25000000000006 718,347 C 831.75,321.74999999999994 927.6428571428571,295.92857142857144 1045,288 C 1162.357142857143,280.07142857142856 1301.1785714285716,290.0357142857143 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="#051f48" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)"></path></svg>
 
    

      <div className=" absolute rounded  top-[0%] p-4 right-[25%] w-auto h-[480px]">

      <form className="shadow-xl bg-white rounded shadow-black p-4">
        
         
        <div class="relative">
            <input type="text" id="outlined_success" aria-describedby="outlined_success_help" className="block px-2.5 pb-2.5 pt-2 w-full text-sm text-gray-900 bg-white rounded-lg border-2 border-black  focus:outline-none  focus:border-black peer" placeholder=" " />
            <label for="outlined_success" className="absolute text-sm text-black dark:text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">UserName</label>
        </div>


        <div class="relative">
            <input type="password" id="outlined_success" aria-describedby="outlined_success_help" className="block px-2.5 pb-2.5 pt-2  w-full mt-4 text-sm text-gray-900 bg-white rounded-lg border-2 border-black  focus:outline-none  focus:border-black peer" placeholder=" " />
            <label for="outlined_success" className="absolute text-sm text-black dark:text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
        </div>
             
        <div class="relative">
            <input type="text" id="outlined_success" aria-describedby="outlined_success_help" className="block px-2.5 pb-2.5 pt-2 w-full mt-4 text-sm text-gray-900 bg-white rounded-lg border-2 border-black  focus:outline-none  focus:border-black peer" placeholder=" " />
            <label for="outlined_success" className="absolute text-sm text-black dark:text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
        </div>
    


         
  <div class="flex  w-full relative bg-white">

    <input type="radio" id="option0" name="tabs" class="appearance-none" />
    <label for="option0" class="cursor-pointer w-1/6 flex items-center justify-center truncate uppercase me-3 select-none font-semibold target:text-white text-sm rounded-full py-2">Cutomer</label>

    <input type="radio" id="option1" name="tabs" class="appearance-none" />
    <label for="option1" class="cursor-pointer w-1/6 flex items-center justify-center truncate uppercase select-none font-semibold text-sm  rounded-full py-2">Provider</label>

     
    <div class="w-1/6 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full p-0 h-full bg-[#051f48] absolute transform transition-transform tabAnim"></div>
  </div>


          

          <button className="bg-[#051f48] p-2 w-80 rounded mt-4 text-white">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default Register;


{/* 

 <h1 className="text-white font-bold text-3xl ms-36 mt-2 mb-2">
          Sign Up
        </h1>


        


          <div>
            <label
              htmlFor=""
              className="text-black ms-4 mt-2 text-xl font-semibold "
            >
              UserName
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
              className="text-black ms-4 mt-3 text-xl font-semibold "
            >
              Email
            </label>
            <div>
              <input
                type="password"
                className="focus:outline-none  shadow-xl p-1 w-80 shadow-black  border-black mt-2 rounded"
              />
            </div>
          </div>


          <div>
            <label
              htmlFor=""
              className="text-black ms-4 mt-3 text-xl font-semibold "
            >
              Password
            </label>
            <div>
              <input
                type="password"
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
            <div>
              <div class="wrapper shadow-lg shadow-black">
                <input type="radio" name="select" id="option-1" checked />
                <input type="radio" name="select" id="option-2" />
                <label for="option-1" className="option option-1">
                  <div className="dot me-1"></div>
                  <span>Customer</span>
                </label>
                <label for="option-2" className="option option-2">
                  <div className="dot me-1"></div>
                  <span>Provider</span>
                </label>
              </div>
            </div>
          </div>

          
          <div class="relative mb-3" data-te-input-wrapper-init>
  <input
    type="text"
    class="peer block min-h-[auto] w-full rounded border-0 bg- px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
    id="exampleFormControlInput2"
    placeholder="Form control lg" />
  <label
    for="exampleFormControlInput2"
    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
    >Form control lg
  </label>
</div>
  
*/}