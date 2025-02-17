import React from "react";
import * as styles from "./UserCard.module.css";
import { RepoItem } from "../../types/types";

type PropsUserCard = {
  user: RepoItem;
};

const UserCard: React.FC<PropsUserCard> = ({ user }) => (
  <div className={styles.userCard}>
    <div className={styles.userCard__container}>
      <p className={styles.userCard__name}>Название:</p>
      <p className={styles.userCard__text}>{user.name}</p>
    </div>
    <div className={styles.userCard__container}>
      <p className={styles.userCard__name}>Описание:</p>
      <p className={styles.userCard__text}>{user.description ? user.description : '-'}</p>
    </div>
    <div className={styles.userCard__container}>
      <p className={styles.userCard__name}>Ссылка:</p>
      <p className={styles.userCard__text}>{user.html_url}</p>
    </div>
    <div className={styles.userCard__container}>
      <p className={styles.userCard__name}>Звезды:</p>
      <p className={styles.userCard__text}>{user.stargazers_count}</p>
    </div>
    <div className={styles.userCard__container}>
      <p className={styles.userCard__name}>Последнее обновление:</p>
      <p className={styles.userCard__text}>{user.updated_at}</p>
    </div>
  </div>
);

export default UserCard;
