import React from "react";
import Ugo from "../Assets/ugo.jpeg";
import Stress from "../Assets/stress.jpeg";
const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of our work,</p>
        </div>
        {/*container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/*grid items*/}
          <div
            style={{ backgroundImage: `url(${Ugo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx:auto content-div"
          >
            {/*Hover Effects*/}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Stress})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx:auto content-div"
          >
            {/*Hover Effects*/}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Demo
                </button>
                </a>
                <a href="/"></a>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">Code</button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Stress})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx:auto content-div"
          >
            {/*Hover Effects*/}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/"></a>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Demo</button>
                <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Code
                </button>
                </a>
                
              </div>
              
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Ugo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx:auto content-div"
          >
            {/*Hover Effects*/}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Demo
                </button>
                </a>
                <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>
                    Code
                </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Ugo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx:auto content-div"
          >
            {/*Hover Effects*/}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/"></a>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Demo</button>
                <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg' >Code
                </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Stress})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx:auto content-div"
          >
            {/*Hover Effects*/}

            <div className='opacity-0 group-hover:opacity-100'>
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                < button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700  font-bold text-lg' >
                Demo
                </button>
                </a>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg' >Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
