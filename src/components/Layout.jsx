import Header, { HeaderButton } from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<div className="min-h-screen bg-background-dark text-white">
			<Header>
				<HeaderButton href="/">Home</HeaderButton>
				<HeaderButton href="/mcmullinboy15">Mcmullinboy15 </HeaderButton>
				<HeaderButton href="/chancewiese">ChanceWiese </HeaderButton>
				<HeaderButton href="/aaricp">AaricP </HeaderButton>
				<HeaderButton href="/kassiejenson">KassieJenson </HeaderButton>
				<HeaderButton href="/asdf">Asdf </HeaderButton>
				<HeaderButton href="/hamnerben">Hamnerben </HeaderButton>
				<HeaderButton href="/JorgenGear">JorgenGear</HeaderButton>
				<HeaderButton href="/ryanplitt">ryanplitt</HeaderButton>
			</Header>

			{children}

			<Footer />
		</div>
	);
}
