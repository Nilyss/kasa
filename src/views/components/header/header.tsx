import "./header.scss";

// hooks
import { NavigateFunction, useNavigate } from "react-router-dom";

// assets
import logo from "../../../assets/images/logo.png";

export default function Header(): JSX.Element {
  // ********** TYPES **********
  interface NavItem {
    name: string;
    path: string;
  }

  // ********** VARIABLES **********
  const navigate: NavigateFunction = useNavigate();
  const logoImage: string = logo;
  const navLinks: NavItem[] = [
    { path: "/home", name: "Accueil" },
    { path: "/about", name: "A Propos" },
  ];

  return (
    <header className={"headerContainer"}>
      <div className={"headerContainer__leftWrapper"}>
        <figure className={"headerContainer__leftWrapper__imageWrapper"}>
          <img
            className={"headerContainer__leftWrapper__imageWrapper__image"}
            src={logoImage}
            alt="branding logo"
          />
        </figure>
      </div>
      <div className={"headerContainer__rightWrapper"}>
        <nav className={"headerContainer__rightWrapper__navigation"}>
          <ul
            className={"headerContainer__rightWrapper__navigation__listWrapper"}
          >
            {navLinks.map((link: NavItem, index: number) => {
              return (
                <li
                  onClick={() => navigate(link.path)}
                  key={index}
                  className={
                    "headerContainer__rightWrapper__navigation__listWrapper__listItem"
                  }
                >
                  {link.name}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}