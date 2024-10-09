import FormLogin from "../../molecules/form-login/form-login";
import "./style.scss";

export interface LoginPageProps {
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  color?: string;
}

const LoginPage = ({
  margin,
  padding,
  backgroundColor,
  color,
}: LoginPageProps) => {
  // Tham chiếu đến collection "users"
  

  // Lọc các tài liệu có age > 25

  
  return (
    <div
      style={{ margin, padding, backgroundColor, color }}
      className={`p-login__container`}
    >
      <FormLogin />
    </div>
  );
};

export default LoginPage;
