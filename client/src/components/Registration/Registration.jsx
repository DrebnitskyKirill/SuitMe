import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addUserFetch } from '../../redux/reduxThunk/userThunk';
import style from './registration.module.css'

function Registration({open}) {

  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onBlur' }); // 'onBlur' - покажет ошибку в случае если изменил фокус инпута

  const addUser = async (data) => {
    dispatch(addUserFetch(data));
  };

  return (
    <form  onSubmit={handleSubmit(addUser)}>
      <p> Зарегистрируйтесь, чтобы начать</p>
     <div className={style.registration}>
        <div>
          <input {...register("name", { required: 'Необходимо указать ваше Имя' })} placeholder="Введите Имя" type="text" className="validate center" required />
          <div>{errors?.name && <p>{errors?.name?.message}</p>}</div>
        </div>
    
        <div>
          <input {...register("email", { required: 'Необходимо указать Email', pattern: {value:  /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$/, message: 'Необходимо указать @' } })} className="validate center" placeholder='Введите Email' />
          <div>{errors?.email && <p>{errors?.email?.message}</p>}</div>
        </div>
          <div>
            <input {...register("password", { required: 'Поле обязательно к заполнению', minLength: { value: 5, message: 'Пароль должен быть не менее 5 символов' } })} type="password" placeholder='Введите пароль' />
            <div>{errors?.password && <p>{errors?.password?.message}</p>}</div>
          </div>
          <button id='btn-reg' type='submit' className={style.button} disabled={!isValid}>Зарегистрироваться</button>
          <div className={style.go}><h5>У вас уже есть аккаунт?</h5><h5 onClick={open} style={{'color':'blue'}}>Авторизоваться</h5></div>
          </div>
         
    </form>
  );
}

export default Registration;
