import React from 'react';

const Profile = ({names}) => {
    return (
        <table className="content-table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Data de nascimento</th>
                    <th>CPF</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>{names.name}</th>
                    <th>{names.email}</th>
                    <th>{names.data}</th>
                    <th>{names.cpf}</th>
                </tr>
            </tbody>
        </table>
    );
}
 
export default Profile;