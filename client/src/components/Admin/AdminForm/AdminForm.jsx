import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addProductFetch } from "../../../redux/reduxThunk/adminThunk";
import AdminProductCard from "../AdminProductCard/AdminProductCard";
import AdminSearch from "../AdminSearch/AdminSearch";
import "./AdminForm.css";

export default function AdminForm() {
  const { size, color } = useSelector((store) => store.admin);
  const [state, setState] = useState([]);
  console.log(state);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const addProduct = (data) => {
      
    dispatch(addProductFetch(data));
  };

  return (
    <>
      <form className="container center" onSubmit={handleSubmit(addProduct)}>
        <div className="container">
          <div className="container">
            <select {...register("category_id")}>
              <option disabled default>Категория</option>
              <option value="1">Ботинки</option>
              <option value="2">Рубашки</option>
              <option value="3">Костюмы</option>
            </select>
          </div>
        </div>
        <div className="container">
          <div className="container">
            <input
              {...register("name", { required: "Необходимо указать название" })}
              type="text"
              className="form-control"
              placeholder="Название"
            />
            <br />
            <div>{errors?.name && <p>{errors?.name?.message}</p>}</div>
          </div>
        </div>
        <div className="container">
          <div className="container">
            <input
              {...register("title", {
                required: "Необходимо указать описание",
              })}
              type="text"
              className="form-control"
              placeholder="Описание"
              required
            />
            <br />
            <div>{errors?.title && <p>{errors?.title?.message}</p>}</div>
          </div>
        </div>
        <div className="container">
          <div className="container">
            <input
              {...register("price", { required: "Необходимо указать цену" })}
              type="number"
              className="form-control"
              placeholder="Цена"
            />
            <br />
            <div>{errors?.price && <p>{errors?.price?.message}</p>}</div>
          </div>
        </div>
        <br />
        <div className="container">
          <div className="container">
            <select {...register('size')}>
              {size.map((el) => (
                <option key={el.id} value={el.id}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <br />
        <div className="container">
          <div className="container">
            <select {...register('color')}>
              {color.map((el) => (
                <option key={el.id} value={el.id}>
                  {el.name}
                </option>
              ))}
            </select>
            <br />
            <div>{errors?.color && <p>{errors?.color?.message}</p>}</div>
          </div>
        </div>
        <div className="container">
          <div className="container">
            <input
              {...register("activity", {
                required: "Необходимо указать мероприятие",
              })}
              type="text"
              className="form-control"
              placeholder="Мероприятие"
            />
            <br />
            <div>{errors?.activity && <p>{errors?.activity?.message}</p>}</div>
          </div>
        </div>
        <div className="container">
          <div className="container">
            <input
              {...register("amount", {
                required: "Необходимо указать количество",
              })}
              type="number"
              className="form-control"
              placeholder="Количество"
              required
            />
            <br />
            <div>{errors?.amount && <p>{errors?.amount?.message}</p>}</div>
          </div>
        </div>
        <div className="container">
          <div className="container">
            <input
              {...register("img", { required: "Необходимо добавить фото" })}
              type="text"
              className="form-control"
              placeholder="Фото"
            />
            <br />
            <div>{errors?.img && <p>{errors?.img?.message}</p>}</div>
          </div>
        </div>
        <button type="submit" className="btn btn-success" disabled={!isValid}>
          Добавить
        </button>
      </form>
      <div className="container">
        <div className="container">
          <br />
          <AdminSearch />
        </div>
      </div>
      <div className="container">
        <div className="container">
          <AdminProductCard />
        </div>
      </div>
    </>
  );
}
