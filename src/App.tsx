import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Main from "./pages/Main/Main";

const App: React.FC = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </Layout>
);
export default App;
