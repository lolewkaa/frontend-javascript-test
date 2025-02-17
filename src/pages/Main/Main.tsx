import React, { ChangeEvent, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import * as styles from "./Main.module.css";
import Preloader from "../../ui/Preloader/Preloader";
import UserCard from "../../components/UserCard/UserCard";
import { RootState } from "../../slices";
import { setUserRepo } from "../../slices/userSlice";
import { RepoItem } from "../../types/types";
import Input from "../../ui/Input/Input";
import { fetchUserRepos } from "../../utils/api";


const Main: React.FC = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [isPreloaderActive, setIsPreloaderActive] = useState(false);
  const [visibleCount, setVisibleCount] = useState(20);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const token = process.env.TOKEN;

  const dispatch = useDispatch();
  const useAppSelector = useSelector.withTypes<RootState>();
  const user = useAppSelector((state) => state.user.value);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserRepo([] as RepoItem[]));
    setUsername(e.target.value);
  };

  useEffect(() => {
    if (username !== "") {
      setIsPreloaderActive(true);
      const timer = setTimeout(async () => {
        try {
          const repos = await fetchUserRepos(username, token);
          dispatch(setUserRepo(repos));
          if (repos.length === 0) {
            setError("Нет доступных репозиториев")
          }
          else {
            setError("");
          }
        } catch {
          setError("Такого пользователя не существует");
        } finally {
          setIsPreloaderActive(false);
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [username]);

  const handleScroll = () => {
    const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
    setIsAtBottom(bottom);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isAtBottom) {
      setTimeout(() => {
        setVisibleCount(visibleCount + 20);
      }, 1000);
    }
  }, [isAtBottom]);
  return (
    <section className={styles.main}>
    <Input handleChange={handleInputChange} value={username} inputStyle={styles.main__input}/>
    {error && isPreloaderActive !== true && <p className={styles.main__text}>{error}</p>}
    <div className={styles.main__user_container}>
      {isPreloaderActive && username && <Preloader />}
      {user.length > 0 && user.slice(0, visibleCount).map((el: RepoItem, index: number) => (
        <UserCard key={index} user={el} />
      ))}
    </div>
  </section>
  );
};
export default Main;
