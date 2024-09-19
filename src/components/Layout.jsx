import Header, { HeaderButton } from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header>
        <HeaderButton href="/">Home</HeaderButton>
        <HeaderButton href="/Mrsean8615">mrsean8615</HeaderButton>
      </Header>

      {children}

      <Footer />
    </>
  );
}
