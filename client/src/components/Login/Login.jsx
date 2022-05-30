import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logUserFetch } from '../../redux/reduxThunk/userThunk';

function Login() {
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onBlur' }); // 'onBlur' - покажет ошибку в случае если изменил фокус инпута

  const loginUser = (data) => {
    dispatch(logUserFetch(data))
    
  };
  return (

    <form className="container center" onSubmit={handleSubmit(loginUser)}>
      <div className="container">
      </div>
      <div className="container">
        <div className="container">
          <input {...register("email", { required: 'Необходимо указать Email', pattern: { value: /^([^ ]+@[^ ]+\.[a-z]{2,6}|)$/, message: 'Необходимо указать @' } })} className="validate center" placeholder='Введите Email' />
          <div>{errors?.email && <p>{errors?.email?.message}</p>}</div>
        </div>
        <div className="container">
          <div className="input-field col s12">
            <input {...register("password", { required: 'Поле обязательно к заполнению', minLength: { value: 5, message: 'Пароль должен быть не менее 5 символов' } })} type="password" className="validate center" placeholder='Введите пароль' />
            <div>{errors?.password && <p>{errors?.password?.message}</p>}</div>
          </div>
          <p className='center'>Если Вы ещё не зарегистрированы, перейдите<Link to='/registration'> Registration</Link> </p>
          <button id='btn-reg' type='submit' className='waves-effect waves-light btn-large brown lighten-2' disabled={!isValid}>Войти</button>
        </div>
      </div>
    </form>
  );
}

export default Login;
