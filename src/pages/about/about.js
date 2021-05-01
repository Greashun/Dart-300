import React from "react";
import profile from "../../assets/profile.jpg";
import { NavBar } from "../../components";
import { Grid, Box } from "@material-ui/core";
const About = () => {
  return (
    <div style={{ backgroundColor: "#e95841" }}>
      <NavBar />
      <img
        src={profile}
        alt="vincent tse profile"
        style={{ borderRadius: "50%", width: "35vh" }}
      />
      <div>
        <Box m={2} p={2}>
          <h1>About</h1>
        </Box>
      </div>

      <div>
        <Box m={1} p={1}>
          Hi, my name is Vincent Tse. I'm a student at Penn State majoring{" "}
          <br />
          Multimedia Design Outside of school. I'm a Software Developer that{" "}
          <br />
          enjoys. Collaborating and creating new features for software For{" "}
          <br />
          software I work with React.js, Node.js, SQL, Redux, and Java. For{" "}
          <br />
          design I work with Adobe Illustrator, Photoshop, and AfterEffects. On{" "}
          <br />
          my free time I enjoy playing photography, traveling, videogames,{" "}
          <br />
          Movies and catching up on tech.
        </Box>
      </div>
      <div>
        <h3>Contact</h3>
        <Box>
          {" "}
          <ul>
            <Grid
              container
              direction="row"
              justify="center"
              style={{ textDecoration: "none" }}
            >
              <li style={{ listStyleType: "none" }}>
                <Box m={1} p={1}>
                  <a
                    href="mailto:vncntts@gmail.com"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    Email
                  </a>
                </Box>
              </li>
              <li style={{ listStyleType: "none" }}>
                <Box m={1} p={1}>
                  <a
                    href="https://github.com/Greashun"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    Github
                  </a>
                </Box>
              </li>
              <li style={{ listStyleType: "none" }}>
                <Box m={1} p={1}>
                  <a
                    href="https://www.linkedin.com/in/vtse/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    Linkedin
                  </a>
                </Box>
              </li>
            </Grid>
          </ul>
        </Box>
      </div>
    </div>
  );
};

export default About;
