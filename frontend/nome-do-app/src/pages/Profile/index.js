import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {v4 as uuidv4} from 'uuid';

import Profiles from './Profiles';

import "./styles.css";

const Profile = () => {

  // Exemplo de perfis fictícios cadastrados no sistema
  const [names, setNames] = useState([
    {
      id: "1",
      name: "Guilherme Aureliano",
      email: "user@example.com",
      password: "pass123#",
      gender: "1",
      data: "16/01/2001",
      cpf: "123456789011"
    },
    {
      id: uuidv4(),
      name: "Luana Silva",
      email: "lua@example.com",
      password: "pass123#",
      gender: "0",
      data: "20/03/2000",
      cpf: "09876543211"
    }
    
  ]);

  const history = useHistory();

  const handleBackButtonClick = () => {
      history.goBack();
  }

  return (
    <div className="container-table">
      <h1>Meu perfil</h1>
      <Profiles
      names={names}
      />
      <button className="button-table" onClick={handleBackButtonClick}>VOLTAR</button>
    </div>
  );
}
 
export default Profile;