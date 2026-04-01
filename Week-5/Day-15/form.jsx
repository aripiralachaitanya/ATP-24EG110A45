import { useForm } from "react-hook-form";
import { useState } from "react";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [users, setUsers] = useState([]); // renamed for clarity

  const onFormSubmit = (data) => {
    console.log(data);
    setUsers((prev) => [...prev, data]); // ✅ append data
  };

  return (
    <div>
      {/* FORM */}
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="max-w-md mx-auto mt-10 border-2 p-4 bg-orange-400"
      >
        <h1 className="text-4xl text-center">Create User Form</h1>

        {/* Username */}
        <div className="p-4">
          <label>First Name</label>
          <input
            type="text"
            {...register("username", {
              required: true,
              minLength: 4,
              validate: (v) =>
                v.trim().length !== 0 || "White space is not valid",
            })}
            className="w-full border-2 p-2"
          />

          {errors.username?.type === "required" && (
            <p className="text-red-500">Username is required</p>
          )}
          {errors.username?.type === "minLength" && (
            <p className="text-red-500">
              Username must be at least 4 characters
            </p>
          )}
          {errors.username?.type === "validate" && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="p-4">
          <label>Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full border-2 p-2"
          />
          {errors.email && (
            <p className="text-red-500">Email is required</p>
          )}
        </div>

        {/* DOB */}
        <div className="p-4">
          <label>Date of Birth</label>
          <input
            type="date"
            {...register("dateOfBirth", { required: true })}
            className="w-full border-2 p-2"
          />
          {errors.dateOfBirth && (
            <p className="text-red-500">Date of Birth is required</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-pink-500 hover:bg-blue-700 text-white p-2 rounded block"
        >
          Submit
        </button>
      </form>

      {/* TABLE */}
      <h1 className="text-3xl text-center mt-6">Users List</h1>

      <div className="max-w-2xl mx-auto mt-5 border-pink-400">
        <table className="w-full border border-black text-center">
          <thead className="bg-gray-300">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">DOB</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border">
                <td className="border p-2">{user.username}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.dateOfBirth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Form;