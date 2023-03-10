// import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";
// import Home from "../pages/home/Home";
// import Login from "../pages/login/Login";
// import Error from "../pages/Error";

// import "../App.css";
// import Header from "../components/Header/Header";

// const AppRouter = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/"  element={<Home />} />
//         <Route path="login" element={<Login />} />
//         <Route path="*" element={<Error />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRouter;
import React, { useEffect, useCallback } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import Company from "../pages/company/Company";
import User from "../pages/user/User";
import Show from "../pages/showData/Show";

import Login from "../pages/login/Login";

import Behind from "../pages/behind/Behind";
import BehindEditPage from "../pages/behind/edit/BehindEditPage";
import Header from "../components/Header/Header";

import UserAPI from "../API/user.json";
import companyAPI from "../API/company.json";
import { setUserAPI } from "../redux/actions/controlUser";
import { setCompanyAPI } from "../redux/actions/controlCompany";

const GetUserRoutes = () => {
  const routes = useRoutes([
    {
      path: "",
      element: <Header />,
      children: [
        { path: "", index: true, element: <Home /> },
        {
          path: "company",
          element: <Company />,
        },
        {
          path: "user",
          element: <User />,
        },
        {
          path: "show",
          element: <Show />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
    { path: "*", element: <Error /> },
  ]);
  return routes;
};

const GetAdminRoutes = () => {
  const routes = useRoutes([
    {
      path: "behind",
      element: <Behind />,
    },
    { path: "edit/company/:id", element: <BehindEditPage /> },
    { path: "edit/user/:id", element: <BehindEditPage /> },
    { path: "*", element: <div>?????????????????????</div> },
  ]);
  return routes;
};

const GetAllRoutes = () => {
  const routes = useRoutes([
    {
      path: "/*",
      element: <GetUserRoutes />,
    },
    {
      path: "/admin/*",
      element: <GetAdminRoutes />,
    },
    {
      path: "*",
      element: <div>?????????????????????</div>,
    },
  ]);
  return routes;
};
const App = () => {
  const dispatch = useDispatch();
  const getUserAPI = useCallback(() => {
    try {
      let userResult = [];
      Object.values(UserAPI).forEach((obj) => {
        userResult.push(obj);
      });
      dispatch(setUserAPI(userResult));
    } catch (error) {
      alert(error, "???????????????????????????");
    }
  }, [dispatch]);
  const getCompanyAPI = useCallback(() => {
    try {
      let companyResult = [];
      Object.values(companyAPI).forEach((obj) => {
        companyResult.push(obj);
      });
      dispatch(setCompanyAPI(companyResult));
    } catch (error) {
      alert(error, "????????????????????????");
    }
  }, [dispatch]);

  useEffect(() => {
    getUserAPI();
    getCompanyAPI();
  }, [getUserAPI, getCompanyAPI]);
  useEffect(() => {
    window.addEventListener("unload", () => {
      window.sessionStorage.clear();
    });
  });
  return (
    <Router>
      <GetAllRoutes />
    </Router>
  );
};
export default App;
