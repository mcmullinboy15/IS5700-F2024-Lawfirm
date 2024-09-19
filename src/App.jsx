import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Practices from "./pages/Practices";
import Layout from "./components/Layout";
import News from "./pages/News";
import Lawyers from "./pages/Lawyers";
import SinglePost from "./pages/SinglePost";
import { createUseStyles } from "react-jss";

// const useStyles = createUseStyles({
//   app: {
//     color: "blue",
//     padding: 10,
//   },
// });

function App() {
  // const classes = useStyles();
  // console.log("classes", classes);

  return (
    <Layout>
      {/* <>
        <div className={classes.app}>Hello World</div>
        <div
          style={{
            color: "blue",
            padding: 10,
          }}
        >
          Hello World
        </div>
      </> */}
      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/practices" element={<Practices />} />
          <Route path="/lawyers" element={<Lawyers />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/singlepost" element={<SinglePost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;

// const ContentContainer = styled.div`
//   display: flex;
//   flex-direction: ${({ direction }) => direction || "row"};
// `;

// const ContentContainer2 = ({ children }) => (
//   <div className={"flex " + direction ? "flex-row" : ""}>{children}</div>
// );

// function App() {
//   return (
//     <>
//       <div className={classes.app}>Hello World</div>
//       <div
//         style={{
//           color: "blue",
//           padding: 10,
//         }}
//       >
//         Hello World
//       </div>
//     </>
//   );
// }
