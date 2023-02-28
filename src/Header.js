import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      {/* Sidebar */}
      <ul
        className="navbar-nav sidebar sidebar-light accordion"
        id="accordionSidebar"
      >
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="index.html"
        >
          <div className="sidebar-brand-icon">
            <img src="./assets/img/logo/logo2.png" />
          </div>
          <div className="sidebar-brand-text mx-3">RuangAdmin</div>
        </Link>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Features</div>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#collapseBootstrap"
            aria-expanded="true"
            aria-controls="collapseBootstrap"
          >
            <i className="far fa-fw fa-window-maximize" />
            <span>Bootstrap UI</span>
          </Link>
          <div
            id="collapseBootstrap"
            className="collapse"
            aria-labelledby="headingBootstrap"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Bootstrap UI</h6>
              <Link className="collapse-item" to="alerts.html">
                Alerts
              </Link>
              <Link className="collapse-item" to="buttons.html">
                Buttons
              </Link>
              <Link className="collapse-item" to="dropdowns.html">
                Dropdowns
              </Link>
              <Link className="collapse-item" to="modals.html">
                Modals
              </Link>
              <Link className="collapse-item" to="popovers.html">
                Popovers
              </Link>
              <Link className="collapse-item" to="progress-bar.html">
                Progress Bars
              </Link>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#collapseForm"
            aria-expanded="true"
            aria-controls="collapseForm"
          >
            <i className="fab fa-fw fa-wpforms" />
            <span>Forms</span>
          </Link>
          <div
            id="collapseForm"
            className="collapse"
            aria-labelledby="headingForm"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Forms</h6>
              <Link className="collapse-item" to="/form1">
                Form Basics
              </Link>
              <Link className="collapse-item" to="/form2">
                Form Advanceds
              </Link>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#collapseTable"
            aria-expanded="true"
            aria-controls="collapseTable"
          >
            <i className="fas fa-fw fa-table" />
            <span>Tables</span>
          </Link>
          <div
            id="collapseTable"
            className="collapse"
            aria-labelledby="headingTable"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Tables</h6>
              <Link className="collapse-item" to="simple-tables.html">
                Simple Tables
              </Link>
              <Link className="collapse-item" to="datatables.html">
                DataTables
              </Link>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="ui-colors.html">
            <i className="fas fa-fw fa-palette" />
            <span>UI Colors</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/catagory">
            <i className="fas fa-fw fa-palette" />
            <span>Catagory</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/subcatagory">
            <i className="fas fa-fw fa-palette" />
            <span>Sub-Catagory</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/color">
            <i className="fas fa-fw fa-palette" />
            <span>Color</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/product">
            <i className="fas fa-fw fa-palette" />
            <span>Products</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/datatable">
            <i className="fas fa-fw fa-palette" />
            <span>DataTable</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Examples</div>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#collapsePage"
            aria-expanded="true"
            aria-controls="collapsePage"
          >
            <i className="fas fa-fw fa-columns" />
            <span>Pages</span>
          </Link>
          <div
            id="collapsePage"
            className="collapse"
            aria-labelledby="headingPage"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Example Pages</h6>
              <Link className="collapse-item" to="login.html">
                Login
              </Link>
              <Link className="collapse-item" to="register.html">
                Register
              </Link>
              <Link className="collapse-item" to="404.html">
                404 Page
              </Link>
              <Link className="collapse-item" to="blank.html">
                Blank Page
              </Link>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="charts.html">
            <i className="fas fa-fw fa-chart-area" />
            <span>Charts</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <div className="version" id="version-ruangadmin" />
      </ul>
      {/* Sidebar */}
    </div>
  );
}
