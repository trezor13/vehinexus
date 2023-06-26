import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link ,useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
// import authService from '../services/authService';

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
export default function AddUser() {

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        try {
            const token = localStorage.getItem("token");
          const response = await axios.post('http://localhost:5000/api/v1/owner/register', {
            
            firstname: event.target.elements.firstname.value,
            lastname: event.target.elements.lastname.value,
            nationalId: event.target.elements.nationalid.value,
            phoneNumber: event.target.elements.phone.value,
            email: event.target.elements.email.value,
            department: event.target.elements.department.value,
            position: event.target.elements.position.value,
            position: event.target.elements.position.value,
            laptopManufacturer: event.target.elements.laptopManufacturer.value,
            model: event.target.elements.model.value,
            serrialNumber: event.target.elements.serrialNumber.value,
          },
          {headers: {
            Authorization: `Bearer ${token}`,
          }});
      
          if (response.data.status === 'success') {
            // Registration successful
            // Redirect to the dashboard or any other page
            navigate('/dashboard');
          } else {
            // Registration failed
            setErrorMessage(response.data.message);
          }
        } catch (error) {
          // Handle any errors that occurred during the API request
          console.error(error);
          setErrorMessage('An error occurred during registration');
        }
      };
      


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
                <h2 className="text-2xl font-bold  tracking-tight text-gray-900">
                  Create a User
                </h2>
              </div>
  
              <div className="mt-6">
                <div>
                  <form onSubmit={handleSubmit} method="POST" className="space-y-2">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-4 text-gray-900">
                        First Name
                      </label>
                      <div className="mt-1">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-4 text-gray-900">
                        Last Name
                      </label>
                      <div className="mt-2">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-4 text-gray-900">
                        National Id 
                      </label>
                      <div className="mt-2">
                        <input
                          id="Position"
                          name="Position"
                          type="string"
                          autoComplete="Position"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>


                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-4 text-gray-900">
                       Phone Number
                      </label>
                      <div className="mt-2">
                        <input
                          id="phone"
                          name="phone"
                          type="text"
                          autoComplete="phone"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-4 text-gray-900">
                        Email
                      </label>
                      <div className="mt-2">
                        <input
                          id="Email"
                          name="Email"
                          type="email"
                          autoComplete="Email"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-4 text-gray-900">
                        department 
                      </label>
                      <div className="mt-2">
                        <input
                          id="department"
                          name="department"
                          type="string"
                          autoComplete="department"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-4 text-gray-900">
                        Position 
                      </label>
                      <div className="mt-2">
                        <input
                          id="position"
                          name="position"
                          type="string"
                          autoComplete="position"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-4 text-gray-900">
                        Laptop Manufacture 
                      </label>
                      <div className="mt-2">
                        <input
                          id="manufacturer"
                          name="manufacturer"
                          type="string"
                          autoComplete="manufacturer"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-4 text-gray-900">
                        Model
                      </label>
                      <div className="mt-2">
                        <input
                          id="model"
                          name="model"
                          type="string"
                          autoComplete="model"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-4 text-gray-900">
                        Serial Number
                      </label>
                      <div className="mt-2">
                        <input
                          id="serialNumber"
                          name="serialNumber"
                          type="string"
                          autoComplete="serialNumber"
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
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </>
    )
  }
  