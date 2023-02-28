import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Form1() {
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
      <h1 className="h3 mb-0 text-gray-800">Form Basics</h1>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="./">Home</a>
        </li>
        <li className="breadcrumb-item">Forms</li>
        <li className="breadcrumb-item active" aria-current="page">
          Form Basics
        </li>
      </ol>
    </div>
    <div className="row">
      <div className="col-lg-6">
        {/* Form Basic */}
        <div className="card mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Form Basic</h6>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="customFile"
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                    Choose file
                  </label>
                </div>
              </div>
              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customControlAutosizing"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customControlAutosizing"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* Form Sizing */}
        <div className="card mb-3">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Sizing</h6>
          </div>
          <div className="card-body">
            <p>
              Set heights using classes like{" "}
              <code className="highlighter-rouge">.form-control-lg</code> and{" "}
              <code className="highlighter-rouge">.form-control-sm</code>.
            </p>
            <p>Example for form general</p>
            <input
              className="form-control form-control-lg mb-3"
              type="text"
              placeholder=".form-control-lg"
            />
            <input
              className="form-control  mb-3"
              type="text"
              placeholder="Default input"
            />
            <input
              className="form-control form-control-sm  mb-3"
              type="text"
              placeholder=".form-control-sm"
            />
            <p>Example for Select</p>
            <select className="form-control form-control-lg  mb-3">
              <option>Large select</option>
            </select>
            <select className="form-control mb-3">
              <option>Default select</option>
            </select>
            <select className="form-control form-control-sm mb-3">
              <option>Small select</option>
            </select>
          </div>
        </div>
        {/* Horizontal Form */}
        <div className="card mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              Horizontal Form
            </h6>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group row">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-3 col-form-label"
                >
                  Email
                </label>
                <div className="col-sm-9">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail3"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="inputPassword3"
                  className="col-sm-3 col-form-label"
                >
                  Password
                </label>
                <div className="col-sm-9">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword3"
                    placeholder="Password"
                  />
                </div>
              </div>
              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-3 pt-0">
                    Radios
                  </legend>
                  <div className="col-sm-9">
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        id="customRadio1"
                        name="customRadio"
                        className="custom-control-input"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customRadio1"
                      >
                        First Radio
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        id="customRadio2"
                        name="customRadio"
                        className="custom-control-input"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customRadio2"
                      >
                        Second Radio
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        name="radioDisabled"
                        id="customRadioDisabled1"
                        className="custom-control-input"
                        disabled=""
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customRadioDisabled1"
                      >
                        Third Radio Disabled
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
              <div className="form-group row">
                <div className="col-sm-3">Checkbox</div>
                <div className="col-sm-9">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Check this custom checkbox
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-primary">
                    Sign in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        {/* General Element */}
        <div className="card mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              General Element
            </h6>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">
                  Example select
                </label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">
                  Example multiple select
                </label>
                <select
                  multiple=""
                  className="form-control"
                  id="exampleFormControlSelect2"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlReadonly">Readonly</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Readonly input here..."
                  id="exampleFormControlReadonly"
                  readOnly=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="validationServer01">Input with Success</label>
                <input
                  type="text"
                  className="form-control is-valid"
                  id="validationServer01"
                  placeholder="Input with Success"
                  defaultValue="Mark"
                  required=""
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="form-group">
                <label htmlFor="validationServer03">Input with Error</label>
                <input
                  type="text"
                  className="form-control is-invalid"
                  id="validationServer03"
                  placeholder="Input with Error"
                  required=""
                />
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
              <div className="form-group">
                <label>Checkbox</label>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck2"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck2"
                  >
                    Check this custom checkbox 1
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck3"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck3"
                  >
                    Check this custom checkbox 2
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheckDisabled1"
                    disabled=""
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheckDisabled1"
                  >
                    Check this custom checkbox
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label>Radio Button</label>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="customRadio3"
                    name="customRadio"
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadio3"
                  >
                    Toggle this custom radio
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="customRadio4"
                    name="customRadio"
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadio4"
                  >
                    Or toggle this other custom radio
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    name="radioDisabled"
                    id="customRadioDisabled2"
                    className="custom-control-input"
                    disabled=""
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioDisabled2"
                  >
                    Toggle this custom radio
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label>Switches</label>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitch1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customSwitch1"
                  >
                    Toggle this switch element
                  </label>
                </div>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    disabled=""
                    id="customSwitch2"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customSwitch2"
                  >
                    Disabled switch element
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Input Group */}
        <div className="card mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Input Group</h6>
          </div>
          <div className="card-body">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  @
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  @example.com
                </span>
              </div>
            </div>
            <label htmlFor="basic-url">Your vanity URL</label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">
                  https://example.com/users/
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
              />
              <div className="input-group-append">
                <span className="input-group-text">.00</span>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">With textarea</span>
              </div>
              <textarea
                className="form-control"
                aria-label="With textarea"
                defaultValue={""}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <button
                  className="btn btn-outline-primary dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div role="separator" className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with dropdown button"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Row*/}
    {/* Documentation Link */}
    <div className="row">
      <div className="col-lg-12 text-center">
        <p>
          For more documentations you can visit
          <a
            href="https://getbootstrap.com/docs/4.3/components/forms/"
            target="_blank"
          >
            bootstrap forms documentations.
          </a>{" "}
          and{" "}
          <a
            href="https://getbootstrap.com/docs/4.3/components/input-group/"
            target="_blank"
          >
            bootstrap input groups documentations
          </a>
        </p>
      </div>
    </div>
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
