import logo from "./logo.svg";
import "./App.css";
import { Routes, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import BlogPage from "./BlogPage";
import Header from "./Header";
import Testimonials from "./Testimonials";
import Blogdetail from "./Blogdetail";
import Footer from "./Footer";

function App() {
  return (
    <div className=" dark:bg-back-color bg-slate-50 m-0 flex  flex-col  min-h-screen  w-full">
      <Header />
      <Routes>
        <Route path="" exact element={<Homepage />} />
        <Route path="/blogs" exact element={<BlogPage />} />
        <Route path="/testimonials" exact element={<Testimonials />} />
        <Route path="/blogs/:id" exact element={<Blogdetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
