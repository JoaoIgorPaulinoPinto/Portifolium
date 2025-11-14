import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AuthenticationService } from "../../services/Authentication/AuthenticationService";
import styles from "./auth-form.module.css";

const schema = yup
  .object({
    name: yup.string().max(100).notRequired(),
    email: yup.string().required("E-mail obrigatório").max(100),
    pwd: yup.string().required("Senha obrigatória").max(100),
    occupation: yup.string().notRequired(),
    country: yup.string().notRequired(),
  })
  .required();

type AuthForm = yup.InferType<typeof schema>;

export default function AuthenticationForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [step, setStep] = useState(0);

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
      AuthenticationService.Login(data.email, data.pwd).then((res) =>
        console.log(res)
      );
    } else {
      if (step === 0) {
        // Vai para o segundo passo
        setStep(1);
        return;
      }

      AuthenticationService.SingUp({
        name: data.name || "",
        email: data.email,
        password: data.pwd,
        country: data.country || "Brazil",
        occupation: data.occupation || "Developer",
      }).then((res) => console.log(res));
    }
  };

  const handleAuthType = () => {
    clearErrors();
    setIsLogin((prev) => !prev);
    setValue("email", "");
    setValue("name", "");
    setValue("pwd", "");
    setStep(0);
  };

  // 🔥 Limpa erros após 5 segundos
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => clearErrors(), 5000);
      return () => clearTimeout(timer);
    }
  }, [errors, clearErrors]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.login_own}>
        <button
          type="button"
          onClick={handleAuthType}
          className={styles.handler_auth_type}
        >
          <span className={isLogin ? styles.selected : styles.not_selected}>
            Entrar
          </span>
          <span className={!isLogin ? styles.selected : styles.not_selected}>
            Criar Conta
          </span>
        </button>

        {/* Login */}
        {isLogin && (
          <div className={styles.form}>
            <input
              type="text"
              placeholder="E-mail"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}

            <input
              type="password"
              placeholder="Senha"
              {...register("pwd", { required: true })}
            />
            {errors.pwd && <p className={styles.error}>{errors.pwd.message}</p>}

            <button type="submit" className={styles.login_button}>
              Entrar
            </button>
          </div>
        )}

        {/* Sign Up */}
        {!isLogin && (
          <div className={styles.form}>
            {step === 0 && (
              <div className={styles.form}>
                <input type="text" placeholder="Nome" {...register("name")} />
                {errors.name && (
                  <p className={styles.error}>{errors.name.message}</p>
                )}

                <input
                  type="text"
                  placeholder="E-mail"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className={styles.error}>{errors.email.message}</p>
                )}

                <input
                  type="password"
                  placeholder="Senha"
                  {...register("pwd", { required: true })}
                />
                {errors.pwd && (
                  <p className={styles.error}>{errors.pwd.message}</p>
                )}

                <button type="submit" className={styles.login_button}>
                  Próximo
                </button>
              </div>
            )}

            {step === 1 && (
              <div className={styles.form}>
                <input
                  type="text"
                  placeholder="Ocupação"
                  {...register("occupation")}
                />
                {errors.occupation && (
                  <p className={styles.error}>{errors.occupation.message}</p>
                )}

                <select className={styles.select} {...register("country")}>
                  <option value="Brazil">Brasil</option>
                  <option value="Portugal">Portugal</option>
                  <option value="EUA">EUA</option>
                  <option value="Espanha">Espanha</option>
                  <option value="França">França</option>
                  <option value="Alemanha">Alemanha</option>
                </select>

                <div className={styles.step_buttons}>
                  <button
                    type="button"
                    className={styles.back_button}
                    onClick={() => setStep(0)}
                  >
                    Voltar
                  </button>
                  <button type="submit" className={styles.login_button}>
                    Criar Conta
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </form>
  );
}
