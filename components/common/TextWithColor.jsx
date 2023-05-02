import {FiSquare, FiMinus} from 'react-icons/fi';
import {RiCloseFill} from 'react-icons/ri';
import Typewriter from 'typewriter-effect';

export default function TextWithColor() {
  return (
    <div className='col-span-2 lg:col-span-1 col-start-1 lg:col-start-2 my-5'>
            <div className="w-full h-full font-medium pb-5 rounded-xl ring-1 ring-purple-900 shadow-2xl shadow-purple-500 hover:scale-105 duration-200">
              <div className='flex items-center justify-between py-2 px-4 lg:text-lg border-b border-slate-600'>
                <h1>App.js</h1>
                <div className='flex items-center justify-center space-x-3'>
                  <FiMinus size={15}/>
                  <FiSquare size={15}/>
                  <RiCloseFill size={20}/>
                </div>
              </div>
              <div className='lg:text-xl p-6'>
                <div>
                  <pre className="text-white text-sm font-mono">
                    {/* text goes here */}
                    <span>
                      <span className="text-gray-500 mr-2">1</span>
                      <span className='text-blue-500'>function </span>
                      <span className='text-amber-200'>App</span>
                      <span className='text-yellow-500'>() &#123;</span>
                    </span><br />
                    <span>
                      <span className="text-gray-500 mr-2">2</span>
                      <span className='text-purple-400'>return &#40;</span>
                    </span><br />
                    <span>
                      <span className="text-gray-500 mr-2">2</span>
                      <span className='text-blue-500'>  &lt;div&gt;</span>
                    </span><br />
                    <span>
                      <span className="text-gray-500 mr-2">2</span>
                      <span className='text-blue-500'>    &lt;h1&gt;</span> 
                      <span> Hello. </span> 
                      <span className='text-blue-500'>&lt;/h1&gt;</span>
                    </span><br />
                    <span className='flex'>
                      <span className="text-gray-500 mr-2">3</span>
                      <span className='text-blue-500'>    &lt;p&gt;</span>
                      <span> I am </span>
                      <Typewriter 
                        options={{ strings: ['Abid Hasan', 'a Frontend Developer'], 
                        autoStart: true, 
                        loop: true, 
                        cursorClassName:'Typewriter__wrapper'
                      }}/>
                    </span>
                    <span>
                      <span className="text-gray-500 mr-2">2</span>
                      <span className='text-blue-500'>  &lt;/div&gt;</span>
                    </span><br />
                    <span>
                      <span className="text-gray-500 mr-2">4</span>
                      <span className='text-purple-400'> &#41;</span>
                      <span>;</span>
                    </span><br />
                    <span>
                      <span className="text-gray-500 mr-2">5</span>
                      <span className='text-yellow-500'>&#125;</span>
                    </span><br />
                    <span>
                      <span className="text-gray-500 mr-2">6</span>
                      <span className='text-purple-400'>export default </span>
                      <span className='text-amber-200'>App</span>
                      <span>;</span>
                    </span><br />
                    <span>
                      <span className="text-gray-500 mr-2">7</span>
                      <span></span>
                    </span><br />
                  </pre>
                </div>
              </div>
            </div>
          </div>
  )
}
