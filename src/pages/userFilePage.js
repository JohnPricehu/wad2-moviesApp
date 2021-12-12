import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Userfile from "../../src/components/userfile"
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