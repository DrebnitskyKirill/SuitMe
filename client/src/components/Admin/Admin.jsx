import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProductFetch } from "../../redux/reduxThunk/adminThunk";
import './Admin.css'

export default function Admin() {
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onBlur' });
 
  const addProduct =  (data) => {
    dispatch(addProductFetch(data));
  };
  
  return (
    <>
      <h2>Кабинет Администратора</h2>
      
      <form className="container center" onSubmit={handleSubmit(addProduct)}>
      <div className="container">
      <div className="container">
        <input {...register('title', { required: 'Необходимо указать название'})} type="text" className="form-control" placeholder="Название" required /><br/>
        <div>{errors?.title && <p>{errors?.title?.message}</p>}</div>
        </div>
      </div>
        <div className="container">
      <div className="container">
      <input {...register('describe', { required: 'Необходимо указать описание'})} type="text" className="form-control" placeholder="Описание" required /><br/>
        <div>{errors?.describe && <p>{errors?.describe?.message}</p>}</div>
        </div>
      </div>
      <div className="container">
      <div className="container">
        <input {...register('price', { required: 'Необходимо указать цену'})} type="text" className="form-control" placeholder="Цена" /><br/>
        <div>{errors?.price && <p>{errors?.price?.message}</p>}</div>
        </div>
      </div>
      <div className="container">
      <div className="container">
        <input {...register('size', { required: 'Необходимо указать размер'})} type="text" className="form-control" placeholder="Размер" /><br/>
        <div>{errors?.size && <p>{errors?.size?.message}</p>}</div>
        </div>
      </div>
      <div className="container">
      <div className="container">
        <input {...register('color', { required: 'Необходимо указать цвет'})} type="text" className="form-control" placeholder="Цвет" /><br/>
        <div>{errors?.color && <p>{errors?.color?.message}</p>}</div>
        </div>
      </div>
      <div className="container">
      <div className="container">
        <input {...register('activities', { required: 'Необходимо указать мероприятие'})} type="text" className="form-control" placeholder="Мероприятие" />
        <div>{errors?.activities && <p>{errors?.activities?.message}</p>}</div>
        </div>
      </div>
      <div className="container">
      <div className="container">
        <input {...register('foto', { required: 'Необходимо добавить фото'})} type="text" className="form-control" placeholder="Фото" /><br/>
        <div>{errors?.foto && <p>{errors?.foto?.message}</p>}</div>
        </div>
      </div>
        <button type="submit" className="btn btn-success" disabled={!isValid}>Добавить</button>
      </form>
    </>
  );
}
