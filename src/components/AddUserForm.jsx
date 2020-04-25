import React from "react";
import { useForm } from "react-hook-form";

export const AddUserForm = props => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (user, event) => {
    console.log(user);

    props.addUser(user);
    event.target.reset();
  };

  console.log(props);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        ref={register({
          required: { value: true, message: "Valor requerido" }
        })}
      />
      <div>{errors?.name?.message}</div>

      <label>Username</label>
      <input
        type="text"
        name="username"
        ref={register({
          required: { value: true, message: "Valor requerido" }
        })}
      />
      <div>{errors?.username?.message}</div>
      <button>Add new user</button>
    </form>
  );
};
