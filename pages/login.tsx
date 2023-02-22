import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Container from "../components/container";
import { AuthContext } from "../context/AuthContext";
import { User } from "../types/user";

const Login = () => {
  const [userLogin, setUserLogin] = useState<User | {}>({});
  const { user, setUser } = useContext(AuthContext) as AuthContext;
  const router = useRouter();

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setUser(userLogin);
    router.push("/");
  };

  useEffect(() => {
    if (user) router.push("/");
  }, []);

  return (
    <Container>
      <div className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mt-4 mb-4 flex flex-col">
        <div className="mb-4">
          <label className="block text-grey-darker text-sm font-bold mb-2">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            name="userName"
            type="text"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-grey-darker text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            name="password"
            type="password"
            placeholder="*****************"
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button type="button" onClick={handleSubmit}>
            Sign In
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Login;
