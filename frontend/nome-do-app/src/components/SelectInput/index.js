import React from 'react';

import './styles.css';

const SelectInput = () => {
    return (
        <div className="selectInput">
            <label for="gender" name="gender">Gênero</label>
            <select name="gender" id="gender">
                <option value selected disabled>Selecione um gênero</option>
                <option value="0">Feminino</option>
                <option value="1">Masculino</option>
                <option value="2">Outro</option>
                <option value="3">Não quero informar</option>
            </select>
        </div>
    );
}
 
export default SelectInput;