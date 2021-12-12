import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Userfile from "../components/userfile"
import SiteHeader from "../components/siteHeader"

const userFilePage = (props) => {
  return (
    <>
    <SiteHeader/>
      <Userfile/>
      </>
  );
};

export default userFilePage;