import Header, { HeaderButton } from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header>
        <HeaderButton href="/">Home</HeaderButton>
        <HeaderButton href="/mcmullinboy15">Mcmullinboy15 </HeaderButton>
        <HeaderButton href="/chancewiese">ChanceWiese </HeaderButton>
        <HeaderButton href="/aaricp">AaricP </HeaderButton>
        <HeaderButton href="/asdf">Asdf </HeaderButton>
        <HeaderButton href="/jkamin0">jkamin0</HeaderButton>
      </Header>

      {children}

      <Footer />
    </>
  );
}
