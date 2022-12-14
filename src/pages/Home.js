import React from 'react'
import Contact from '../components/Contact'
import Form from '../components/Form'

function home({formsub, contacts, deleteContact}) {
  console.log(contacts);
  return (
    <div className='container my-5'>
      <div className='row justify-content-sm-center my-5'>
      <Form formsub={formsub} />
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">

{contacts.map((singlecontact)=>{
  return <Contact key={singlecontact.id} contact={singlecontact} deleteContact={deleteContact}/>;
})}

      {/* <Contact/> */}
      </div>
    </div>
  )
}

export default home