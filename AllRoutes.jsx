import { Routes, Route } from "react-router-dom";
import Login from "./src/Features/Auth/Login/Login";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* <Route path="/" element={<LandingPage />} />

     
      <Route path="/register" element={<Register />} />

      <Route
        path="/art"
        element={
          <PrivateRoute>
            <ArtHome />
          </PrivateRoute>
        }
      />

      <Route
        path="/scrap"
        element={
          <PrivateRoute>
            <ScrapHome />
          </PrivateRoute>
        }
      /> */}
    </Routes>
  );
};

export default AppRoutes;