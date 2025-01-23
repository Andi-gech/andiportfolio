import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import BlogPage from "./BlogPage";
import Header from "./Header";
import Testimonials from "./Testimonials";
import Blogdetail from "./Blogdetail";
import Footer from "./Footer";

function App() {
  return (
    <div className=" relative   h-screen  w-screen   overflow-x-hidden dark:bg-gradient-to-b dark:from-zinc-950 dark:via-purple-950  dark:to-black  bg-gradient-to-b from-purple-600 via-gray-50 to-blue-600">
           <div className=" fixed z-10  top-0 left-0   dark:bg-grid-white/[0.05] bg-grid-black/[0.2] m-0 flex  flex-col  h-full  w-screen">
           </div>
            <Header />
     

      <Routes>
        <Route path="" exact element={<Homepage />} />
        <Route path="blogs" exact element={<BlogPage />} />
        <Route path="testimonials" exact element={<Testimonials />} />
        <Route path="blogs/:id" exact element={<Blogdetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
