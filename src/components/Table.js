import React from 'react';
import IconsUtils from '../utils/IconsUtils'
import Loading from './Loading'

import DataTable from 'react-data-table-component';

// referencia https://www.npmjs.com/package/react-data-table-component#1626-header

function Table(props) {

    const actions = [
        {
          name: 'Actions',
          width: '200px',
          cell: row => <div className="actionsBar">
            <a onClick={() => props.onAction('EDI', row)} ><img className="buttonIcon" src={IconsUtils.Edit} /> Edit</a>
            <a onClick={() => props.onAction('DEL', row)} ><img className="buttonIcon" src={IconsUtils.Delete} /> Delete</a>
          </div>
        }
    ];

    return (
        <main className="App col-12 px-0">
            <section>                
                {
                    props.data
                    ? <DataTable
                        className="dataTable"
                        style={{height:'70vh', overflowY:'hidden'}}    
                        columns={[...props.columns, ...actions]}    //COLUNAS
                        data={props.data}                           //VALORES
                        pagination={true}                           //HABILITA PAGINAÇÃO
                        striped={true}                              //LINHAS INTERVALADAS DE COR
                        noHeader={true}                             //RETIRAR O CABEÇALHO
                        fixedHeader={true}
                        fixedHeaderScrollHeight='59vh'
                    />
                    : <Loading />
                }
            </section>
        </main>
    );
}

export default Table;