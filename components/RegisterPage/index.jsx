import { useRef } from "react";

function RegisterPage() {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  async function registerUser(first_name, last_name, username, password) {
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ first_name, last_name, username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }
    return data;
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    try {
      const result = await registerUser(
        enteredFirstName,
        enteredLastName,
        enteredUsername,
        enteredPassword
      );
      if (result.success === 1) {
        alert("Registration Successful!");
      } else {
        alert("Username already exists!");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-teal-100 h-screen pt-6">
      <div className="bg-sky-900 w-4/5 mx-auto text-slate-200 rounded-xl py-10">
        <h1 className="text-3xl mx-auto w-fit mb-2">Register</h1>
        <form className="mx-auto w-fit" onSubmit={submitHandler}>
          <div className="grid grid-cols-4 grid-rows-4 gap-2 mt-4">
            <label>First Name</label>
            <input
              type="text"
              ref={firstNameInputRef}
              className="h-10 ml-12 rounded-md px-2 text-cyan-950 col-span-3 min-w-full"
            />
            <label>Last Name</label>
            <input
              type="text"
              ref={lastNameInputRef}
              className="h-10 ml-12 rounded-md px-2 text-cyan-950 col-span-3 min-w-full"
            />
            <label>Username</label>
            <input
              type="text"
              ref={usernameInputRef}
              className="h-10 ml-12 rounded-md px-2 text-cyan-950 col-span-3 min-w-full"
            />
            <label>Password</label>
            <input
              type="password"
              ref={passwordInputRef}
              className="h-10 ml-12 rounded-md px-2 text-cyan-950 col-span-3 min-w-full"
            />
            <button
              type="submit"
              className="bg-sky-950 h-10 w-44 rounded-md col-span-4 justify-self-center mt-4"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
