import React from "react";
import { Element } from "react-scroll";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Projects.css";

const Projects = () => {
  return (
    <Element name="projects" className="projects">
      <div className="projects__container">
        <h1>PROJECTS</h1>
        {/* 1ST PROJECT */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <h1>
                <b> BOOKS STORE APP </b>
              </h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="project__one">
            <Typography>
              <h3>
                this is a books store app where you can READ,DELETE,UPDATE AND
                CREATE books. the technologies used in this projects is
                <ul>
                  <li>React</li>
                  <li>Node js</li>
                  <li>Express js</li>
                  <li>Mongodb/ Mongoose</li>
                </ul>
              </h3>
            </Typography>
            <Typography>
              <h1>LINKS TO REFER PROJECTS</h1>
            </Typography>
            <b> NETLIFY </b>
            <Button
              href="https://crudbooksstoreapp.netlify.app/"
              target="_blank"
            >
              View project
            </Button>
            &nbsp; &nbsp; &nbsp; <b> GITHUB: </b> &nbsp;
            <Button
              href="https://github.com/ganeshkalyan7/mernStack_Bookapp_frontEnd"
              target="_blank"
            >
              FrontEnd_Source_code
            </Button>
            &nbsp; &nbsp; &nbsp;
            <Button
              href="https://github.com/ganeshkalyan7/mernStack_bookapp_backend"
              target="_blank"
            >
              BackEnd_Source_code
            </Button>
          </AccordionDetails>
        </Accordion>
        {/* 2ND PROJECT */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <h1>
                <b> CONTACT MANAGEMENT SYSTEM</b>
              </h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="project__one">
            <Typography>
              <h3>
                This is a advance is user authentication project! where a person
                can login and signup to View details of employees and can CREATE
                a new employee and DELETE a employee in the contact form. this
                project is usefull for a company to store their employees
                details of their particular domain , technologies used for this
                projects
                <ul>
                  <li>React</li>
                  <li>Node js</li>
                  <li>Express js/ JWT</li>
                  <li>Mongodb/ Mongoose</li>
                </ul>
              </h3>
            </Typography>
            <Typography>
              <h1>LINKS TO REFER PROJECTS</h1>
            </Typography>
            <b> NETLIFY </b> :
            <Button
              href="https://employeecontactmanagement.netlify.app/"
              target="_blank"
            >
              View project
            </Button>
            &nbsp; &nbsp; &nbsp; <b> GITHUB: </b> &nbsp;
            <Button
              href="https://github.com/ganeshkalyan7/EmployeContactManagement-frontend"
              target="_blank"
            >
              FrontEnd_Source_code
            </Button>
            &nbsp; &nbsp; &nbsp;
            <Button
              href="https://github.com/ganeshkalyan7/Employee_Contact_Management-backend"
              target="_blank"
            >
              BackEnd_Source_code
            </Button>
          </AccordionDetails>
        </Accordion>
        {/* 3RD PROJECT */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <h1>
                <b> WHATSAPP_CLONE</b>
              </h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="project__one">
            <Typography>
              <h3>
                This is a WhatsApp clone project a real time chat application
                with user authentication. for this project i have used a real
                time DataBase that is PUSHER.and i used FIREBASE for
                GOOGLE_Authentication, technologies used for this projects
                <ul>
                  <li>React</li>
                  <li>Node js</li>
                  <li>Express js</li>
                  <li>FireBase</li>
                  <li>Mongodb/ Mongoose</li>
                  <li>Pusher-js</li>
                </ul>
              </h3>
            </Typography>
            <Typography>
              <h1>LINKS TO REFER PROJECTS</h1>
            </Typography>
            <b> NETLIFY </b>
            <Button
              href="https://whatsappclonesite.netlify.app/"
              target="_blank"
            >
              View project
            </Button>
            &nbsp; &nbsp; &nbsp; <b> GITHUB: </b> &nbsp;
            <Button
              href="https://github.com/ganeshkalyan7/WhatsAppClone_FrontEnd"
              target="_blank"
            >
              FrontEnd_Source_code
            </Button>
            &nbsp; &nbsp; &nbsp;
            <Button
              href="https://github.com/ganeshkalyan7/WhatsApp_clone_backend"
              target="_blank"
            >
              BackEnd_Source_code
            </Button>
          </AccordionDetails>
        </Accordion>

        {/* 4RTH PROJECT */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <h1>
                <b> GUESS MY NUMBER </b>
              </h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="project__one">
            <Typography>
              <h3>
                This is small game project that is Guess My Number! which is
                built using javascript . where there will be random number
                generated in the backside and we have enter few numbers to find
                the correct answer
                <ul>
                  <li>Javascript</li>
                </ul>
              </h3>
            </Typography>
            <Typography>
              <h1>LINKS TO REFER PROJECTS</h1>
            </Typography>
            <b> NETLIFY </b>
            <Button href="https://ganeshcristiano.netlify.app/" target="_blank">
              View project
            </Button>
            &nbsp; &nbsp; &nbsp; <b> GITHUB: </b> &nbsp;
            <Button
              href="https://github.com/ganeshkalyan7/Gusse_Number"
              target="_blank"
            >
              FrontEnd_Code
            </Button>
            &nbsp; &nbsp;
          </AccordionDetails>
        </Accordion>
      </div>
    </Element>
  );
};

export default Projects;
