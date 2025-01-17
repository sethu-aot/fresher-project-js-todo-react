import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "../Pages/index";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;