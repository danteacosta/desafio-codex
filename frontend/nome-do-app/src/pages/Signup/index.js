import React, { useEffect, useRef, useState } from 'react';

import "./styles.css";

// import SignInput from "../../components/SignInput";
import SignButtom from "../../components/SignButton";
// import SelectInput from '../../components/SelectInput';
import { v4 as uuidv4 } from 'uuid';
import { useFormik } from 'formik';
import * as yup from 'yup'

const SignUp = () => {

  const [cadastro, setCadastro] = useState([{}]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      gender: "",
      data: ""
    },
    validationSchema: yup.object({
      name: yup.string().required('O prenchimento do nome é obrigatório.'),
      email: yup.string().required('O preenchimento do email é obrigatório.').email("Preencha um email válido."),
      password: yup.string()
      .required("O preenchimento da senha é obrigatório.")
      .matches(/(?=[a-zA-Z])/, "A senha deve conter ao menos uma letra.")
      .matches(/(?=[0-9])/, "A senha deve possuir ao menos um número.")
      .matches(/(?=[$*&@#])/, "A senha deve conter ao menos um caractere especial.")
      .min(6, "A senha deve possuir ao menos 6 caracteres."),
      data: yup.date().required('O preenchimento da data é obrigatório.')
    }),
    onSubmit: (values, formikBag) => {
      handleUserAddition(values.name, values.email, values.password, document.getElementById('gender').value, values.data)
      formikBag.setFieldValue('name', '', false)
      formikBag.setFieldValue('email', '', false)
      formikBag.setFieldValue('password', '', false)
      formikBag.setFieldValue('data', '', false)
    }
  })

  const handleUserAddition = (name, email, password, gender, data) => {
    setCadastro(cadastro.concat({
      id: uuidv4(),
      name,
      email,
      password,
      gender,
      data
    }))
  };

  useEffect(() => {
    console.log(cadastro);
  }, [cadastro])

  return (
    <div id='cadastro'>
      <div id='cadastroBox'>
          <span>Cadastro</span>
        <form onSubmit={formik.handleSubmit}>
          <div className="input">
          <label>Nome</label>
          <input
                  type='text'
                  placeholder='Novo nome'
                  autoComplete='off'
                  {...formik.getFieldProps('name')}
              />
          {formik.touched.name && formik.errors.name ? (
              <small style={{color: "red"}}>{formik.errors.name}</small>
            ) : null}
          <br/>
          <label>Email</label>
          <input
                  type='email'
                  placeholder='Novo email'
                  autoComplete='off'
                  {...formik.getFieldProps('email')}
              />
          {formik.touched.email && formik.errors.email ? (
              <small style={{color: "red"}}>{formik.errors.email}</small>
            ) : null}
          <br/>
          <label>Senha</label>
          <input
                  type='password'
                  placeholder='Nova senha'
                  autoComplete='off'
                  {...formik.getFieldProps('password')}
              />
          {formik.touched.password && formik.errors.password ? (
              <small style={{color: "red"}}>{formik.errors.password}</small>
            ) : null}
          <br/>
          <label>Gênero</label>
            <select name="gender" id="gender">
                <option value selected disabled>Selecione um gênero</option>
                <option value="0">Feminino</option>
                <option value="1">Masculino</option>
                <option value="2">Outro</option>
                <option value="3">Não quero informar</option>
            </select>
          <br/>
          <label>Data de nascimento</label>
          <input
                  type='date'
                  placeholder='dd/mm/aaaa'
                  autoComplete='off'
                  {...formik.getFieldProps('data')}
              />
          {formik.touched.data && formik.errors.data ? (
              <small style={{color: "red"}}>{formik.errors.data}</small>
            ) : null}
          </div>
          <p> Já tem uma contra? <a href="/">ENTRE</a> </p>
          <SignButtom type="submit" text="CADASTRAR"></SignButtom>
        </form>
      </div>
    </div>
  );
}
 
export default SignUp;