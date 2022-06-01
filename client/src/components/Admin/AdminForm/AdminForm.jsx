import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addPhotoFetch,
  addProductFetch,
} from "../../../redux/reduxThunk/adminThunk";
import style from "./AdminForm.module.css";

export default function AdminForm() {
  const { size, color, photo, activity } = useSelector((store) => store.admin);
  const [state, setState] = useState([]);
  
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });
  
  const sizeValue = (e) => {
    setState((prev) => [...prev, e.target.value]);
  };
  const sendFiles = async (e) => {
    const picturesData = [...e.target.files];
    try {
      const data = new FormData();
      picturesData.forEach((img) => {
        data.append("homesImg", img);
      });
      dispatch(addPhotoFetch(data));
    } catch (error) {}
  };
  const addProduct = (data) => {
    dispatch(addProductFetch({ ...data, photo, size: state }));
  };

  return (
    <>
      <p className={style.name}>Форма для добавления товара</p>
      <form className={style.form} onSubmit={handleSubmit(addProduct)}>
        <div className={style.formBloc}>
          <div className={style.divInput}>
            <label>Выбирите категорию :</label>
            <select {...register("category_id")}>
              <option disabled default>
                Категория
              </option>
              <option value="1">Ботинки</option>
              <option value="2">Рубашки</option>
              <option value="3">Костюмы</option>
            </select>
          </div>
          <div className={style.divInput}>
            <label>Укажите наименования товара:</label>
            <input
              {...register("name", { required: "Необходимо указать название" })}
              type="text"
              className="form-control"
              placeholder="Название"
            />
            <br />
            <div>{errors?.name && <p>{errors?.name?.message}</p>}</div>
          </div>
          <div className={style.divInput}>
            <label>Укажите описание товара:</label>
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

          <div className={style.divInput}>
            <label>Укажите цену товара:</label>
            <input
              {...register("price", { required: "Необходимо указать цену" })}
              type="number"
              className="form-control"
              placeholder="Цена"
            />
            <br />
            <div>{errors?.price && <p>{errors?.price?.message}</p>}</div>
          </div>
          <br />
          <div className={style.divInput}>
            <label>Выбирите доступные размеры товара:</label>
            <select onClick={sizeValue} {...register("size")}>
            {size.map((el) => (
              <option key={el.id} value={el.id}>
                {el.name}
              </option>
            ))}
          </select>
          </div>
          <br />
        </div>
        <div className={style.formBloc}>
          <div className={style.divInput}>
            <label>Выбирите цвет товара:</label>
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
          <div className={style.divInput}>
            <label>Укажите наименование мероприятия:</label>
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
          <div className={style.divInput}>
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
          <div className={style.divInput}>
            <label>Добавте фото товара:</label>
            <input
              type="file"
              multiple
              onChange={sendFiles}
              placeholder="Фото"
            />
            <br />
            <div>{errors?.img && <p>{errors?.img?.message}</p>}</div>
          </div>
          <button
            type="submit"
            className={style.buttonForm}
            disabled={!isValid}
          >
            Добавить
          </button>
        </div>
      </form>
    </>
  );
}
