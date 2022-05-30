import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { editProductFetch } from "../../../redux/reduxThunk/adminThunk";

export default function AdminForm() {
  const { product, size, color } = useSelector((store) => store.admin);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });
  
  const editProduct = (data) => {
    dispatch(editProductFetch({...data, id: product.id}));
  };
  return (
    <>
      <form className="container center" onSubmit={handleSubmit(editProduct)}>
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
            <select>
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
            <select>
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
          Сохранить
        </button>
      </form>
    </>
  );
}
