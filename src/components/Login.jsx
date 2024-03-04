import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import supabase from '../supabase/Supabase'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [fail, setFail] = useState('')
    const [incorrect,setIncorrect] = useState('')


    const login = async (e) => {
        e.preventDefault()
        // console.log("data", username, password)
        if (username && password) {
            const { data, error } = await supabase
                .from('UserDetails')
                .select()
                .eq('Username', username)
                console.log(data);


                if(data.length == 0)
                {
                    console.log("no user");
                    setFail('no user')
                }
                else{

                    if (password == data[0]?.Password) {
                        console.log("login successfully")
                        navigate('/home')
                    }
                    else {
                        console.log("wrong password");
                        setIncorrect("wrong password")
                    }
                }

            
            // setUsername("")
            // setPassword("")

        }


    }


    return (
        <div>
            <div className='flex p-5 justify-between text-lg items-center text-white font-bold'>
      <img className='md:44 w-44' src="https://png.pngtree.com/png-clipart/20221122/ourmid/pngtree-happy-birthday-text-effect-png-image_241348.png" alt=""/>
      </div>
            <section class=" dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
                                Login in to your account
                            </h1>
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="Username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                    <input value={username} onChange={(a) => {
                                        setUsername(a.target.value)
                                    }}
                                        type="text" name="Username" id="Username" class="bg-gray-50 border border-gray-300 text-gray sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-red dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your username" required="" 
                                        style={{ borderColor: fail ? 'red' : 'initial' }}/>
                                       {fail&& <div style={{ color: 'red' }}>{fail}</div>}
                                      
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input value={password} onChange={(a) => {
                                        setPassword(a.target.value)
                                    }}
                                    
                                        type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" 
                                        style={{ borderColor: incorrect ? 'red' : 'initial' }}/>
                                   {incorrect && <div style={{ color: 'red' }}>{incorrect}</div>}
                                      
                                      
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>

                                </div>
                                <button onClick={(e) => login(e)} type="submit" class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border-2 border-black">Login</button>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500"><Link to="/signup">Sign up</Link></a>
                                </p>
                            </form>
                            
                           
                        </div>
                    </div>
                  
                </div>
            </section>
        </div>
    )
}


export default Login