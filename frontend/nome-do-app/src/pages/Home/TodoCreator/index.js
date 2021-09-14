import React, { useState } from "react";
import "./styles.css";

import SignButtom from "../../../components/SignButton";
import { useEffect } from "react/cjs/react.development";
import * as yup from 'yup'
import { useFormik } from 'formik'
import { v4 as uuidv4 } from 'uuid';

const Header = () => {

  const [todo, setTodo] = useState([{}]);

  const { handleSubmit, getFieldProps, errors, touched} = useFormik({
    initialValues: {
        title: ''
    },
    validationSchema: yup.object({
        title: yup.string()
            .required('Você precisa preencher com um novo projeto.')
    }),
    onSubmit: (values, formikBag) => {
      handleUserAddition(values.title)
      formikBag.setFieldValue('title', '', false)
    }
  })

  const handleUserAddition = (title) => {
    setTodo(todo.concat({
      id: uuidv4(),
      title
    }))
  };

  useEffect(() => {
    console.log(todo)
  }, [todo])


  return (
      <form className="container" onSubmit={handleSubmit}>
            <input
                className="input-container"
                type='text'
                placeholder='Novo projeto'
                autoComplete='off'
                {...getFieldProps('title')}
            />
            {touched.title && errors.title ? (
                <small className="errors">{errors.title}</small>
            ) : null}
            <SignButtom type="submit" backgroundColor="white" color="#FF7A0A" text="Adicionar novo projeto" />
        </form>
  );
};

export default Header;