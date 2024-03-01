import React from "react";
import { useState } from 'react'
import { Link } from 'react-router-dom'
import supabase from '../supabase/Supabase'
import { useNavigate} from 'react-router-dom'


const Signup = () => {

    const navigate = useNavigate();

    
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signup = async (e) => {
        e.preventDefault()

        const { data, error } = await supabase
            .from('UserDetails')
            .upsert(
                {
                    Username: username,
                    Email: email,
                    Password: password
                }
            )
            .select()
            setUsername("")
            setEmail("")
            setPassword("")
            navigate('/login')
    
    }



    return (

        <div>
            <section class=" dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
                                SignUp to your account
                            </h1>
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="Username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                    <input value={username} onChange={(a) => {
                                        setUsername(a.target.value)
                                    }}
                                        type="text" name="Username" id="Username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your username" required="" />
                                </div>
                                <div class="mb-5">
                                    <label for="Email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input value={email} onChange={(a) => {
                                        setEmail(a.target.value)
                                    }} type="email" id="Email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input value={password} onChange={(a) => {
                                        setPassword(a.target.value)
                                    }}
                                        type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
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
                                <button onClick={(e) => signup(e)} type="submit" class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border-2 border-black">SignUp</button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}


export default Signup