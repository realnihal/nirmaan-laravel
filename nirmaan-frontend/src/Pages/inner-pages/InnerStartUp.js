import React from "react";

import "./innerStartUp.css";
import NavBar from "./NavBar";
import Footer from "../Footer";
import InnerStartUpComp from "./InnerStartUpComp";
import { useLocation } from "react-router-dom";

function InnerStartUp() {
  const location = useLocation();
  const project = location.state.project;
  console.log(project);
  const teamMembers = [
    { name: "Sanjay Krishnan", link: "sanjay-profile-link" },
    { name: "Siraj Valeti", link: "siraj-profile-link" },
    { name: "Pranav Singh", link: "pranav-profile-link" },
    { name: "Teja S", link: "teja-profile-link" },
  ];

  return (
    <>
      <NavBar />
      <InnerStartUpComp
        content={project.description}
        title={project.sector}
        projectName={project.project_name}
        teamMembers={teamMembers}
        subTitle="Lorem Ipsum"
        name={project.start_up_name}
        project = {project}
        inr="INR 20 Cr"
      />
      <Footer />
    </>
  );
}

export default InnerStartUp;
