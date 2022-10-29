const Button = ({ onClick, children, leftIcon, rightIcon }) => (
    <button className="btn" onClick={onClick}>
        {leftIcon} {children} {rightIcon}
    </button>
);

export default Button;