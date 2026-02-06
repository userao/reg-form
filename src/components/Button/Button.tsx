import "./Button.css";

type ButtonProps = {
    type?: "button" | "submit" | "reset" | undefined;
    label: string;
    className?: string;
    disabled?: boolean;
};

export default function Button({
    type = "button",
    label,
    className,
    disabled
}: ButtonProps) {
    return (
        <button className={`btn ${className}`} type={type} disabled={disabled}>
            {label}
        </button>
    );
}
