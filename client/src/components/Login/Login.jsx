import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { logUserFetch } from '../../redux/reduxThunk/userThunk';
import style from '../Registration/registration.module.css'

function Login({open}) {
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onBlur' }); // 'onBlur' - покажет ошибку в случае если изменил фокус инпута

  const loginUser = (data) => {
    dispatch(logUserFetch(data))
    
  };
  return (
    <form className="container center" onSubmit={handleSubmit(loginUser)}>
     <div className={style.registration}>
        <div>
          <input {...register("email", { required: 'Необходимо указать Email', pattern: { value: /^([^ ]+@[^ ]+\.[a-z]{2,6}|)$/, message: 'Необходимо указать @' } })} className="validate center" placeholder='Введите Email' />
          <div>{errors?.email && <p>{errors?.email?.message}</p>}</div>
        </div>
        <div>
            <input {...register("password", { required: 'Поле обязательно к заполнению', minLength: { value: 5, message: 'Пароль должен быть не менее 5 символов' } })} type="password" className="validate center" placeholder='Введите пароль' />
            <div>{errors?.password && <p>{errors?.password?.message}</p>}</div>
          </div>
          <button id='btn-reg' type='submit' className={style.button} disabled={!isValid}>Войти</button>
          
        </div>
        <div className={style.go}><h4>У вас еще нет аккаунта?</h4><h4 onClick={open} style={{'color':'blue'}}>Зарегистрируйтесь</h4></div>
    </form>
  );
}

export default Login;
