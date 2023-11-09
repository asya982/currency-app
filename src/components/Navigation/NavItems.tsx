import { FC } from "react";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const NavItems: FC = () => {
  const WithActiveNav: FC<{ to: string; linkName: string }> = ({
    to,
    linkName,
  }) => <NavLink to={`/${to}`}>{linkName}</NavLink>;
  return (
    <nav className={styles.navbar}>
      <WithActiveNav to={""} linkName={"Main page"} />
      <WithActiveNav to={"rates"} linkName={"Rates"} />
      <WithActiveNav to={"about"} linkName={"About"} />
    </nav>
  );
};

export default NavItems;
