import InputText from "../InputText";
import AuthForm from "../layout/AuthForm";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <AuthForm>
      <p className="text-3xl font-bold text-center text-primary-content">Login</p>
      <form className="mt-[24px] flex flex-col gap-[10px]">
        <InputText text="Username" type="text" id="username" htmlFor="username" />
        <InputText text="Password" type="password" id="password" htmlFor="password" />
        <div className="text-footer-content flex justify-end ">
          <a href="#" className="hover:underline">
            Forgot your password?
          </a>
        </div>
        <button className="bg-footer-content hover:bg-primary-content text-primary p-2 rounded-[10px] w-full font-medium">Sign in</button>
      </form>
      <p className="text-footer-content text-center mt-[24px]">
        Don't have an account?{" "}
        <Link to="/register" className="underline">
          Sign up
        </Link>
      </p>
    </AuthForm>
  );
}
