import { Link } from "react-router-dom";
import React, { useContext } from "react";

import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar-wrapper">
      <div className="sidenav">
        <div className="logo">
          <img src="/images/logo.png" />
        </div>

        <div className="side-menu">
          <SidebarLink to={"/dashboard"}>
            <div className="nav-item">
              <img src={DashboardIcon} />
              <div className="text">Dashboard</div>
            </div>
          </SidebarLink>

          <SidebarLink to={"/compound-security"}>
            <div className="nav-item">
              <img src={CompoundSecurityIcon} />
              <div className="text">Compound</div>
            </div>
          </SidebarLink>

          <SidebarLink to={"/apartments"}>
            <div className="nav-item">
              <img src={ApartmentsIcon} />
              <div className="text">Apartments/Users</div>
            </div>
          </SidebarLink>
        </div>
      </div>
    </div>
  );
}
