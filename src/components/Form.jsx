import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import supabase from '../supabase/Supabase'
import { Link } from 'react-router-dom'

const Form = () => {
    const options = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


    const { register, handleSubmit, reset } = useForm()



    const myfunction = async (details) => {
        console.log(details);


        const { data, error } = await supabase
            .from('Birthday')
            .upsert(
                {
                    Employee_Name: details.employee_name,
                    Date: details.date,
                    Month: details.dropdown,
                    Year: details.year,
                    Gender: details.gender,
                    Employee_img: details.employee_img,
                    Status: details.status
                }
            )
            .select()
            reset()
            window.alert("Registered Successfully")
           
    }


    return (
        <div>

            <section class="dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">

                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
                        <div class=" p-6 space-y-4 md:space-y-6 sm: ">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-black text-center">
                                Add Birthday
                            </h1>
                            <form onSubmit={handleSubmit(myfunction)} class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="Employee_Name" class="flex block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employee Name</label>
                                    <input type="text"
                                        name="employee_name"
                                        id="employee_name"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="employee name"
                                        required=""
                                        {...register("employee_name")} />
                                </div>
                                <div>
                                    <label for="Date" class="flex block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                                    <input type="number"
                                        name="date"
                                        id="date"
                                        placeholder="date"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                        {...register("date")}
                                    />
                                </div>
                                <div>
                                    <label for="Month" class="flex block mb-2 text-sm font-medium text-gray-900 dark:text-white">Month</label>

                                    <select className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        id="dropdown"
                                        name="dropdown"
                                        {...register("dropdown")}>
                                        {options.map((option, index) => (
                                            <option key={index} {...option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label for="Year" class="flex block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
                                    <input type="text"
                                        name="year"
                                        id="year"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder=" year"
                                        required=""
                                        {...register("year")} />
                                </div>
                                <div>
                                    <label for="Gender" class="flex block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                                    <input type="text"
                                        name="gender"
                                        id="gender"
                                        placeholder="••••••••"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                        {...register("gender")} />
                                </div>
                                <div>
                                    <label for="Employee_img" class="flex block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employee Image</label>
                                    <input type="text"
                                        name="employee_img"
                                        id="employee_img"
                                        placeholder="••••••••"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                        {...register("employee_img")} />
                                </div>
                                <div>
                                    <label for="Status" class="flex block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                                    <input type="text"
                                        name="status"
                                        id="status"
                                        placeholder="••••••••"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                        {...register("status")} />
                                </div>

                                <button type="submit" class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border-2 border-black">Add</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Form