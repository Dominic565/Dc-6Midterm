
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
 
  const menuItem = [
    {
      path: "/venues",
      name: "Venues",

    },
    {
      path: "/about",
      name: "About Us",
    },
    {
      path: "/erorrpage",
      name: "ErrorPage",
    },
    {
      path: "/dashboard",
      name: "Dashboard",
    },
  ];
  return (
    <div className="container">
      <div style={{ "200px" : "50px" }} className="sidebar">
       
        <div className="top_section">
          
          <h1 style={{  "block" : "none" }} className="logo">
            MDC
          </h1>
          <div style={{ "50px" : "0px" }} className="bars">
           
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassname="active"
            end
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{   "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;