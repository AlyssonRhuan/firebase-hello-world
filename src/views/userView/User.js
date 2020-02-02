import React, { useState, useEffect } from 'react';
import FirebaseService from '../../services/FirebaseService'
import IconsUtils from '../../utils/IconsUtils'
import ModalUser from './ModalUser'
import Loading from '../../components/Loading'
import ModalConfirmation from '../../utils/ModalConfirmationUtils'

const TABLE_NAME = 'users'

function User() {
  const [users, setUsers] = useState();
  const [modalAddUser, setModalAddUser] = useState(false);
  const [modalEditUser, setModalEditUser] = useState(false);
  const [modalDeleteUser, setModalDeleteUser] = useState(false);
  const [userToAction, setUserToAction] = useState()
  
  useEffect( async() => {
    getAllUsers();
  }, [])  
  

  // FUNÇÕES 
  async function getAllUsers() {
    const usuarios = await FirebaseService.getAll(TABLE_NAME)
    setUsers(usuarios)
}

  function addUser(dados){  
    const idUser = FirebaseService.push(TABLE_NAME, dados);
  }

  function editUser(dados){  
    const idUser = FirebaseService.update(TABLE_NAME, dados.key, dados);
  }

  function deleteUser(validacao){  
    if(validacao){
      const idUser = FirebaseService.delete(TABLE_NAME, userToAction.key);
    }

    closeModalDeleteUser();
  }

  // FUNÇÕES PARA ABRIR MODAL

  function openModalAddUser(){
    setModalAddUser(true);
  }

  function closeModalAddUser(){
    setModalAddUser(false);
    getAllUsers();
  }

  function openModalDeleteUser(user){
    setUserToAction(user)
    setModalDeleteUser(true);
  }

  function closeModalDeleteUser(){
    setModalDeleteUser(false);
    getAllUsers();
  }

  function openModalEditUser(user){
    setUserToAction(user)
    setModalEditUser(true);
  }

  function closeModalEditUser(){
    setModalEditUser(false);
    getAllUsers();
  }

  // RENDER

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
        <div style={{alignItems:'center'}} className="col-12 row justify-content-between mx-0 px-0">
          <span>
            <h1 className="display-4">Users</h1>
          </span>
          <span>
            <button type="button" className="btn btn-success ml-2" onClick={() => openModalAddUser()}>
              Add User
            </button>
          </span>
        </div>

        {/* TABELA */}
        {
          users
          ? <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">Login</th>
                  <th style={{width:'350px'}} scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  users && users.map(
                    (user) => <tr>
                      <td>{user.name}</td>
                      <td>{user.login}</td>
                      <td>
                        <a  onClick={() => openModalEditUser(user)}><img className="buttonIcon" src={IconsUtils.Edit} /> Edit</a>
                        <a  onClick={() => openModalDeleteUser(user)}><img className="buttonIcon" src={IconsUtils.Delete}/> Delete</a>
                      </td>
                    </tr>
                  )
                }  
              </tbody>
            </table>
          : <Loading />
        }
        

      </section>
      <section>        

      {/* MODAIS */}
      {
        modalAddUser && <ModalUser 
          title="Add user"
          data={undefined}
          onClose={closeModalAddUser}
          onSave={addUser}
          isOpen={modalAddUser}/>
      }

      {
        modalEditUser && <ModalUser 
          title="Edit user"
          data={userToAction}
          onClose={closeModalEditUser}
          onSave={editUser}
          isOpen={modalEditUser}/>
      }

      {
        modalDeleteUser && <ModalConfirmation 
          title="Delete user"
          text={`Deseja deletar o usuário ${userToAction.name}`}
          onClose={closeModalAddUser}
          onResponse={deleteUser}
          isOpen={modalDeleteUser}/>
      }

      </section>
    </main>
  );
}

export default User;