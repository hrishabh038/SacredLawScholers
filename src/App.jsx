import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, PageLoading } from "./components/components";

const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const Profile = lazy(() => import("./pages/Profile"));
const CreateBlog = lazy(() => import("./pages/CreateBlog"));
const UserManagement = lazy(() => import("./pages/UserManagement"));
const ApproveBlogs = lazy(() => import("./pages/ApproveBlogs"));

function App() {
  const { pathname } = useLocation();
  return (
    <>
      <div className="pt-[115px] pb-[75px] px-4 w-full flex justify-center">
        <div className="w-full lg:w-[1000px]">
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/register" element={<Register />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog/:id" element={<Blog />} />
              <Route path="/profile/:username" element={<Profile />} />
              <Route path="/create-blog" element={<CreateBlog />} />
              <Route path="/user-management" element={<UserManagement />} />
              <Route path="/approve-blogs" element={<ApproveBlogs />} />
            </Routes>
          </Suspense>
        </div>
      </div>

      {!pathname.startsWith("/auth") && (
        <div className="px-4 py-[40px] flex items-center justify-center w-full bg-gray-100 border-t border-gray-200">
          <div className="w-full lg:w-[1000px]">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
