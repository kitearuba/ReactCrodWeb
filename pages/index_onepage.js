import dynamic from "next/dynamic";
import { useEffect } from "react";
import { CodingSkills } from "../src/components/Skills";
import Testimonials from "../src/components/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
import { createSkillsDot, dotResize } from "../src/utils";
const ItemIsotope = dynamic(() => import("../src/components/ItemIsotope"), {
  ssr: false,
});
const IndexOnePage = () => {
  useEffect(() => {
    return () => {
      dotResize();
      setTimeout(createSkillsDot, 1000);
    };
  }, []);

  return (
    <Layout noHeader>
      <header className="header">
        <div className="head-top">
          {/* menu button */}
          <a href="#" className="menu-btn">
            <span />
          </a>
          {/* logo */}
          <div className="logo hover-masks-logo">
            <a href="#">
              <span className="mask-lnk">
                Christian <strong>Rodriguez</strong>
              </span>
              <span className="mask-lnk mask-lnk-hover">
                <a href="cv/ChristianRodriguezCV.pdf" 
                  download >Download<strong>CV</strong>
                </a>
              </span>
            </a>
          </div>
          {/* top menu */}
          <div className="top-menu hover-masks">
            <div className="top-menu-nav">
              <div className="menu-topmenu-container">
                <ul className="menu">
                  <li className="menu-item current-menu-item">
                    <a href="#section-started">Home</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-about">Resume</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-portfolio">Works</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-contacts">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Wrapper */}
      <div className="wrapper">
        {/* Section Started */}
        <div className="section started" id="section-started">
          {/* background */}
          <div
            className="video-bg jarallax"
            style={{ backgroundImage: "url(images/started_image_p.jpg)" }}
          >
            <div className="video-bg-mask" />
            <div className="video-bg-texture" id="grained_container" />
          </div>
          {/* started content */}
          <div className="centrize full-width">
            <div className="vertical-center">
              <div className="started-content">
                <h1 className="h-title">
                  Hello, I’m <strong>Christian Rodriguez</strong> <br />
                  Front-end Developer Based in Barcelona.
                </h1>
                <TypingAnimation extraClassName={"typed-subtitle"} />
                <span className="typed-subtitle" />
              </div>
            </div>
          </div>
          {/* mosue button */}
          <a href="#" className="mouse_btn" style={{ display: "none" }}>
            <span className="icon fas fa-chevron-down" />
          </a>
        </div>
        {/* Section About */}
        <div className="section about" id="section-about">
          {/* title */}
          <div className="title">
            <div className="title_inner">About</div>
          </div>
          <div className="content content-box">
            {/* image */}
            <div className="image">
              <img src="images/man_r.jpg" alt="Christian Rodriguez" />
            </div>
            {/* desc */}
            <div className="desc">
              <p>
              Greetings! I'm Christian Rodriguez, a Barcelona-based web designer with a 
              strong foundation in web development, Java, and WordPress. My recent 
              coursework reflects my commitment to staying abreast of technology trends, 
              and I'm expanding my skills in languages such as C, Python, and React. 
              Fueled by a passion for innovation and problem-solving, I'm eager to 
              collaborate on cutting-edge tech projects. My drive, adaptability, and 
              pursuit of excellence position me as a standout candidate ready to make a 
              significant impact in the world of technology. Let's discuss our unique 
              ideas and create something extraordinary!
              </p>
              <div className="info-list">
                <ul>
                  <li>
                    <strong>Residence:</strong> Spain
                  </li>
                  <li>
                    <strong>Freelance:</strong> Available
                  </li>
                  <li>
                    <strong>Address:</strong> Barcelona
                  </li>
                  <li>
                    <strong>Phone:</strong> +34 640 577 329
                  </li>
                  <li>
                    <strong>E-mail:</strong> christian@crod.io
                  </li>
                </ul>
              </div>
              <div className="bts">
                <a href="cv/ChristianRodriguezCV.pdf" download className="btn hover-animated">
                  <span className="circle" />
                  <span className="lnk">Download CV</span>
                </a>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        {/* Section Service */}
        <div className="section service" id="section-services">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Services</div>
            </div>
            {/* service items */}
            <div className="service-items">
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-code" />
                  </div>
                  <div className="name">Web Development</div>
                  <div className="text">
                  Craft a contemporary, mobile-responsive website designed to 
                  elevate your marketing efforts and reach a broader audience.
                  </div>
                </div>
              </div>
              {/* service items 
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-music" />
                  </div>
                  <div className="name">Music Writing</div>
                  <div className="text">
                    Music copying, writing, creating, transcription, arranging
                    and services.
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-ad" />
                  </div>
                  <div className="name">Advetising</div>
                  <div className="text">
                    Advertising services include television, radio, print, mail,
                    and web apps.
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-gamepad" />
                  </div>
                  <div className="name">Game Development</div>
                  <div className="text">
                    Developing memorable and unique mobile android, ios and
                    video games.
                  </div>
                </div>
              </div>              
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-camera" />
                  </div>
                  <div className="name">Photography</div>
                  <div className="text">
                    Our in-house photography services team made up of
                    professional photographers.
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-mobile-alt" />
                  </div>
                  <div className="name">Android Application</div>
                  <div className="text">
                    Games, playing music, handle network transactions,
                    interacting content etc.
                  </div>
                </div>
              </div>
               */}
            </div>           
            <div className="clear" />
          </div>
        </div>
        
        {/* Section Resume */}
        <div className="section resume" id="section-history">
          <div className="content">
            <div className="cols">
              <div className="col col-md">
                {/* title */}
                <div className="title">
                  <div className="title_inner">Experience</div>
                </div>
                {/* resume items */}
                <div className="resume-items">
                  <div className="resume-item content-box">
                    <div className="date">10/2023 - 11/2023</div>
                    <div className="name"> Web Development Internship - Advances in Surgery Channel SL</div>
                    <div className="text">
                    Optimized and maintained company website using HTML, CSS, JS, 
                    Postman API, and CMS. Co-developed a responsive search page, 
                    efficiently querying the database to deliver relevant results 
                    based on user-entered keywords.
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="date">10/2022 - 11/2022</div>
                    <div className="name">Web Development and Maintenance 
                    Internship - Logic Solutions Consulting SL.
                    </div>
                    <div className="text">
                    Maintained and developed webpages using WordPress and React, 
                    ensuring their optimal performance and functionality. Generated 
                    tailored content upon customer requests and crafted logos using 
                    Adobe Photoshop.
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="date">04/2018 - 02/2022</div>
                    <div className="name"> Tier 2 Software Technical Support - WebHelp SL.</div>
                    <div className="text">
                    Deliver expert software technical support to assist customers 
                    experiencing issues with their supported computers and smart 
                    devices.
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="date">09/2014 - 12/2016</div>
                    <div className="name"> Team Leader - Scuba Caribe/RIU Resorts</div>
                    <div className="text">
                    Oversee and coordinate watersports activities at Rui Palace 
                    Antillas and Riu Palace Aruba, encompassing comprehensive 
                    managerial responsibilities such as scheduling, hiring, 
                    inventory control, report generation, training, and day-to-day 
                    operational activities.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-md">
                {/* title */}
                <div className="title">
                  <div className="title_inner">Education</div>
                </div>
                {/* resume items */}
                <div className="resume-items">
                  <div className="resume-item content-box">
                    <div className="date">02/2023 - 11/2023</div>
                    <div className="name">Computer Systems Programming (IFCT0609) 
                    <br />STUCOM - Barcelona.</div>
                    <div className="text">
                      
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="date">02/2022 - 11/2022</div>
                    <div className="name">Website Development (IFCD0110)
                    <br />STUCOM - Barcelona.</div>
                    <div className="text">
                      
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="date">08/1998 - 06/1999</div>
                    <div className="name">General Studies
                    <br /> San Jose State University - San Jose</div>
                    <div className="text">
                    Engaged in a diverse one-year General Studies program, fostering 
                    a broad academic foundation and cultivating a versatile skill set.
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="date">08/1992 - 06/1994</div>
                    <div className="name">Hotel Management 
                    <br /> Aruba Hotel School - Aruba, Dutch Caribbean
                    </div>
                    <div className="text">
                    Completed a comprehensive two-year Hotel Management program, 
                    including internships across key departments for hands-on 
                    experience and a well-rounded understanding of the industry.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Design Skills */}
        <div className="section skills" id="section-skills">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Design Skills</div>
            </div>
            {/* skills items */}
            <div className="skills percent content-box">
              <ul>
                <li>
                  <div className="name">Web Design</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "90%" }}>
                      <span className="percent">90%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Illustrations</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "70%" }}>
                      <span className="percent">70%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Photoshop</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "90%" }}>
                      <span className="percent">90%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Graphic Design</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "80%" }}>
                      <span className="percent">80%</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Section Languages Skills */}
        <div className="section skills" id="section-skills-lang">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Languages Skills</div>
            </div>
            {/* skills items */}
            <div className="skills percent content-box">
              <ul>
                <li>
                  <div className="name">English</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "100%" }}>
                      <span className="percent">Native</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Spanish</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "100%" }}>
                      <span className="percent">Native</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Dutch</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "70%" }}>
                      <span className="percent">70%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Papiamento</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "70%" }}>
                      <span className="percent">70%</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Section Coding Skills */}
        <CodingSkills />
        {/* Section Knowladge Skills */}
        <div className="section skills" id="section-skills-know">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Knowledge</div>
            </div>
            {/* skills */}
            <div className="skills list content-box">
              <ul>
                <li>
                  <div className="name">Git & GitHub</div>
                </li>
                <li>
                  <div className="name">Website hosting</div>
                </li>
                <li>
                  <div className="name">Create logo design</div>
                </li>
                <li>
                  <div className="name">Design for print</div>
                </li>
                <li>
                  <div className="name">Modern and mobile-ready</div>
                </li>
                <li>
                  <div className="name">Graphics and animations</div>
                </li>
                <li>
                  <div className="name">Search engine marketing</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Section Interests */}
        <div className="section service" id="section-interests">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Interests</div>
            </div>
            {/* interests items */}
            <div className="skills list content-box">
              <ul>
                <li>
                  <div className="name">Snowboard</div>
                </li>
                <li>
                  <div className="name">Ski</div>
                </li>
                <li>
                  <div className="name">Windsurf</div>
                </li>
                <li>
                  <div className="name">Kitesurf</div>
                </li>
                <li>
                  <div className="name">Scuba Dive</div>
                </li>
                <li>
                  <div className="name">Gardening</div>
                </li>
                <li>
                  <div className="name">Travel</div>
                </li>
                <li>
                  <div className="name">Cook</div>
                </li>
                <li>
                  <div className="name">DIY</div>
                </li>
                <li>
                  <div className="name">Learn</div>
                </li>
                <li>
                  <div className="name">Technology</div>
                </li>
                <li>
                  <div className="name">Current Events</div>
                </li>
              </ul>
            </div>
            <div className="clear" />
          </div>
        </div>    
        {/* Section Clients */}
        <div className="section clients" id="section-clients">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Clients</div>
            </div>
            {/* clients items */}
            <div className="content-box">
              <div className="clients-items">
                <div className="clients-col">
                  <div className="clients-item">
                    <a target="_blank" rel="noreferrer" href="#">
                      <img src="images/client1.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="clients-col">
                  <div className="clients-item">
                    <a target="_blank" rel="noreferrer" href="#">
                      <img src="images/client3.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="clients-col">
                  <div className="clients-item">
                    <a target="_blank" rel="noreferrer" href="#">
                      <img src="images/client2.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="clients-col">
                  <div className="clients-item">
                    <a target="_blank" rel="noreferrer" href="#">
                      <img src="images/client4.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>        
        {/* Works */}
        <div className="section works" id="section-portfolio">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Portfolio</div>
            </div>
            <ItemIsotope />
            <div className="clear" />
          </div>
        </div>
        {/* Section Contacts Info */}
        <div className="section contacts" id="section-contacts">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Contacts</div>
            </div>
            {/* contacts items */}
            <div className="service-items">
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-phone" />
                  </div>
                  <div className="name">Phone</div>
                  <div className="text"> <a href="tel:+34640577329">+34 640 577 329</a> 
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-envelope" />
                  </div>
                  <div className="name">Email</div>
                  <div className="text">
                    <a href="mailto:christian@crod.io">
                    christian@crod.io
                    </a>
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-map-marker-alt" />
                  </div>
                  <div className="name">Address</div>
                  <div className="text">Calle Valencia 337, 08009 Barcelona</div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-user-tie" />
                  </div>
                  <div className="name">Freelance Available</div>
                  <div className="text">I am available for Freelance hire</div>
                </div>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        
        {/* Section Started */}
        <div className="section started section-title" id="section-map">
          {/* background */}
          <div className="video-bg">
            <div className="map" id="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23943.37408029119!2d2.1486641576640175!3d41.397505470725605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2ebdbddc785%3A0xaffdb2bd688fa14e!2sC%2F%20de%20Val%C3%A8ncia%2C%20337%2C%2008009%20Barcelona!5e0!3m2!1sen!2ses!4v1701654774315!5m2!1sen!2ses"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen=""
                loading="lazy">
                </iframe>
            </div>
            <div className="video-bg-mask" />
            <div className="video-bg-texture" id="grained_container" />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default IndexOnePage;
