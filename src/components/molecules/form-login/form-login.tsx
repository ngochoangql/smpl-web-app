import { useState } from "react";
import Button from "../../atoms/button";

import InputField from "../input-field/input-field";
import "./style.scss";

import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase";
export interface FormLoginProps {
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  color?: string;
}

const FormLogin = ({
  margin,
  padding,
  backgroundColor,
  color,
}: FormLoginProps) => {
  const [type, setType] = useState<string>("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const naviagte = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      
        localStorage.setItem("user_id", user.uid);
        localStorage.setItem("token", (user as any).accessToken);
        alert("Đăng nhập thành công!");
        naviagte("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
      });
  };

  return (
    <div
      style={{ margin, padding, backgroundColor, color }}
      className={`m-form-login__container`}
    >
      <h2>Login</h2>
      <InputField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        iconName="email"
        placeHolder="Email"
      />
      <InputField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type={`${type === "password" ? "password" : "text"}`}
        iconName={type === "password" ? "eye-hidden" : "eye-show"}
        placeHolder="Passsword"
        onClick={() => setType(type === "password" ? "text" : "password")}
      />
      <Button
        onClick={() => handleLogin(email, password)}
        text="Đăng nhập"
        modifier="login"
        width="50%"
      />
      <p
        style={{
          fontFamily:
            "CerebriSans, -apple-system, BlinkMacSystemFont, Roboto, sans-serif",
        }}
      >
        Chưa có tài khoản! <u>Đăng kí ngay</u>
      </p>
    </div>
  );
};

export default FormLogin;
