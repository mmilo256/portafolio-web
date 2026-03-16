import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Landing from "./pages/Landing";
import Proyectos from "./pages/Proyectos";
// import Proyectos from "./components/pages/Proyectos";

const App = () => {
  return (
    <div className="bg-[#f2f2f2] text-[#345] font-roboto">
      <MainLayout>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Routes>
      </MainLayout>
    </div>
  );
};

export default App;
