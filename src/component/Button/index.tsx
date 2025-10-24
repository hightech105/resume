import {ButtonHTMLAttributes, FC, ReactNode} from "react";
import styles from "./button.module.scss";
import classNames from "classnames";

type ButtonProps = {
  children?: ReactNode;
  isLoading?: boolean;
};

const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  isLoading,
  ...rest
}) => {

  return (
    <button
      className={classNames(styles.button, rest.className, {[styles.loading]: isLoading})}
      disabled={isLoading}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
