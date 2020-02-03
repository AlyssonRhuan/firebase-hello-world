import React from 'react';
import IconsUtils from '../utils/IconsUtils'
import Loading from './Loading'

function Table(props) {
    return (
        <main className="App col-12 mx-0 px-0">
            <section>

                {
                    props.datas
                        ? <table className="table table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    {
                                        props.columns.map(
                                            (column) => <th scope="col">{column}</th>
                                        )
                                    }
                                    <th style={{ width: '350px' }} scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.datas && props.datas.map(
                                        (data) => <tr>
                                            {
                                                props.keys.map((key) => <td>{data[key]}</td>)
                                            }
                                            <td>
                                                <a onClick={() => props.onAction('EDI', data)} ><img className="buttonIcon" src={IconsUtils.Edit} /> Edit</a>
                                                <a onClick={() => props.onAction('DEL', data)} ><img className="buttonIcon" src={IconsUtils.Delete} /> Delete</a>
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