import React from 'react'

const Footer = () => {
  return (
    <div>
             <footer class="p-4 bg-black md:p-8 lg:p-10 ">
  <div class="mx-auto max-w-screen-xl text-center">
      <a href="#" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
         
        
          
          <img className='md:w-44 w-20' src="https://i.pinimg.com/736x/91/68/8c/91688cb3a4efdb4eb8ba231092d9ea61.jpg" alt="" />
      </a>
      <p class="my-6 text-white dark:text-gray-400">On this wonderful day, I wish you the best that life has to offer! Happy birthday</p>
      <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white text-white">
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 text-white ">About</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 text-white">Reminder</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 text-white">Employee</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 text-white">Blog</a>
          </li>

          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 text-white">FAQs</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 text-white">Contact</a>
          </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2021-2022 <a href="#" class="hover:underline">BIRTHDAY</a>. All Rights Reserved.</span>
  </div>
</footer> 
    </div>
  )
}

export default Footer