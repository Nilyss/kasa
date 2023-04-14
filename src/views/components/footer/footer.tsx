import "./footer.scss";

// assets
import logo from "../../../assets/images/logo_white.png";
export default function Footer(): JSX.Element {
  const whiteLogo: string = logo;
  const credentials: string = "© 2020 Kasa. All rights reserved";

  return (
    <footer className={"footerContainer"}>
      <div className={"footerContainer__containerTop"}>
        <figure className={"footerContainer__containerTop__imageWrapper"}>
          <img
            className={"footerContainer__containerTop__imageWrapper__image"}
            src={whiteLogo}
            alt="branding logo"
          />
        </figure>
      </div>
      <div className={"footerContainer__containerBottom"}>
        <p className={"footerContainer__containerBottom__message"}>
            {credentials}
        </p>
      </div>
    </footer>
  );
}