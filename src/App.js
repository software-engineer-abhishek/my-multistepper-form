import { Button, TextField } from '@mui/material'
import { Form, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'

const validationSchema = yup.object ({
name: yup.string().required('Name is required')
})

function App() {
  return (
    <Formik initialValues = {{
      name:""
    }}
    onSubmit={values=>{
      alert(JSON.stringify(values, null, 2))
    }}
    validationSchema = {validationSchema}>
      {(formik) =>(
    <Form onSubmit={formik.handleSubmit}>
      <TextField 
      label='Name'
      id='name'
      name='name'
      value={formik.values.name}
      onChange = {formik.handleChange}
      error = {formik.touched.name && Boolean(formik.errors.name)}
      helperText = {formik.touched.name && formik.errors.name}
        />

        <Button type='submit' color='primary' variant='contained'> Submit </Button>
      
      </Form>
    )}
      </Formik>
  )
}

export default App