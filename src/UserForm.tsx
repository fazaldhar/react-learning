import { useRef, useState } from "react";

export const UserForm = () => {
  const [firstName, setFirstName] = useState("");
  const lastNameRef = useRef<HTMLInputElement>();
  const phoneRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const addressRef = useRef<HTMLInputElement>();

  const handleSubmit = () => {
    console.log("lastname", lastNameRef?.current?.value);
  };

  return (
    <div className="user-form">
      <label>First name</label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label>last name</label>
      <input type="text" ref={lastNameRef} />
      <label>Email</label>
      <input type="email" ref={emailRef} />
      <label>Phone</label>
      <input type="phone" ref={phoneRef} />
      <label>Address</label>
      <input type="text" ref={addressRef} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
