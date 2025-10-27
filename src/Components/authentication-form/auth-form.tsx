import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "./auth-form.css";

import { AuthenticationService } from "../../services/Authentication/AuthenticationService";
const schema = yup
  .object({
    name: yup.string().max(100).notRequired(),
    email: yup.string().required("E-mail obrigatório").max(100),
    pwd: yup.string().required("Senha obrigatória").max(100),
  })
  .required();

type AuthForm = yup.InferType<typeof schema>;

export default function AuthenticationForm() {
  const [isLogin, setIsLogin] = useState(true);

  const {
    register,
    handleSubmit,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<AuthForm> = (data) => {
    if (isLogin) {
      AuthenticationService.Login(data.email, data.pwd).then((res) => {
        console.log(res);
      });
    } else {
      AuthenticationService.SingUp({
        name: data.name || "",
        email: data.email,
        password: data.pwd,
        country: "Brazil",
        occupation: "Developer",
      }).then((res) => {
        console.log(res);
      });
    }
  };

  const handleAuthType = () => {
    clearErrors();
    setIsLogin((prev) => !prev);
    setValue("email", "");
    setValue("name", "");
    setValue("pwd", "");
  };

  //Nome , email, senha,
  //muda campos,
  //ocupação, pais;
  //muda campos (opcional)
  //tags

  // 🔥 useEffect para limpar os erros após 5 segundos
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => clearErrors(), 5000);
      return () => clearTimeout(timer);
    }
  }, [errors, clearErrors]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="login-own">
        <button
          type="button"
          onClick={handleAuthType}
          className="handler-auth-type"
        >
          <span className={isLogin ? "selected" : "not-selected"}>Entrar</span>
          <span className={!isLogin ? "selected" : "not-selected"}>
            Criar Conta
          </span>
        </button>

        {!isLogin && (
          <>
            <input type="text" placeholder="Nome" {...register("name")} />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </>
        )}

        <input
          type="text"
          placeholder="E-mail"
          {...register("email", { required: true })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Senha"
          {...register("pwd", { required: true })}
        />
        {errors.pwd && <p className="error">{errors.pwd.message}</p>}

        <button type="submit" className="login-button">
          {isLogin ? "Entrar" : "Criar Conta"}
        </button>
      </div>
    </form>
  );
}
