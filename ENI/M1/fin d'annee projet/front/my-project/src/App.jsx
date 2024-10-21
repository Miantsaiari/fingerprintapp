import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { createContext } from "react";
import { Dashboard } from "./pages";
import { Table } from "./components/table";
import MyCalendar from "./components/calendrier";
import Login from "./components/Login";
import Stat from "./components/Statistique";
import DmdAbs from "./components/DemandeAbs";
import JustAbs from "./components/JustAbs";
import { ListAbs } from "./components/ListeAbs";

const MyContext = createContext();

export default function App() {
  const values = {};

  // Layout component that includes the sidebar, except on the login page
  const Layout = ({ children }) => {
    const location = useLocation();
    
    // Check if the current route is login
    const isLoginPage = location.pathname === "/login";

    return (
      <section className="main flex">
        {!isLoginPage && (
          <div className="sidebarWrapper w-[15%] px-3">
            <Sidebar />
          </div>
        )}
        <div className={isLoginPage ? "w-full" : "content_Right w-[85%]"}>
          {children}
        </div>
      </section>
    );
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Layout>
          <Routes>
            <Route path="/" exact={true} element={<Dashboard />} />
            <Route path="Table" element={<Table />} />
            <Route path="edt" element={<MyCalendar />} />
            <Route path="login" element={<Login />} />
            <Route path="stat" element={<Stat />} />
            <Route path="dmdAbs" element={<DmdAbs/>}/>
            <Route path="justAbs" element={<JustAbs/>}/>
            <Route path="listAbs" element={<ListAbs/>}/>
          </Routes>
        </Layout>
      </MyContext.Provider>
    </BrowserRouter>
  );
}
