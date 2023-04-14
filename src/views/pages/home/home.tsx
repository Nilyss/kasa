import "./home.scss";

// assets
import banner from "../../../assets/images/home_banner.png";

export default function Home(): JSX.Element {
  const bannerImage: string = banner;
  const bannerMessage: string = "Chez vous, partout et ailleurs";

  return (
    <main className={"homeContainer"}>
      <section className={"homeContainer__banner"}>
        <figure className={"homeContainer__banner__imageWrapper"}>
          <img
            className={"homeContainer__banner__imageWrapper__image"}
            src={bannerImage}
            alt="banner"
          />
        </figure>
        <p className={"homeContainer__banner__message"}>{bannerMessage}</p>
      </section>
    </main>
  );
}