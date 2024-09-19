import Header, { HeaderButton } from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header>
        <HeaderButton href="/">Home</HeaderButton>
        <HeaderButton href="/jkamin0">jkamin0</HeaderButton>
      </Header>

      {children}

      <Footer />
    </>
  );
}
