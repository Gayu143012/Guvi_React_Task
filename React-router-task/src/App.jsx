import { Routes, Route } from "react-router-dom";
import Allcourses from "./pages/Allcourses";
import Fullstack from "./pages/Fullstack";
import Datascience from "./pages/Datascience";
import Cybersecurity from "./pages/Cybersecurity";
import Career from "./pages/Career";
import Cus_Navbar from "./Component/Cus_Navbar";
import CourseDetails from "./pages/CourseDetails";

function App() {
  return (
    <>
      
      <Cus_Navbar />
      <Routes>
        <Route path="/" element={<Allcourses />} />
        <Route path="/fullstack" element={<Fullstack />} />
        <Route path="/datascience" element={<Datascience />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/career" element={<Career />} />
        <Route path="/:category/:id" element={<CourseDetails />} />
      </Routes>
    </>
  );
}

export default App;
