import { FC } from "react";
import styles from "./home.module.scss";
import {FacebookOutLine, GithubOutLine, LinkedInOutline, TelegramLine, WhatsappLine, ZaloOutline} from "assets/icons";

export const ContactLinnk: FC = () => (
  <div className={styles["contact-link"]}>
    <ul>
      <li>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          className="facebook"
        >
          <FacebookOutLine />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/hightech105"
          target="_blank"
          rel="noreferrer"
          className="github"
        >
          <GithubOutLine />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/"
          target="_blank"
          rel="noreferrer"
          className="linkedin"
        >
          <LinkedInOutline />
        </a>
      </li>
      <li>
        <a
          href="@Thienhoadang"
          target="_blank"
          rel="noreferrer"
          className="Telegram"
        >
          <TelegramLine />
        </a>
      </li>
      <li>
        <a
          href="+1 (226) 333-2461"
          target="_blank"
          rel="noreferrer"
          className="Whatsapp"
        >
          <WhatsappLine />
        </a>
      </li>
    </ul>
  </div>
);
