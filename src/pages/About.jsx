import Header, { HeaderButton } from "../components/Header";

import Footer from "../components/Footer";

//hello world
export default function About() {
  return (
    <>
      <Header
        img={<img src="images/logo.png" alt="LOGO" height="52" width="362" />}
      >
        <HeaderButton to="/">Home</HeaderButton>
        <HeaderButton to="/practices">Practices</HeaderButton>
        <HeaderButton to="/lawyers">Our Lawyers</HeaderButton>
        <HeaderButton className="active" to="/news">
          News
          {/* <div>
          <a href="singlepost.html">News Single Post</a>
        </div> */}
        </HeaderButton>
        <HeaderButton to="/contact">Contact</HeaderButton>
      </Header>

      <div id="contents">
        <div className="clearfix">
          <h1>About Us</h1>
          <div class="frame2">
            <div class="box">
              <img
                src="images/thumb-up.jpg"
                alt="Img"
                height="298"
                width="924"
              />
            </div>
          </div>
          <h2>We Have Free Templates for Everyone</h2>
          <p>
            Our website templates are created with inspiration, checked for
            quality and originality and meticulously sliced and coded. What's
            more, they're absolutely free! You can do a lot with them. You can
            modify them. You can use them to design websites for clients, so
            long as you agree with the{" "}
            <a href="http://www.freewebsitetemplates.com/about/terms/">
              Terms of Use
            </a>
            . You can even remove all our links if you want to.
          </p>
          <h2>We Have More Templates for You</h2>
          <p>
            Looking for more templates? Just browse through all our{" "}
            <a href="http://www.freewebsitetemplates.com/">
              Free Website Templates
            </a>{" "}
            and find what you're looking for. But if you don't find any website
            template you can use, you can try our{" "}
            <a href="http://www.freewebsitetemplates.com/freewebdesign/">
              Free Web Design
            </a>{" "}
            service and tell us all about it. Maybe you're looking for something
            different, something special. And we love the challenge of doing
            something different and something special.
          </p>
          <h2>Be Part of Our Community</h2>
          <p>
            If you're experiencing issues and concerns about this website
            template, join the discussion{" "}
            <a href="http://www.freewebsitetemplates.com/forums/">
              on our forum
            </a>{" "}
            and meet other people in the community who share the same interests
            with you.
          </p>
          <h2>Template details</h2>
          <p>Design version 11. Code version 6.</p>
          <p>
            Website Template details, discussion and updates for this{" "}
            <a href="http://www.freewebsitetemplates.com/discuss/lawfirm/">
              Law Firm Web Template
            </a>
            .
          </p>
          <p>
            Website Template design by{" "}
            <a href="http://www.freewebsitetemplates.com/">
              Free Website Templates
            </a>
            .
          </p>
          <p>
            Please feel free to remove some or all the text and links of this
            page and replace it with your own About content.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
