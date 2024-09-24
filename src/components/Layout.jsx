import Header, { HeaderButton } from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="h-svh bg-background-dark text-white">
      <Header>
        <HeaderButton href="/">Home</HeaderButton>
        <HeaderButton href="/mcmullinboy15">Mcmullinboy15 </HeaderButton>
        <HeaderButton href="/chancewiese">ChanceWiese </HeaderButton>
        <HeaderButton href="/aaricp">AaricP </HeaderButton>
        <HeaderButton href="/kassiejenson">KassieJenson </HeaderButton>
      </Header>

      {children}

      <Footer />
    </div>
  );
}
