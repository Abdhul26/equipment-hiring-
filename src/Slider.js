import React from 'react';
import "./sidebar.css";
import SidebarRow from "./SidebarRow"
import "./SidebarRow";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import StarsIcon from '@material-ui/icons/Stars';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import PowerIcon from '@material-ui/icons/Power';
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import CameraFrontIcon from '@material-ui/icons/CameraFront';

function Slider() {
  return (
    <div className="sidebar">
          <h2>sidebar content</h2>
          <SidebarRow Icon={ ShoppingBasketIcon}  title="Most buyed" />
          <SidebarRow Icon={ PersonPinCircleIcon}  title="Buyed Aound You"/>
          <SidebarRow Icon={StarsIcon} title="Most in Wishllist" />
          <hr />
          <SidebarRow Icon={LocalTaxiIcon} title="Cars" />
          <SidebarRow Icon={MotorcycleIcon} title="Bikes" />
          <SidebarRow Icon={PowerIcon} title="Electrical & Electronics" />
          <SidebarRow Icon={LocalAirportIcon} title="Drones" />
          <SidebarRow Icon={ImportantDevicesIcon} title="Heavy Equipments" />
          <SidebarRow Icon={CameraFrontIcon} title="Cameras" />

    </div>
  );
}

export default Slider;
