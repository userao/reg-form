import type { ReactNode } from "react";
import "./Form.css";

type FormProps = {
    className?: string;
    onSubmit?(...args: any[]): any;
    children: ReactNode;
};

export default function Form({
    className,
    onSubmit = () => {},
    children,
}: FormProps) {
    return (
        <form className={`form ${className}`} onSubmit={onSubmit}>
            {children}
        </form>
    );
}
