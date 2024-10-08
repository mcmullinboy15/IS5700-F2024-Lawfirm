export default function Practices() {
  return (
    <>
      <div id="contents">
        <div class="clearfix">
          <div class="sidebar">
            <div>
              <h2>Practices</h2>
              <ul>
                <li>
                  <a href="post.html">Prenuptial Agreement</a>
                </li>
                <li>
                  <a href="post.html">Marriage</a>
                </li>
                <li>
                  <a href="post.html">Divorce</a>
                </li>
              </ul>
            </div>
            <div>
              <h2>Client Testimonials</h2>
              <p>
                &ldquo;The best family lawyers in the city so far. Me and my
                ex-wife didn’t have any
                <br /> problems settling the terms and agreement. Everything
                went so smoothly. We’re both very happy.&rdquo;{" "}
                <span>- Jared Greene</span>
              </p>
            </div>
          </div>

          <div className="pt-8">
            <h1>Practices</h1>
            <p>
              This website template has been designed by{" "}
              <a href="http://www.freewebsitetemplates.com/">
                Free Website Templates
              </a>{" "}
              for you, for free. You can replace all this text with your own
              text. You can remove any link to our website from this website
              template, you're free to use this website template without linking
              back to us. If you're having problems editing this website
              template, then don't hesitate to ask for help on the{" "}
              <a href="http://www.freewebsitetemplates.com/forums/">Forums</a>.
            </p>
            <ul className="flex flex-wrap gap-y-8 gap-x-4">
              {/* <ul className="grid grid-cols-2 gap-4"> */}
              <li className="">
                <a href="post.html">
                  <img src="images/prenuptial.jpg" height="198" width="265" />
                  <span>Prenuptial Agreement</span>
                </a>
              </li>
              <li className="">
                <a href="post.html">
                  <img src="images/bride.jpg" height="198" width="265" />
                  <span>Marriage</span>
                </a>
              </li>
              <li className="">
                <a href="post.html">
                  <img src="images/divorce.jpg" height="198" width="265" />
                  <span>Divorce</span>
                </a>
              </li>
              <li className="">
                <a href="post.html">
                  <img src="images/divorce.jpg" height="198" width="265" />
                  <span>Divorce</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
