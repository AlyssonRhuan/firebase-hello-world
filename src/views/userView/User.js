import React, { useState, useEffect } from 'react';
import FirebaseService from '../../services/FirebaseService'
import IconsUtils from '../../utils/IconsUtils'
import Modal from '../../components/Modal'

const TABLE_NAME = 'users'

function User() {
  const [users, setUsers] = useState();
  const [modalAddUser, setModalAddUser] = useState(false);

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

  function openModalAddUser(){
    setModalAddUser(true)
  }

  return (
    <main className="App col-12 px-5">
      <section>

        {/* BREADCRUMB */}
        <nav aria-label="breadcrumb" className="pt-3">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">User</li>
          </ol>
        </nav>

        {/* BARRA MENU INTERNO */}
        <div style={{alignItems:'center'}} className="col-12 row justify-content-between">
          <span>
            <h1 className="display-4">Users</h1>
          </span>
          <span>
            <button type="button" className="btn btn-success ml-2" onClick={() => openModalAddUser()}>
              <img className="buttonIcon" src={IconsUtils.Add} />
              Add User
            </button>
          </span>
        </div>

        {/* TABELA */}
        <table className="table table-striped">
          <thead className="thead-dark">
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
                  <td>
                    <a><img className="buttonIcon" src={IconsUtils.Edit} /> Edit</a>
                    <a><img className="buttonIcon" src={IconsUtils.Delete} /> Delete</a>
                  </td>
                </tr>
              )
            }  
          </tbody>
        </table>

      </section>
      <section>        

      {
        modalAddUser && <Modal 
          title="Add users"
          isOpen={true}/>
      }

      </section>
    </main>
  );
}

function addUser(name, login, pass){
  const idUser = FirebaseService.pushData(TABLE_NAME, {name, login, pass});
}

export default User;
