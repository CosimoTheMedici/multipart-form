import Billing from './Billing'
import { useState } from 'react'
import useFormContext from '../hooks/useFormContext'
import FormInputs from './FormInputs'

const Form = () => {

    const {
      page,
      setPage,
      data,
      title,
      canSubmit
    } = useFormContext()

    const handlePrev = ()=> setPage(prev =>prev - 1);
    const handleNext = ()=> setPage(prev =>prev + 1);
 

    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(JSON.stringify(data));
    }

   

   const content = (
     <form className='form flex-col' onSubmit={handleSubmit}>

      <header>
      <h2>{title[page]}</h2>
      <div className="button-container">

      <button  onClick={handlePrev} type='button' className="button" >Prev</button>

      <button onClick={handleNext} type='button' className="button" >Next</button>

      <button className="button" disabled={!canSubmit}>Submit</button>

      </div>
      </header>

      <FormInputs />
      
      

     </form>
   );
   return content;
}

export default Form