import React, { useState } from "react";
import { useSelector } from "react-redux";
import AdminFormEdit from "../AdminFormEdit/AdminFormEdit";

export default function AdminProductCard() {
  const { product } = useSelector((store) => store.admin);
  const [edit, setEdit] = useState(false);
  const editCard = () => {
    setEdit(!edit);
  };
  return (
    <>
      {!edit ? (
        <div className="container">
          {product?.name}
          <button onClick={editCard}>редактировать</button>
        </div>
      ) : (
        <AdminFormEdit close={() => setEdit(false)} />
      )}
    </>
  );
}
