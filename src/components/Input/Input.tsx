import { useState } from "react";
import { type UseFormRegisterReturn } from "react-hook-form";
import "./Input.css";

type InputProps = {
    type: "email" | "text" | "date" | "password";
    label: string;
    name: string;
} & UseFormRegisterReturn;

export default function Input(props: InputProps) {
    const [isTopLable, setIsTopLable] = useState(false);

    function handleFocus(e: React.FocusEvent): void {
        setIsTopLable(true);
    }

    return (
        <label className="input__label">
            <input
                {...props}
                onFocus={handleFocus}
                type={props.type}
                name={props.name}
                className="input"
            />
            <p className={`input__label-text ${isTopLable ? "top" : ""}`}>
                {props.label}
            </p>
        </label>
    );
}
