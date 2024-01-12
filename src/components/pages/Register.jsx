import InputText from "../InputText";
import AuthForm from "../layout/AuthForm";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <AuthForm>
      <p className="text-3xl font-bold text-center text-primary-content">Register</p>
      <form className="mt-[24px] flex flex-col gap-[5px]">
        <div className="flex gap-[10px]">
          <InputText text="First name" type="text" id="firstname" htmlFor="firstname" />
          <InputText text="Last name" type="text" id="lastname" htmlFor="lastname" />
        </div>
        <InputText text="Email" type="email" id="email" htmlFor="email" />
        <InputText text="Password" type="password" id="password" htmlFor="password" />
        <InputText text="Confirm Password" type="password" id="confirmPassword" htmlFor="confirmPassword" />
        <button className="bg-footer-content hover:bg-primary-content text-primary p-2 rounded-[10px] mt-5 w-full font-medium">Create an account</button>
      </form>
      <p className="text-footer-content text-center mt-[24px]">
        Already have an account?{" "}
        <Link to="/login" className="underline">
          Sign in
        </Link>
      </p>
    </AuthForm>
  );
}
