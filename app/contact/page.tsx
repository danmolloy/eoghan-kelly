'use client'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import axios from "axios";
import Image from 'next/image';

export default function Section() {
  const [sendStatus, setSendStatus] = useState<"success"|"sending"|"err"|null>(null)

  const sendFail = (<div><h2 className="">Message failed to send.</h2> <p>Please try again or <a href='mailto:danielmolloy_6@icloud.com' className='text-blue-500'>send an email</a>.</p></div>)

  const sendSuccess = (<div><h2 className="">Message recieved!</h2><p>I will get back to you as soon as possible.</p></div>)

  const sendingMsg = (<div><h2 className="">Message sending...</h2></div>)

  return (
    <section className="flex flex-col items-center justify-between p-2 py-8 text-sm bg-dark text-light rounded-lg w-full mx-8 md:w-3/4">
            <div className="  border-black">

      <h1 className='self-center ml-2 font-medium text-lg'>CONTACT</h1>
      </div>
    <Formik    
    initialValues={{
      name: '',
      email: '',
      message: '',
    }}
    validationSchema={Yup.object({
      name: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('name required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('email required'),
      message: Yup.string()
        .max(500, 'Must be 200 characters or less')
        .required('message required')
    })}
    onSubmit={async (values, actions ) => {
      setSendStatus("sending")
      await new Promise(resolve => setTimeout(resolve, 1000))
      axios.post("/api", values)
      .then((res) => {
        console.log('Response received')
        if (res.status === 201) {
          setSendStatus("success")
          actions.setSubmitting(false)
          actions.resetForm()
        } else {
          actions.setSubmitting(false)
          setSendStatus("err")
        }
        }).catch(e => {
          actions.setSubmitting(false)
          setSendStatus("err")
        })
      }}> 
      {(props) => (
      <Form data-testid="contact-form" className="  flex flex-col  self-center w-full ">

          <div className="flex flex-col m-2">
          <label htmlFor='name-input' className="form-label dark:text-zinc-400 text-sm">Name</label>
          <Field 
            id="name-input" 
            className=" text-dark border rounded-sm  bg-light  w-full p-1 dark:bg-zinc-300"
            type="text"
            name="name"/>
            <div className="h-6">
          <ErrorMessage name="name">
            { msg => <div className="text-sm text-red-500 h-6">{msg}</div> }
          </ErrorMessage>
          </div>
          </div>
          <div className="flex flex-col m-2">
          <label htmlFor='email' className="form-label  dark:text-zinc-400 text-sm">Email</label>
          <Field
            id="email" 
            className="text-dark border border-dark bg-light rounded-sm w-full p-1 dark:bg-zinc-300" 
            type="email"
            name="email"/>
            <div className="h-6">
          <ErrorMessage name="email" >
          { msg => <div className="text-sm text-red-500 h-6">{msg}</div> }
          </ErrorMessage>
          </div>
          </div>
          <div className="flex flex-col m-2 mb-0">
          <label htmlFor='msg-text' className="form-label rounded-sm  dark:text-zinc-400 text-sm">Message</label>
          <Field 
          multiline="6"
          maxLength="500"
          rows="4"
          component="textarea"
            id="msg-text" 
            className=" text-dark border border-dark bg-light rounded-sm w-full p-1 dark:bg-zinc-300"
            type="textarea"
            name="message"/>
            <div className="h-6">
            {props.values.message.length > 0 && <p className='self-center text-sm mx-2 opacity-40'>{`${props.values.message.length}/500`}</p>}

          <ErrorMessage name="message">
            { msg => <div className="text-sm text-red-500">{msg}</div> }
          </ErrorMessage>
          </div>
          </div>
        <button disabled={props.isSubmitting || (sendStatus === "sending")} id="submit-button" type='submit' className=" disabled:opacity-30 hover:underline shadow-sm   border border-light m-2 p-1 w-20 rounded-sm self-end cursor-pointer text-sm">SUBMIT</button>
        <div>
        {sendStatus === "sending" 
        ? sendingMsg
        : sendStatus === "err" 
        ? sendFail
        : sendStatus === "success" 
        ? sendSuccess
        : null}
      </div>
      </Form> )}
    </Formik>
                      <Image  alt="Eoghan Kelly" width={300} height={300} src={"https://fillmurray.lucidinternets.com/300/300"}/>
          
    </section>
  )
}