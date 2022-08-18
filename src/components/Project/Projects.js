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
                <b> Books Store App</b>
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
              variant="outlined"
              href="https://crudbooksstoreapp.netlify.app/"
              target="_blank"
            >
              View project
            </Button>
            &nbsp; &nbsp; &nbsp; <b> GITHUB: </b> &nbsp;
            <Button
              variant="outlined"
              href="https://github.com/ganeshkalyan7/mernStack_Bookapp_frontEnd"
              target="_blank"
            >
              FrontEnd_Source_code
            </Button>
            &nbsp; &nbsp; &nbsp;
            <Button
              variant="outlined"
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
                <b> Contact Management System</b>
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
              variant="outlined"
              href="https://employe-contact-management-frontend.vercel.app/"
              target="_blank"
            >
              View project
            </Button>
            &nbsp; &nbsp; &nbsp; <b> GITHUB: </b> &nbsp;
            <Button
              variant="outlined"
              href="https://github.com/ganeshkalyan7/EmployeContactManagement-frontend"
              target="_blank"
            >
              FrontEnd_Source_code
            </Button>
            &nbsp; &nbsp; &nbsp;
            <Button
              variant="outlined"
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
                <b> WhatsApp_Clone</b>
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
              variant="outlined"
              href="https://mern-whatsapp-38f36.firebaseapp.com/"
              target="_blank"
            >
              View project
            </Button>
            &nbsp; &nbsp; &nbsp; <b> GITHUB: </b> &nbsp;
            <Button
              variant="outlined"
              href="https://github.com/ganeshkalyan7/WhatsAppClone_FrontEnd"
              target="_blank"
            >
              FrontEnd_Source_code
            </Button>
            &nbsp; &nbsp; &nbsp;
            <Button
              variant="outlined"
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
                <b> Guess My Number</b>
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
            <Button
              variant="outlined"
              href="https://ganeshcristiano.netlify.app/"
              target="_blank"
            >
              View project
            </Button>
            &nbsp; &nbsp; &nbsp; <b> GITHUB: </b> &nbsp;
            <Button
              variant="outlined"
              href="https://github.com/ganeshkalyan7/Gusse_Number"
              target="_blank"
            >
              FrontEnd_Code
            </Button>
            &nbsp; &nbsp;
          </AccordionDetails>
        </Accordion>
        {/* 4th project */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <h1>
                <b> travel review </b>
              </h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="project__one">
            <Typography>
              <h3>
                this ia travel log project where a person can review the place,
                and to review the place, first zoom the location and choose the
                location and than double click on the location and you will get
                a review popup and fillup details. and to view the review form
                click on the location icon .
                <ul>
                  <li>React js</li>
                  <li>Node js </li>
                  <li>Express</li>
                  <li>Mongodb</li>
                  <li>Mapbox</li>
                </ul>
              </h3>
            </Typography>
            <Typography>
              <h1>LINKS TO REFER PROJECTS</h1>
            </Typography>
            <b> NETLIFY </b>
            <Button
              variant="outlined"
              href="https://travellogreview.netlify.app/"
              target="_blank"
            >
              View project
            </Button>
            &nbsp; &nbsp; &nbsp; <b> GITHUB: </b> &nbsp;
            <Button
              variant="outlined"
              href="https://github.com/ganeshkalyan7/travell_experiance_frontend"
              target="_blank"
            >
              FrontEnd_Code
            </Button>
            &nbsp; &nbsp; &nbsp;
            <Button
              variant="outlined"
              href="https://github.com/ganeshkalyan7/travell_experiance_backend"
            >
              BackEnd_Source_code
            </Button>
          </AccordionDetails>
        </Accordion>

        {/* 5th project */}

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <h1>
                <b> e-commerce web site </b>
              </h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="project__one">
            <Typography>
              <h3>
                this is simple e-commerce web site where users can login and
                resgister for this account. once after placing the order user
                can view the order history and can pay for the product using
                paypal and stipe account
                <ul>
                  <li>React js</li>
                  <li>Node js </li>
                  <li>Express</li>
                  <li>Mongodb</li>
                  <li>developer paypal</li>
                </ul>
              </h3>
            </Typography>
            <Typography>
              <h1>LINKS TO REFER PROJECTS</h1>
            </Typography>
            <b> NETLIFY </b>
            <Button
              variant="outlined"
              href="https://amazon-clone-front-end.vercel.app/"
              target="_blank"
            >
              View project
            </Button>
            &nbsp; &nbsp; &nbsp; <b> GITHUB: </b> &nbsp;
            <Button
              variant="outlined"
              href="https://github.com/ganeshkalyan7/amazonClone__FrontEnd"
              target="_blank"
            >
              FrontEnd_Code
            </Button>
            &nbsp; &nbsp; &nbsp;
            <Button
              variant="outlined"
              href="https://github.com/ganeshkalyan7/amazoneCloneBackend"
            >
              BackEnd_Source_code
            </Button>
          </AccordionDetails>
        </Accordion>
      </div>
    </Element>
  );
};

export default Projects;
