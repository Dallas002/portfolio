import React from 'react'
import HTML from '../Assets/html.png';
import CSS from '../Assets/css.png' ;
import JavaScript from '../Assets/javascript.png';
import GitHub from '../Assets/github.png';
import Mongo from '../Assets/mongo.png';
import Node from '../Assets/node.png';




const Skills = () => {
  return (
    <div name='skills'className=' w-full h-full bg-[#0a192f] text-gray-300' >
        {/*Container*/}
        <div>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4'>These are the technologies i have worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                    <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="Github icon" />
                    <p className='my-4'>GitHub</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt="Mongo icon" />
                    <p className='my-4'> Mongo</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                    <p className='my-4'>Node</p>
                    </div>
                    
                </div>
                </div>
                </div>
            
            
        


  )
}

export default Skills