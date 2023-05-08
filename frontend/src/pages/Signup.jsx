import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bca, setBca] = useState("");
  const { signup, error, loading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password, bca);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label htmlFor="">BlockChain Address : </label>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setBca(e.target.value)}
      />

      <label htmlFor="">Email : </label>
      <input
        type="email"
        name=""
        id=""
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="">Password : </label>
      <input
        type="password"
        name=""
        id=""
        onChange={(e) => setPassword(e.target.value)}
      />

      <button disabled={loading}>Sign Up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};
export default Signup;
