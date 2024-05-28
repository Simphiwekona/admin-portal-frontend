import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faUser,
  faFile,
  faCopy,
  faBoxOpen,
  faGauge,
} from "@fortawesome/free-solid-svg-icons";

import "./sidebar.css";
import { Link } from "react-router-dom";
// import SubMenu from "./SubMenu";
// import { Nav, Button } from "react-bootstrap";
// import classNames from "classnames";

// class SideBar extends React.Component {
//   render() {
//     return (
//       <div className={classNames("sidebar", { "is-open": this.props.isOpen })}>
//         <div className="sidebar-header">
//           <Button
//             variant="link"
//             onClick={this.props.toggle}
//             style={{ color: "#fff" }}
//             className="mt-4"
//           >
//             <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
//           </Button>
//           <h3>react-bootstrap sidebar</h3>
//         </div>

//         <Nav className="flex-column pt-2">
//           <p className="ml-3">Heading</p>

//           <Nav.Item className="active">
//             <Nav.Link href="/">
//               <FontAwesomeIcon icon={faHome} className="mr-2" />
//               Home
//             </Nav.Link>
//           </Nav.Item>

//           <SubMenu
//             title="Pages"
//             icon={faCopy}
//             items={["Link", "Link2", "Active"]}
//           />

//           <Nav.Item>
//             <Nav.Link href="/">
//               <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
//               About
//             </Nav.Link>
//           </Nav.Item>

//           <Nav.Item>
//             <Nav.Link href="/">
//               <FontAwesomeIcon icon={faImage} className="mr-2" />
//               Portfolio
//             </Nav.Link>
//           </Nav.Item>

//           <Nav.Item>
//             <Nav.Link href="/">
//               <FontAwesomeIcon icon={faQuestion} className="mr-2" />
//               FAQ
//             </Nav.Link>
//           </Nav.Item>

//           <Nav.Item>
//             <Nav.Link href="/">
//               <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
//               Contact
//             </Nav.Link>
//           </Nav.Item>
//         </Nav>
//       </div>
//     );
//   }
// }
const SideBar = () => {
  return (
    <div>
      <a href="#sidenav">open</a>
      <div className="sidenav" id="sidenav">
        <ul>
          <li className="center user">
            <p>Linked</p>
          </li>
          <li className="divider"></li>
          <li className="item active">
            <Link to="/analytics">
              <FontAwesomeIcon icon={faGauge} className="mr-2 icon-space" />
              Dashboard
            </Link>
          </li>
          <li className="item">
            <Link to="/quote">
              <FontAwesomeIcon icon={faCopy} className="mr-2 icon-space" />
              Quotation
            </Link>
          </li>
          <li className="item">
            <Link to="/products">
              <FontAwesomeIcon icon={faBoxOpen} className="mr-2 icon-space" />
              Products
            </Link>
          </li>
          <li className="item">
            <Link to="/invoice">
            <FontAwesomeIcon icon={faFile} className="mr-2 icon-space" />
                Invoices
            </Link>
          </li>
          <li className="item">
            <Link to="/user">
              <FontAwesomeIcon icon={faUser} className="mr-2 icon-space" />
              Users
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
