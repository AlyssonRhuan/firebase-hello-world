import React, { useState, useEffect } from 'react';
import FirebaseService from '../service/FirebaseService'

const TABLE_NAME = 'users'

function User() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetchUsers();
  }, [])

  const fetchUsers = async () => {
    try{
      const usuarios = await FirebaseService.getDataListPaginate(TABLE_NAME, 1)
      setUsers(usuarios)
    }catch(e){
      console.log(e)
      setUsers([])
    }
  }

  return (
    <main className="App col-12 px-5">
      <section>
        <h1 className="display-4">User</h1>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Login</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users && users.map(
                (user) => <tr>
                  <td>{user.name}</td>
                  <td>{user.login}</td>
                  <td>Edit</td>
                </tr>
              )
            }  
          </tbody>
        </table>

      </section>
    </main>
  );
}

function addUser(name, login, pass){
  const idUser = FirebaseService.pushData(TABLE_NAME, {name, login, pass});
}

export default User;
