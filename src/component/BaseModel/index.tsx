import Button from "component/Button";
import {FC, ReactNode, useEffect, useState} from "react";
import styles from "./baseModel.module.scss";
import {Footer} from "./Footer";
import {Header} from "./Header";

type BaseModelProps = {
  className?: string;
  contentClassName?: string;
  title: string;
  icon?: ReactNode;
  visible?: boolean;
  children?: ReactNode;
  handleClose?: () => void;
  footer?: ReactNode[];
  footerAlign?: "left" | "center" | "right";
  handleOk?: () => void;
};

const BaseModel: FC<BaseModelProps> = ({
  className = "",
  contentClassName = "",
  title,
  icon,
  children,
  visible,
  handleClose,
  footer,
  footerAlign,
  handleOk,
}) => {
  const [isOpen, setIsOpen] = useState(visible ?? false);

  const close = () => {
    if (handleClose) {
      handleClose();
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setIsOpen(visible ?? false);
  }, [visible]);

  const modelClassNames = `${styles["base-model"]} ${
    isOpen ? styles["base-model-opened"] : styles["base-model-closed"]
  } ${className}`;

  const defaultFooter: ReactNode[] = [
    <Button key={1} onClick={close}>
      Cancel
    </Button>,
    <Button key={2} onClick={handleOk}>
      Ok
    </Button>,
  ];

  return (
    <>
      <div className={modelClassNames}>
        <Header
          title={
            <div>
              {icon}
              {""}
              {title}
            </div>
          }
          handleClose={close}
        />
        <div className={`${styles.content} ${contentClassName}`}>
          {children}
        </div>
        <Footer
          footerComponents={footer ?? defaultFooter}
          footerAlign={footerAlign ?? "right"}
        />
      </div>
      <div className={styles.background}></div>
    </>
  );
};

export default BaseModel;
