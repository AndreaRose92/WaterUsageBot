import React, { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    potato: '',
    funstuff: '',
    somethingelse: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    const data = {...formData, [name]: value}
    setFormData(data)
  }

  console.log(formData)

  const handleSubmit = (e) => {
    e.preventDefault()    

    // fetch('--enter API endpoint here--', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': "application/json"
    //   },
    //   body: JSON.stringify(formData)
    // })

    console.log('I sent your data someplace!')
    e.target.reset()
    setFormData({
      potato: '',
      funstuff: '',
      somethingelse: ''
    })
  }

  return (
    <form className='w-96' onSubmit={handleSubmit}>
      <div className="relative z-0 mb-6 w-full group">
          <input type="text" name="potato" id="potato" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleChange}/>
          <label htmlFor="potato" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Potato</label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
          <input type="text" name="funstuff" id="funstuff" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleChange}/>
          <label htmlFor="funstuff" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Funstuff</label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
          <input type="text" name="somethingelse" id="somethingelse" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleChange}/>
          <label htmlFor="somethingelse" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Somethingelse</label>
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
  )
}

export default Form