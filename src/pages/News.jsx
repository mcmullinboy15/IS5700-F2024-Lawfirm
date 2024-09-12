import happyImage from '../../assets/images/happy.jpg';
import brideSideviewImage from '../../assets/images/bride-sideview.jpg';
import childrenImage from '../../assets/images/children.jpg';


//news component
export default function News() {
    return (
        <>
        <div class="main">
            <h1>News</h1>
            <ul class="news">
                <li>
                    <div class="box">
                        <img src={brideSideviewImage} alt="Img" height="245" width="213"/>
                    </div>
                    <p class="info">
                        31st January 2023 by <span class="author">Manes Winchester</span>
                    </p>
                    <h2>The Basics of Marriage Laws</h2>
                    <p>
                        This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.You can remove any link
                    </p>
                    <a href="singlepost.html" class="more">Read More</a>
                </li>
                <li>
                    <div class="box">
                        <img src={happyImage} alt="Img" height="245" width="213"/>
                    </div>
                    <p class="info">
                        31st January 2023 by <span class="author">Manes Winchester</span>
                    </p>
                    <h2>Happy Newly Divorced Women</h2>
                    <p>
                        This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.You can remove any link
                    </p>
                    <a href="singlepost.html" class="more">Read More</a>
                </li>
                <li>
                    <div class="box">
                        <img src={childrenImage} alt="Img" height="245" width="213"/>
                    </div>
                    <p class="info">
                        31st January 2023 by <span class="author">Manes Winchester</span>
                    </p>
                    <h2>Children &amp; Divorced Parents</h2>
                    <p>
                        This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.You can remove any link
                    </p>
                    <a href="singlepost.html" class="more">Read More</a>
                </li>
            </ul>
        </div>
    </>
    );
}
