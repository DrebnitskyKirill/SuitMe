import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addOrderFetch } from "../../redux/reduxThunk/orderThunk";
import ModalOfOrder from "../ModalOfOrder/ModalOfOrder";
import style from "./order.module.css";

function Order(props) {
  const { user } = useSelector((store) => store.user);
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [modalOrder, setmodalOrder] = useState("");
  const newNavigate = useNavigate();
  const throwOver = () => {
    newNavigate("/");
  };
  const [orderModal, setOrderModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" }); // 'onBlur' - покажет ошибку в случае если изменил фокус инпута

  const addOrder = async (data) => {
    dispatch(
      addOrderFetch({ ...data, user_id: user.id, status: "Ожидание", cart })
    );
    setmodalOrder(true);
    setTimeout(throwOver, 1500);
    setTimeout(setOrderModal(true), 500);
  };
  return (
    <>
      {modalOrder && <ModalOfOrder />}
      <form onSubmit={handleSubmit(addOrder)}>
        <div className={style.order}>
          <h3>Заполните форму заказа!</h3>
          <div>
            <input
              {...register("name", {
                required: "Поле обязательно к заполнению",
              })}
              placeholder="Введите Имя"
              type="text"
              autoComplete="off"
              className="validate center"
              required
            />
            <div>{errors?.name && <p>{errors?.name?.message}</p>}</div>
          </div>
          <div>
            <input
              {...register("address", {
                required: "Поле обязательно к заполнению",
              })}
              className="validate center"
              autoComplete="off"
              placeholder="Введите Адрес"
            />
            <div>{errors?.adress && <p>{errors?.adress?.message}</p>}</div>
          </div>
          <div>
            <input
              {...register("phone", {
                required: "Поле обязательно к заполнению",
                minLength: { value: 7 },
              })}
              type="number"
              placeholder="Введите номер телефона"
              autoComplete="off"
            />
            <div>{errors?.phone && <p>{errors?.phone?.message}</p>}</div>
          </div>
          <div className={style.date}>
            <h4>Укажите дату начала аренды товара: </h4>
            <input
              {...register("start_rent", { required: "Заполните дату" })}
              type="date"
              autoComplete="off"
            />
            <div>{errors?.rent && <p>{errors?.rent?.message}</p>}</div>
          </div>
          <div className={style.date}>
            <h4>Укажите дату завершения аренды товара: </h4>
            <input
              {...register("end_rent", { required: "Заполните дату" })}
              type="date"
              autoComplete="off"
            />
            <div>{errors?.rent && <p>{errors?.rent?.message}</p>}</div>
            {orderModal && (
              <div>Заказ успешно создан, ожидайте сообщение на почту</div>
            )}
          </div>
          <button className={style.button} type="submit" disabled={!isValid}>
            Заказать
          </button>
        </div>
      </form>
    </>
  );
}

export default Order;
