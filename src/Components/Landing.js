import React from "react";
import Typography from "@material-ui/core/Typography";
import ReceiptIcon from "@material-ui/icons/Receipt";
import hero from "../Images/hero.jpg";
const Landing = () => {
  return (
    <div className="hero">
      <div className="hero-image">
        <img src={hero} />{" "}
      </div>
      <div className="hero-text">
        <h2>Teacher Classroom App</h2>
        <Typography variant="h5" color="textSecondary" component="p">
           A WebApp for teachers to manage their classroom.Teachers can signup with admin app.
          <br />
          <br />
          NoSQL Grp 9
          <br />
          31- Raj Shah
          <br />
          32-Ranveer Shah
          <br />
          47-Shivanshu Singh
        </Typography>
      </div>
    </div>
  );
};
export default Landing;
