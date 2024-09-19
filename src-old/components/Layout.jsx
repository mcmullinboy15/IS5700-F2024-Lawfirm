import Header, { HeaderButton } from "./Header";
import Footer from "./Footer";
import Logo from "../assets/images/logo.png";

export default function Layout({ children }) {
  return (
    <>
      <Header img={<img src={Logo} alt="LOGO" />}>
        <HeaderButton href="/">Home</HeaderButton>
        <HeaderButton href="/practices">Practices</HeaderButton>
        <HeaderButton href="/lawyers">Our Lawyers</HeaderButton>
        <HeaderButton className="active" href="/news">
          News
          <div>
            <a href="/singlepost">News Single Post</a>
          </div>
        </HeaderButton>
        <HeaderButton href="/contact">Contact</HeaderButton>
      </Header>

      {children}

      <Footer />
    </>
  );
}
