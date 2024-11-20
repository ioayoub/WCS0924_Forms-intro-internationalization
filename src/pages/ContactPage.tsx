import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactPage() {
  const [firstName, setFirstName] = useState("Toto");
  const [lastName, setLastName] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => console.log(data);

  console.log(errors);

  return (
    <>
      <h1 className="text-5xl text-center my-12">Contact</h1>
      {/* onSubmit={handleFormSubmit} */}
      <form
        className="flex flex-col w-fit gap-12"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div>
          <label htmlFor="firstName" className="mx-4">
            Prénom
          </label>
          <input
            {...register("firstName", {
              required: "Le champ est requis",
              minLength: {
                value: 2,
                message: "Le champ doit contenir 2 lettres",
              },
              maxLength: {
                value: 14,
                message: "Le champ ne doit pas dépasser 14 caractères",
              },
            })}
            type="text"
            id="firstName"
            className="border"
            onChange={(e) => setFirstName(e.target.value)}
            value={"firstName"}
            required
          />
          {errors?.firstName && (
            <span className="text-red-500">{errors.firstName?.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="mx-4">
            Nom
          </label>
          <input
            {...register("lastName", { required: true })}
            type="text"
            id="lastName"
            className="border"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            required
          />
        </div>

        <button type="submit" className="p-4 bg-black text-white">
          Envoyer
        </button>
      </form>
    </>
  );
}
