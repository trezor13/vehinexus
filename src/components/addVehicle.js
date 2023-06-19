import React from 'react';
import ReactDOM from 'react-dom/client';


/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function AddVehicle() {
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}     
        <div className="flex flex-1 min-h-[100vh]">
          <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <img
                  className="h-10 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
                />
                <h2 className="mt-4 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Create a Vehicle
                </h2>
              </div>
  
              <div className="mt-6">
                <div>
                  <form action="#" method="POST" className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-4 text-gray-900">
                        Chasis Number
                      </label>
                      <div className="mt-2">
                        <input
                          id="chasisNumber"
                          name="chasisnumber"
                          type="text"
                          autoComplete="chasisnumber"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-4 text-gray-900">
                        Manufacture Company 
                      </label>
                      <div className="mt-2">
                        <input
                          id="manufacturecompany"
                          name="manufacturecompany"
                          type="text"
                          autoComplete="manufacturecompany"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-4 text-gray-900">
                        Manufacture Year
                      </label>
                      <div className="mt-2">
                        <input
                          id="manufactureyear"
                          name="manufactureyear"
                          type="text"
                          autoComplete="manufactureyear"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>


                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-4 text-gray-900">
                       Price
                      </label>
                      <div className="mt-2">
                        <input
                          id="price"
                          name="price"
                          type="text"
                          autoComplete="price"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-4 text-gray-900">
                        Plate Number
                      </label>
                      <div className="mt-2">
                        <input
                          id="platenumber"
                          name="platenumber"
                          type="text"
                          autoComplete="platenumber"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-4 text-gray-900">
                       Model Name
                      </label>
                      <div className="mt-2">
                        <input
                          id="modelname"
                          name="modelname"
                          type="text"
                          autoComplete="modelname"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-4 text-gray-900">
                        Owner national Id 
                      </label>
                      <div className="mt-2">
                        <input
                          id="nationalid"
                          name="nationalid"
                          type="number"
                          autoComplete="nationalid"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>




  
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Create
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden w-0 flex-1 lg:block">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
              alt=""
            />
          </div>

          
        </div>
      </>
    )
  }
  