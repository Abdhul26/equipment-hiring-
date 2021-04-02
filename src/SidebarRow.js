import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import "./SidebarRow.css"

function SidebarRow({ Icon, title }) {
  return (
    <div className="SidebarRow">
          <Icon className="SidebarRow_icon"/>
          <h4 className="SidebarRow_title">{title }</h4>
    </div>
  );
}

export default SidebarRow;
