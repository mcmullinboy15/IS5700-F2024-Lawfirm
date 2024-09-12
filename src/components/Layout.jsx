import Header, { HeaderButton } from "./Header";
import Footer from "./Footer";
import img from "../assets/react.svg"


export default function Layout(props){
    return(
        <>
        <Header
        img={<img src={img} alt="LOGO" />}
        >
            <HeaderButton href="index.html">Home</HeaderButton>
            <HeaderButton href="practices.html">Practices</HeaderButton>
            <HeaderButton href="lawyers.html">Our Lawyers</HeaderButton>
            <HeaderButton className="active" href="news.html">
            News
            <div>
            <a href="singlepost.html">News Single Post</a>
            </div>
            </HeaderButton>
            <HeaderButton href="contact.html">Contact</HeaderButton>    
        </Header>
        {props.children}
        <Footer />
        </>
    );
}
