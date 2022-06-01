import { addProductsAc, initOrderAC } from '../actionCreators/productsAc'

export const showProductsFetch = () => {
  return (dispatch) => {
    fetch('/allcollection')
      .then(res => res.json())
      .then(data => dispatch(addProductsAc(data)))
  }
}
export const showOrdersFetch = () => {
  return (dispatch) => {
    fetch('/allOrder')
      .then(res => res.json())
      .then(data => dispatch(initOrderAC(data)))
  }
}
