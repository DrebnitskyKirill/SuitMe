import './ModalOrder.css'

const ModalOrder = ({size}) => {
  // прописать css модалки
  return (
    <>
    {size.length > 0 ? <div className='closeModal'>
      Товар добавлен в корзину
    </div> : <div className='closeModal'>
    Выбирите размер
  </div>}
    
    </>
   
  );
};

export default ModalOrder;
