import { addProductsAc } from '../actionCreators/productsAc'

export const showProductsFetch = () => {
  return (dispatch) => {
    fetch('/allcollection')
      .then(res => res.json())
      .then(data => dispatch(addProductsAc(data)))
  }
}
