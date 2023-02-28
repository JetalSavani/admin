import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Form2() {
  return (
   
          <div>
        
        <div id="wrapper" >

          <Header/>
  <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
      {/* TopBar */}
      <nav className="navbar navbar-expand navbar-light bg-navbar topbar mb-4 static-top">
        <button
          id="sidebarToggleTop"
          className="btn btn-link rounded-circle mr-3"
        >
          <i className="fa fa-bars" />
        </button>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-search fa-fw" />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
              aria-labelledby="searchDropdown"
            >
              <form className="navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-1 small"
                    placeholder="What do you want to look for?"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    style={{ borderColor: "#3f51b5" }}
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-bell fa-fw" />
              <span className="badge badge-danger badge-counter">3+</span>
            </a>
            <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="alertsDropdown"
            >
              <h6 className="dropdown-header">Alerts Center</h6>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-primary">
                    <i className="fas fa-file-alt text-white" />
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 12, 2019</div>
                  <span className="font-weight-bold">
                    A new monthly report is ready to download!
                  </span>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-success">
                    <i className="fas fa-donate text-white" />
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 7, 2019</div>
                  $290.29 has been deposited into your account!
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-warning">
                    <i className="fas fa-exclamation-triangle text-white" />
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 2, 2019</div>
                  Spending Alert: We've noticed unusually high spending for your
                  account.
                </div>
              </a>
              <a
                className="dropdown-item text-center small text-gray-500"
                href="#"
              >
                Show All Alerts
              </a>
            </div>
          </li>
          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="messagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-envelope fa-fw" />
              <span className="badge badge-warning badge-counter">2</span>
            </a>
            <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="messagesDropdown"
            >
              <h6 className="dropdown-header">Message Center</h6>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="./assets/img/man.png"
                    style={{ maxWidth: 60 }}
                    alt=""
                  />
                  <div className="status-indicator bg-success" />
                </div>
                <div className="font-weight-bold">
                  <div className="text-truncate">
                    Hi there! I am wondering if you can help me with a problem
                    I've been having.
                  </div>
                  <div className="small text-gray-500">Udin Cilok · 58m</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="./assets/img/girl.png"
                    style={{ maxWidth: 60 }}
                    alt=""
                  />
                  <div className="status-indicator bg-default" />
                </div>
                <div>
                  <div className="text-truncate">
                    Am I a good boy? The reason I ask is because someone told me
                    that people say this to all dogs, even if they aren't
                    good...
                  </div>
                  <div className="small text-gray-500">Jaenab · 2w</div>
                </div>
              </a>
              <a
                className="dropdown-item text-center small text-gray-500"
                href="#"
              >
                Read More Messages
              </a>
            </div>
          </li>
          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="messagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-tasks fa-fw" />
              <span className="badge badge-success badge-counter">3</span>
            </a>
            <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="messagesDropdown"
            >
              <h6 className="dropdown-header">Task</h6>
              <a className="dropdown-item align-items-center" href="#">
                <div className="mb-3">
                  <div className="small text-gray-500">
                    Design Button
                    <div className="small float-right">
                      <b>50%</b>
                    </div>
                  </div>
                  <div className="progress" style={{ height: 12 }}>
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </a>
              <a className="dropdown-item align-items-center" href="#">
                <div className="mb-3">
                  <div className="small text-gray-500">
                    Make Beautiful Transitions
                    <div className="small float-right">
                      <b>30%</b>
                    </div>
                  </div>
                  <div className="progress" style={{ height: 12 }}>
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "30%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </a>
              <a className="dropdown-item align-items-center" href="#">
                <div className="mb-3">
                  <div className="small text-gray-500">
                    Create Pie Chart
                    <div className="small float-right">
                      <b>75%</b>
                    </div>
                  </div>
                  <div className="progress" style={{ height: 12 }}>
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </a>
              <a
                className="dropdown-item text-center small text-gray-500"
                href="#"
              >
                View All Taks
              </a>
            </div>
          </li>
          <div className="topbar-divider d-none d-sm-block" />
          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="img-profile rounded-circle"
                src="./assets/img/boy.png"
                style={{ maxWidth: 60 }}
              />
              <span className="ml-2 d-none d-lg-inline text-white small">
                Maman Ketoprak
              </span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <a className="dropdown-item" href="#">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                Profile
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                Settings
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                Activity Log
              </a>
              <div className="dropdown-divider" />
              <a
                className="dropdown-item"
                href="javascript:void(0);"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
      {/* Topbar */}
      <>
  {/* Container Fluid*/}
  <div className="container-fluid" id="container-wrapper">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Form Advanceds</h1>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="./">Home</a>
        </li>
        <li className="breadcrumb-item">Forms</li>
        <li className="breadcrumb-item active" aria-current="page">
          Form Advanceds
        </li>
      </ol>
    </div>
    <div className="row">
      <div className="col-lg-6">
        {/* Select2 */}
        <div className="card mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Select2</h6>
          </div>
          <div className="card-body">
            <p>Select2 is a jQuery based replacement for select boxes</p>
            <div className="form-group">
              <label htmlFor="select2Single">Single Select Box</label>
              <select
                className="select2-single form-control"
                name="state"
                id="select2Single"
              >
                <option value="">Select</option>
                <option value="Aceh">Aceh</option>
                <option value="Sumatra Utara">Sumatra Utara</option>
                <option value="Sumatra Barat">Sumatra Barat</option>
                <option value="Riau">Riau</option>
                <option value="Kepulauan Riau">Kepulauan Riau</option>
                <option value="Jambi">Jambi</option>
                <option value="Bengkulu">Bengkulu</option>
                <option value="Sumatra Selatan">Sumatra Selatan</option>
                <option value="Kepulauan Bangka Belitung">
                  Kepulauan Bangka Belitung
                </option>
                <option value="Lampung">Lampung</option>
                <option value="Banten">Banten</option>
                <option value="Jawa Barat">Jawa Barat</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Jawa Tengah">Jawa Tengah</option>
                <option value="Yogyakarta">Yogyakarta</option>
                <option value="Jawa TImur">Jawa Timur</option>
                <option value="Bali">Bali</option>
                <option value="Nusa Tenggara Barat">Nusa Tenggara Barat</option>
                <option value="Nusa Tenggara Timur">Nusa Tenggara Timur</option>
                <option value="Kalimantan Barat">Kalimantan Barat</option>
                <option value="Kalimantan Selatan">Kalimantan Selatan</option>
                <option value="Kalimantan Tengah">Kalimantan Tengah</option>
                <option value="Kalimantan Timur">Kalimantan Timur</option>
                <option value="Kalimantan Utara">Kalimantan Utara</option>
                <option value="Gorontalo">Gorontalo</option>
                <option value="Sulawaesi Barat">Sulawesi Barat</option>
                <option value="Sulawesi Selatan">Sulawesi Selatan</option>
                <option value="Sulawesi Tengah">Sulawesi Tengah</option>
                <option value="Sulawesi Tenggara">Sulawesi Tenggara</option>
                <option value="Sulawesi Utara">Sulawesi Utara</option>
                <option value="Maluku">Maluku</option>
                <option value="Maluku Utara">Maluku Utara</option>
                <option value="Papua Barat">Papua Barat</option>
                <option value="Papua">Papua</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="select2SinglePlaceholder">
                Single Select Box with Placeholder
              </label>
              <select
                className="select2-single-placeholder form-control"
                name="state"
                id="select2SinglePlaceholder"
              >
                <option value="">Select</option>
                <option value="Aceh">Aceh</option>
                <option value="Sumatra Utara">Sumatra Utara</option>
                <option value="Sumatra Barat">Sumatra Barat</option>
                <option value="Riau">Riau</option>
                <option value="Kepulauan Riau">Kepulauan Riau</option>
                <option value="Jambi">Jambi</option>
                <option value="Bengkulu">Bengkulu</option>
                <option value="Sumatra Selatan">Sumatra Selatan</option>
                <option value="Kepulauan Bangka Belitung">
                  Kepulauan Bangka Belitung
                </option>
                <option value="Lampung">Lampung</option>
                <option value="Banten">Banten</option>
                <option value="Jawa Barat">Jawa Barat</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Jawa Tengah">Jawa Tengah</option>
                <option value="Yogyakarta">Yogyakarta</option>
                <option value="Jawa TImur">Jawa Timur</option>
                <option value="Bali">Bali</option>
                <option value="Nusa Tenggara Barat">Nusa Tenggara Barat</option>
                <option value="Nusa Tenggara Timur">Nusa Tenggara Timur</option>
                <option value="Kalimantan Barat">Kalimantan Barat</option>
                <option value="Kalimantan Selatan">Kalimantan Selatan</option>
                <option value="Kalimantan Tengah">Kalimantan Tengah</option>
                <option value="Kalimantan Timur">Kalimantan Timur</option>
                <option value="Kalimantan Utara">Kalimantan Utara</option>
                <option value="Gorontalo">Gorontalo</option>
                <option value="Sulawaesi Barat">Sulawesi Barat</option>
                <option value="Sulawesi Selatan">Sulawesi Selatan</option>
                <option value="Sulawesi Tengah">Sulawesi Tengah</option>
                <option value="Sulawesi Tenggara">Sulawesi Tenggara</option>
                <option value="Sulawesi Utara">Sulawesi Utara</option>
                <option value="Maluku">Maluku</option>
                <option value="Maluku Utara">Maluku Utara</option>
                <option value="Papua Barat">Papua Barat</option>
                <option value="Papua">Papua</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="select2Multiple">
                Multiple-Select Boxes (pillbox)
              </label>
              <select
                className="select2-multiple form-control"
                name="states[]"
                multiple="multiple"
                id="select2Multiple"
              >
                <option value="">Select</option>
                <option value="Aceh">Aceh</option>
                <option value="Sumatra Utara">Sumatra Utara</option>
                <option value="Sumatra Barat">Sumatra Barat</option>
                <option value="Riau">Riau</option>
                <option value="Kepulauan Riau" selected="">
                  Kepulauan Riau
                </option>
                <option value="Jambi">Jambi</option>
                <option value="Bengkulu">Bengkulu</option>
                <option value="Sumatra Selatan">Sumatra Selatan</option>
                <option value="Kepulauan Bangka Belitung">
                  Kepulauan Bangka Belitung
                </option>
                <option value="Lampung">Lampung</option>
                <option value="Banten">Banten</option>
                <option value="Jawa Barat" selected="">
                  Jawa Barat
                </option>
                <option value="Jakarta">Jakarta</option>
                <option value="Jawa Tengah">Jawa Tengah</option>
                <option value="Yogyakarta">Yogyakarta</option>
                <option value="Jawa TImur">Jawa Timur</option>
                <option value="Bali">Bali</option>
                <option value="Nusa Tenggara Barat">Nusa Tenggara Barat</option>
                <option value="Nusa Tenggara Timur">Nusa Tenggara Timur</option>
                <option value="Kalimantan Barat">Kalimantan Barat</option>
                <option value="Kalimantan Selatan">Kalimantan Selatan</option>
                <option value="Kalimantan Tengah">Kalimantan Tengah</option>
                <option value="Kalimantan Timur">Kalimantan Timur</option>
                <option value="Kalimantan Utara">Kalimantan Utara</option>
                <option value="Gorontalo">Gorontalo</option>
                <option value="Sulawaesi Barat">Sulawesi Barat</option>
                <option value="Sulawesi Selatan">Sulawesi Selatan</option>
                <option value="Sulawesi Tengah">Sulawesi Tengah</option>
                <option value="Sulawesi Tenggara">Sulawesi Tenggara</option>
                <option value="Sulawesi Utara">Sulawesi Utara</option>
                <option value="Maluku">Maluku</option>
                <option value="Maluku Utara">Maluku Utara</option>
                <option value="Papua Barat">Papua Barat</option>
                <option value="Papua">Papua</option>
              </select>
            </div>
            <p>
              For documentations Select2 you can visit{" "}
              <a href="https://select2.org/" target="_blank">
                here.
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Date Picker</h6>
          </div>
          <div className="card-body">
            <p>
              Simple and easy select a time for a text input using your mouse.
            </p>
            <div className="form-group" id="simple-date1">
              <label htmlFor="simpleDataInput">Simple Data Input</label>
              <div className="input-group date">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-calendar" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="01/06/2020"
                  id="simpleDataInput"
                />
              </div>
            </div>
            <div className="form-group" id="simple-date2">
              <label htmlFor="oneYearView">One Year View</label>
              <div className="input-group date">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-calendar" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="01/06/2020"
                  id="oneYearView"
                />
              </div>
            </div>
            <div className="form-group" id="simple-date3">
              <label htmlFor="decadeView">Decade View</label>
              <div className="input-group date">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-calendar" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="01/06/2020"
                  id="decadeView"
                />
              </div>
            </div>
            <div className="form-group" id="simple-date4">
              <label htmlFor="dateRangePicker">Range Select</label>
              <div className="input-daterange input-group">
                <input
                  type="text"
                  className="input-sm form-control"
                  name="start"
                />
                <div className="input-group-prepend">
                  <span className="input-group-text">to</span>
                </div>
                <input
                  type="text"
                  className="input-sm form-control"
                  name="end"
                />
              </div>
            </div>
            <p>
              For documentations Bootstrap Datepicker you can visit{" "}
              <a
                href="https://github.com/uxsolutions/bootstrap-datepicker"
                target="_blank"
              >
                here.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    {/*Row*/}
    <div className="row">
      <div className="col-lg-6">
        <div className="card mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">TouchSpin</h6>
          </div>
          <div className="card-body">
            <p>
              A mobile and touch friendly input spinner component for Bootstrap
              3. It supports the mousewheel and the up/down keys.
            </p>
            <div className="form-group">
              <label htmlFor="touchSpin1">Simpel TouchSpin</label>
              <input id="touchSpin1" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="touchSpin2">TouchSpin with Prefix</label>
              <input id="touchSpin2" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="touchSpin3">TouchSpin with Vertical Button</label>
              <input id="touchSpin3" type="text" className="form-control" />
            </div>
            <p>
              For documentations TouchSpin you can visit{" "}
              <a
                href="https://github.com/istvan-ujjmeszaros/bootstrap-touchspin"
                target="_blank"
              >
                here.
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">ClockPicker</h6>
          </div>
          <div className="card-body">
            <p>A clock-style timepicker for Bootstrap (or jQuery).</p>
            <div className="form-group">
              <label htmlFor="clockPicker1">Simple ClockPicker</label>
              <div className="input-group clockpicker" id="clockPicker1">
                <input
                  type="text"
                  className="form-control"
                  defaultValue="06:30"
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-clock" />
                  </span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="clockPicker2">
                Simple ClockPicker with Auto Close
              </label>
              <div className="input-group clockpicker" id="clockPicker2">
                <input
                  type="text"
                  className="form-control"
                  defaultValue="12:30"
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-clock" />
                  </span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="clockPicker2">
                ClockPicker with Auto Check Minutes
              </label>
              <div className="input-group" id="clockPicker3">
                <input
                  className="form-control"
                  placeholder="Now"
                  defaultValue=""
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" id="check-minutes">
                    Check the Minutes
                  </button>
                </div>
              </div>
            </div>
            <p>
              For documentations Clockpicker you can visit{" "}
              <a
                href="http://weareoutman.github.io/clockpicker/"
                target="_blank"
              >
                here.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* Row */}
    {/* Modal Logout */}
    <div
      className="modal fade"
      id="logoutModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabelLogout"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabelLogout">
              Ohh No!
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to logout?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-primary"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <a href="login.html" className="btn btn-primary">
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*-Container Fluid*/}
</>



  <Footer/>
    </div>
  </div>
</div>
        <>
 
  
</>


    </div>
  )
}
