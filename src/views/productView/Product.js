import React, { useState, useEffect } from 'react';
import FirebaseService from '../../services/FirebaseService'
import IconsUtils from '../../utils/IconsUtils'
import Loading from '../../components/Loading'
import ModalProduct from './ModalProduct'

const TABLE_NAME = 'products'

function Product() {
  const [products, setProducts] = useState();
  const [modalAddProduct, setModalAddProduct] = useState(false);
  
  useEffect( async() => {
    getAllProducts();
  }, [])  
 

  // FUNÇÕES 
  async function getAllProducts() {
    const produtos = await FirebaseService.getAll(TABLE_NAME)
    setProducts(produtos)
}

function addProduct(dados){
    const idProduct = FirebaseService.push(TABLE_NAME, dados);
  }

    // FUNÇOES PARA ABRIR MODAL
function openModalAddProduct(){
    setModalAddProduct(true);
  }

  function closeModalAddProduct(){
    setModalAddProduct(false);
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
            <h1 className="display-4">Products</h1>
          </span>
          <span>
            <button type="button" className="btn btn-success ml-2" onClick={() => openModalAddProduct()}>
              Add Product
            </button>
          </span>
        </div>

        {/* TABELA */}
        {
          products
          ? <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Nome</th>
                  <th style={{width:'350px'}} scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  products && products.map(
                    (product) => <tr>
                      <td>{product.name}</td>
                      <td>
                        <a><img alt="ícone de editar" className="buttonIcon" src={IconsUtils.Edit} /> Edit</a>
                        <a><img alt="ícone de deletar" className="buttonIcon" src={IconsUtils.Delete}/> Delete</a>
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
        {
            modalAddProduct && <ModalProduct 
            title="Add product"
            data={undefined}
            onClose={closeModalAddUser}
            onSave={addProduct}
            isOpen={modalAddProduct}/>
        }

        </section>
    </main>
  );
}

export default Product;