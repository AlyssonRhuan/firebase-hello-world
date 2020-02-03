import React, { useState, useEffect } from 'react';
import IconsUtils from '../../utils/IconsUtils'
import Loading from '../../components/Loading'

const TABLE_NAME = 'users'

function Table() {
  return (
    <main className="App col-12 px-5">
      <section>

        {/* TABELA */}
        {
          users
            ? <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">Login</th>
                  <th style={{ width: '350px' }} scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  users && users.map(
                    (user) => <tr>
                      <td>{user.name}</td>
                      <td>{user.login}</td>
                      <td>
                        <a onClick={() => openModal('EDI', user)}><img className="buttonIcon" src={IconsUtils.Edit} /> Edit</a>
                        <a onClick={() => openModal('DEL', user)}><img className="buttonIcon" src={IconsUtils.Delete} /> Delete</a>
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
            : <Loading />
        }

      </section>
    </main>
  );
}

export default Table;