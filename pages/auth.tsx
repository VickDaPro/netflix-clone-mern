import { useCallback, useState } from "react";
import Input from "@/components/Input";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className="relative w-full h-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">
      <div className="bg-black h-full w-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign In" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Username"
                  id="username"
                  value={userName}
                  onChange={(e: any) => setUserName(e.target.value)}
                />
              )}
              <Input
                label="Email"
                id="email"
                type="email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <Input
                label="Password"
                id="password"
                type="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === "login" ? "Login" : "Sign Up"}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === "login"
                ? "First time using Netflix?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === "login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
