import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  editPhotoFetch,
  editProductFetch,
} from "../../../redux/reduxThunk/adminThunk";
import style from "./AdminFormEdit.module.css";

export default function AdminFormEdit() {
  const { product, size, color, photo, activity } = useSelector(
    (store) => store.admin
  );
  const dispatch = useDispatch();
  const [state, setState] = useState([]);
  const sizeValue = (e) => {
    setState((prev) => [...prev, e.target.value]);
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });
  const sendFilesEdit = async (e) => {
    const picturesData = [...e.target.files];
    try {
      const data = new FormData();
      picturesData.forEach((img) => {
        data.append("homesImg", img);
      });
      dispatch(editPhotoFetch(data));
    } catch (error) {}
  };
  const editProduct = (data) => {
    dispatch(editProductFetch({ ...data, photo, id: product.id, size: state }));
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
              autoComplete="off"
              placeholder="Изменить название"
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
              autoComplete="off"
              placeholder="Изменить описание"
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
              autoComplete="off"
              placeholder="Изменить цену"
            />
            <br />
            <div>{errors?.price && <p>{errors?.price?.message}</p>}</div>
          </div>
        </div>
        <div className="container">
          <div className="container">
            <input
              {...register("amount", {
                required: "Изменить количество",
              })}
              type="number"
              className="form-control"
              autoComplete="off"
              placeholder="Изменить количество"
              required
            />
            <br />
            <div>{errors?.amount && <p>{errors?.amount?.message}</p>}</div>
          </div>
        </div>
        <div className="container">
          <div className="container">
            <input
              type="file"
              multiple
              onChange={sendFilesEdit}
              placeholder="Изменить фото"
              autoComplete="off"
            />
            <br />
            <div>{errors?.img && <p>{errors?.img?.message}</p>}</div>
          </div>
        </div>
        <div className="container">
          <div className="container">
            <label>Изменить размер товара:</label>
            <select onClick={sizeValue} {...register("size")}>
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
            <label>Изменить цвет товара:</label>
            <select {...register("color")}>
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
            <label>Изменить наименование мероприятия:</label>
            <select {...register("activity")}>
              {activity.map((el) => (
                <option key={el.id} value={el.id}>
                  {el.name}
                </option>
              ))}
            </select>
            <br />
            <div>{errors?.activity && <p>{errors?.activity?.message}</p>}</div>
          </div>
        </div>
        <button type="submit" className={style.buttonForm} disabled={!isValid}>
          Сохранить
        </button>
      </form>
    </>
  );
}
