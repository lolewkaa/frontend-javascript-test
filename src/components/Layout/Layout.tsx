import React from "react";
import * as styles from "./Layout.module.css";

type PropsLayout = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
};

const Layout: React.FC<PropsLayout> = ({ children }) => (
  <main className={styles.page}>{children}</main>
);

export default Layout;
