export default function Footer() {
  function handleClick() {
    const email = prompt("Please enter your email:");
    if (email) {
      alert(`Thank you for your email: ${email}`);
    }
  }

  return (
    <div id="footer">
      <div class="clearfix">
        <div class="section">
          <h4>Latest News</h4>
          <p>
            This website template has been designed by Free Website Templates
            for you, for free. You can replace all this text with your own text.
            You can remove any link.
          </p>
        </div>
        <div class="section contact">
          <h4>Contact Us</h4>
          <p>
            <span>Address:</span> the address city, state 1111
          </p>
          <p>
            <span>Phone:</span> (+20) 000 222 999
          </p>
          <p>
            <span>Email:</span> info@freewebsitetemplates.com
          </p>
        </div>
        <div class="section">
          <h4>SEND US A MESSAGE</h4>
          <p>
            If you're having problems editing this website template, then don't
            hesitate to ask for help on the Forums.
          </p>
          <button onClick={handleClick}>
            Click to send us an email
          </button>
        </div>
      </div>
      <div id="footnote">
        <div class="clearfix">
          <div class="connect">
            <a
              href="http://freewebsitetemplates.com/go/facebook/"
              class="facebook"
            ></a>
            <a
              href="http://freewebsitetemplates.com/go/twitter/"
              class="twitter"
            ></a>
            <a
              href="http://freewebsitetemplates.com/go/googleplus/"
              class="googleplus"
            ></a>
            <a href="http://pinterest.com/fwtemplates/" class="pinterest"></a>
          </div>
          <p>© Copyright 2023 Manes Winchester. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
