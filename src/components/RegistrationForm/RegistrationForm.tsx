import { useForm, type FieldValues } from "react-hook-form";
import { useState } from "react";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./RegistrationForm.css";

export default function RegistrationForm() {
    type SubmitState = "idling" | "submitting" | "success" | "error";
    const [submitState, setSubmitState] = useState<SubmitState>("idling");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function submitHandler(data: FieldValues) {
        setSubmitState("submitting");

        function submit() {
            new Promise((res) => {
                setTimeout(() => {
                    res(data);
                }, 1000);
            }).then(() => setSubmitState("success"));
        }

        submit();
    }

    return (
        <Form
            onSubmit={handleSubmit((data) => submitHandler(data))}
            className="register-form"
        >
            {submitState === "success" ? (
                <div className="register-form__success-msg">Вы зарегистрированы!</div>
            ) : (
                <>
                    <h3 className="register-form__header">
                        Зарегистрироваться
                    </h3>
                    <div className="register-form__input-wrapper">
                        <Input
                            {...register("name", {
                                required: "Это обязательное поле",
                                min: {
                                    value: 2,
                                    message: "Минимум два символа",
                                },
                                pattern: {
                                    value: /^[a-zA-Z]+/,
                                    message: "Неверное имя",
                                },
                            })}
                            disabled={submitState === "submitting"}
                            label="Имя"
                            type="text"
                            name="name"
                        />
                        {errors.name && (
                            <p className="register-form__err-msg">{`${errors.name.message}`}</p>
                        )}
                    </div>
                    <div className="register-form__input-wrapper">
                        <Input
                            {...register("email", {
                                required: "Это обязательное поле",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Неверный e-mail",
                                },
                            })}
                            disabled={submitState === "submitting"}
                            label="Почта"
                            type="email"
                            name="email"
                        />
                        {errors.email && (
                            <p className="register-form__err-msg">{`${errors.email.message}`}</p>
                        )}
                    </div>
                    <div className="register-form__input-wrapper">
                        <Input
                            {...register("password", {
                                required: "Это обязательное поле",
                                minLength: {
                                    value: 6,
                                    message: "Минимум 6 символов",
                                },
                            })}
                            disabled={submitState === "submitting"}
                            label="Пароль"
                            type="password"
                            name="password"
                        />
                        {errors.password && (
                            <p className="register-form__err-msg">{`${errors.password.message}`}</p>
                        )}
                    </div>
                    <Button
                        disabled={submitState === "submitting"}
                        type="submit"
                        label="Зарегистрироваться"
                        className="register-form__submit-btn"
                    />
                </>
            )}
        </Form>
    );
}
