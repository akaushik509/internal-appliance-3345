import React from 'react';
import style from "./Sidebar.module.css"

const Sidebar = () => {
    return (
        <div className={style.sidebarfixed}>
            <h3>Sidebar Content</h3>
            <p>This sidebar is fixed and always visible on the page.</p>
        </div>
    );
}

export default Sidebar;
