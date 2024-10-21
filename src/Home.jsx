import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CV from './assets/IT_ValentynTokariuk.pdf';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="home">
        <div className="hero" data-aos="fade-up">
            <h1>Hi, I'm Valentyn Tokariuk</h1>
            <h2>Beginning Web Developer and Data Management Spacialist</h2>
            <p>Welcome to my not-so-boring version of a CV</p>
            
            <a href="/projects" className="cta-btn" data-aos="fade-right">View My Projects</a>
            
            <a href={CV} className = "cta-btn" data-aos="fade-right" >Classic CV</a>
        </div>
        <div className="skills" data-aos="fade-up">
          <h2>Technologies I Work With</h2>
          <ul className="hard-skills">
            <li><b>Frontend</b>: React, HTML5, CSS3, JSX</li>
            <li><b>Backend</b>: Node.js, Python, Java, Bash</li>
            <li><b>Data Management</b>: SQL Server, MySQL, NAV</li>
            <li><b>Git & GitHub</b></li>
            <li><b>Frameworks</b>: FastAPI, React, EmailJS, AOS, React Router, Bootstrap</li>
            <li><b>Additional knowledge in</b>: Matlab, R, Linux OS</li>
            <li>Useful tools: Docker, Postman, Netlify, FastAPI, Google Cloud</li>
          </ul>
        </div>
        <div className="my-services-section" data-aos="fade-up">
          <div className="my-services">
            <h2>What I offer</h2>
            <ul>
              <li>Frontend Development</li>
              <li>Data Management</li>
              <li>Customer Support</li>
              <li>IT Support</li>
              <li>System Administration</li>
              <li>Backend Development</li>
              <li>Webpage Design</li>
              <li>Cloud Computing</li>
              <li>DevOps</li>
              <li>UI/UX Design</li>
              <li>Mobile Development</li>
            </ul>
            <a href="/contact" className="cta-btn" data-aos="fade-left">Contact Me</a>
          </div>
        </div>
        <div className="skills" data-aos="fade-up">  
          <h2>Languages I speak</h2>
          <ul className="languages">
            <li>English - fluent</li>
            <li>Ukrainian - native</li>
            <li>Polish - fluent</li>
            <li>Russian - fluent</li>
            <li>Romanian - basic</li>
          </ul>
          <h2>Soft skills</h2>
          <ul className="soft-skills">
            <li>Problem-Solving</li>
            <li>(Intercultural) Communication</li>
            <li>Adaptability</li>
            <li>Teamwork</li>
            <li>Time Management</li>
            <li>Critical Thinking</li>
            <li>Openness to Feedback</li>
          </ul>
          
        </div>
       
        
        {/* Education Section */}
        <div className="education" data-aos="fade-up">
          <h2>Education</h2>
          <ul className="education-list">
            <li>
              <h3>Storozhynets' Lyceum</h3>
              <p>Primary, Middle and Higher Secondary School with Mathematical Profile</p>
            </li>
            <li>
              <h3>West Pomeranian University of Technology</h3>
              <p>Bachelor of Computer Science (ongoing remote studies)</p>
            </li>
            <li>
              <h3>University of Malta</h3>
              <p>Computer Science (Exchange student in 2024)</p>
            </li>
          </ul>
        </div>

        {/* Work Experience Section */}
        <div className="experience" data-aos="fade-up">
          <h2>Work Experience</h2>
          <ul className="experience-list">
            <li>
              <h3>Website Development</h3>
              <p>Developed a personal portfolio website showcasing my projects, skills, and experiences. This project involved creating a visually appealing and responsive design using modern web technologies such as HTML, React, CSS, JSX, ViteJS, NodeJS, EmailJS and development via Netlify. The development process included building reusable components, implementing animations, managing state, and deploying the site using Netlify for seamless delivery. Focused on accessibility, mobile responsiveness, and providing a smooth user experience.</p>
              <p className='right-align large-margin'><b>2024</b></p>
              <p className='right-align'><i>Freelance</i></p>
            </li>
            <li>
              <h3>Master Data Specialist - Ossur</h3>
              <p>Was working in a team of experienced professionals, 
                developing impactful solutions for managing the 
                customers and vendors data.
                Got to experience and be a part of a lot of 
                processes inside of the corporation. Worked with Microsoft Navision, Basware, SQL Server,
                Microsoft Office.
                Developed impactful solutions for managing the customers and vendors data in CRM and SQL systems.
                Worked with large datasets, focused on customer data and analytics </p>
              <p className='right-align large-margin'><b>2023</b></p>
              <p className='right-align'><i>Szczecin</i></p>
            </li>
            <li>
              <h3>Airbnb Host and Real Estate Agent</h3>
              <p>Managed listings, guests, and market research for competitive pricing. Got to know the basics of hospitality, most common 
                needs  of the guests, financial expences while hosting 3 
                rooms in the apartment. Explored the real estate market to be competitive on 
                the platform, used multiple marketing tools and 
                techniques. 
                Communicated with a lot of guests before and during 
                their stay.</p>
              <p className='right-align large-margin'><b>2024</b></p>
              <p className='right-align'><i>"Simon Mamo REA" (Malta)</i></p>
            </li>
            <li>
              <h3>Waiter / Bartender</h3>
              <p>Gained interpersonal and service management skills while working in hospitality. 
                Got a lot of knowledge of preparing beverages, mixing cocktails and managing the bar correctly.
                Learned all of the aspects of serving the clients on a highest level and making sure their dine in the
                restaurant would be perfect.
                Learned how to manage the working space and make it as efficient as possible. Drastically improved every language I know.</p>
              <p className='right-align large-margin'><b>2019 - 2020 / 2024</b></p>
              <p className="right-align"><i>"Premier Hall" - Storozhynets' (Ukraine) / "Sphinx" - Szczecin (Poland) / "The Brew" (Malta), </i></p>
            </li>
            <li>
              <h3>Store Associate</h3>
              <p>The next part-time job after classes. Helped me develop the basic problem solving skills, gave the oportunity to work in a team and communicate with the clients, especially in a new country.<br /></p>
              <p className="right-align large-margin"><b>2020-2022</b></p>
              <p className="right-align"><i>"Silpo" - Chernivtsi (Ukraine) / "Lidl" - Szczecin (Poland)</i></p>
            </li>
            
            
            
            <li>
              <h3>Construction site worker</h3>
              <p>In 9th grade it seemed like a good way of getting extra money.<br /></p>
              <p className="right-align large-margin"><b>2019</b></p>
              <p className="right-align"><i>Chernivtsi (Ukraine)</i></p>
            </li>
          </ul>
        </div>
        {/* Hobbies and Interests Section */}
        <div className="hobbies-interests-section" data-aos="fade-up">
          <div className="hobbies">
            <h2>Hobbies</h2>
            <ul>
              <li>Billiards</li>
              <li>Table tennis</li>
              <li>Basketball</li>
              <li>Snorkeling</li>
              <li>Cycling</li>
              <li>Swimming</li>
              <li>Football</li>
              <li>Volleyball</li>
              <li>Chess</li>
              <li>Poker</li>
              <li>Ice skating</li>
              <li>Hiking</li>
              <li>Wild forest camping</li>
            </ul>
          </div>

          <div className="interests">
            <h2>Interests</h2>
            <ul>
              <li>Artificial Intelligence</li>
              <li>Astronomy</li>
              <li>Exploring different genres of music</li>
              <li>Car manufacturing industry</li>
              <li>Snooker tournaments</li>
              <li>Restaurant business</li>
              <li>Real estate market</li>
            </ul>
          </div>
        </div>
    </section>
  );
};

export default Home;
