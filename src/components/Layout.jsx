import Header, { HeaderButton } from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header>
        <HeaderButton href="/">Home</HeaderButton>
      </Header>

      {children}

      <Footer />
    </>
  );
}
