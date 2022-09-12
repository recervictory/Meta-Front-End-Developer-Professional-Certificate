import { useState } from "react";

const RegisterForm = () => {
  const [form, setForm] = useState({
    firstName: "John",
    lastName: "Kennedy",
    email: "john.Kennedy@gmail.com",
  });

  const style = {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    boxSizing: "border-box",
    borderBottom: "2px solid red",
  };

  return (
    <>
      <div>
        <label>
          First name :
          <input
            style={style}
            value={form.firstName}
            onChange={(e) => {
              setForm({
                ...form,
                firstName: e.target.value,
              });
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Last name :
          <input
            style={style}
            value={form.lastName}
            onChange={(e) => {
              setForm({
                ...form,
                lastName: e.target.value,
              });
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Email :
          <input
            style={style}
            value={form.email}
            onChange={(e) => {
              setForm({
                ...form,
                email: e.target.value,
              });
            }}
          />
        </label>
      </div>
      <p>
        {form.firstName} {form.lastName} ({form.email})
      </p>
    </>
  );
};

export default RegisterForm;
