import React from 'react'

const FormExample = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Name' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormExample