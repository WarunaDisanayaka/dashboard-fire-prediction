import React, { useState } from "react";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import GaugeChart from "react-gauge-chart";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./Dashboard.css";

function Dashboard() {
  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );

  const changeStyle1 = () => {
    if (
      style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };

  return (
    <div id="page-top">
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar />
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              </div>

              <div className="row">

                {/* Humidity Gauge - Circular Progress Bar */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col">
                          <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Humidity
                          </div>
                          <div style={{ width: "50%", height: "120px" }}>
                            <CircularProgressbar
                              value={60} // Change to actual humidity value
                              text={`${60}%`} // Display humidity in percentage
                              styles={{
                                path: { stroke: `#00BFFF` }, // Blue color for path
                                text: { fill: '#000000', fontSize: '16px' }, // Black color for text
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Temperature Gauge - Circular Progress Bar */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col">
                          <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                            Temperature
                          </div>
                          <div style={{ width: "50%", height: "120px" }}>
                            <CircularProgressbar
                              value={25} // Change to actual temperature value
                              text={`${25}°C`} // Display temperature in °C
                              styles={{
                                path: { stroke: `#FF0000` }, // Red color for path
                                text: { fill: '#000000', fontSize: '16px' }, // Black color for text
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AMG Sensor Value Gauge */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col">
                          <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                            AMG Sensor
                          </div>
                          <div style={{ width: "50%", height: "120px" }}>
                            <CircularProgressbar
                              value={85} // Change to actual AMG sensor value
                              text={`${85}`} // Display AMG sensor value
                              styles={{
                                path: { stroke: `#32CD32` }, // LimeGreen color for path
                                text: { fill: '#000000', fontSize: '16px' }, // Black color for text
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto"></div>
            </div>
          </footer>
        </div>
      </div>

      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

      <div
        className="modal fade"
        id="logoutModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a className="btn btn-primary" href="/login">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
