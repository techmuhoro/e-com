import React from "react";
import "./style.css";
import ManageProducts from "../ManageProducts";
import Statistics from "../Statistics";

const DashboardContainer = () => {
    //dashboard tachometer-alt / columns
    //settings cogs / cog / sliders-h
    return (
        <div className='dashboard-container'>
            <div className='sidebar'>
                <div className='sidebar-container'>
                    <div className='sidebar-top'>
                        <h1 className=''>welcome</h1>
                    </div>
                    <ul>
                        <li>
                            <span>
                                <i className='fas fa-tachometer-alt'></i>
                            </span>
                            <span className='link'>
                                <a href=''>Dashboard</a>
                            </span>
                        </li>
                        <li>
                            <span>
                                <i className='fas fa-chart-bar'></i>
                            </span>
                            <span className='link'>
                                <a href=''>Statistics</a>
                            </span>
                        </li>
                        <li>
                            <span>
                                <i className='fas fa-cog'></i>
                            </span>
                            <span className='link'>
                                <a href=''>Settings</a>
                            </span>
                        </li>
                    </ul>
                    <div className='sidebar-bottom'>
                        <p>User</p>
                    </div>
                </div>
            </div>
            <div className='main'>
                <ManageProducts />
            </div>
        </div>
    );
};

export default DashboardContainer;
