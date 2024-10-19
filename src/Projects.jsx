import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import excelImage from './assets/Excel.png';
import excelImage2 from './assets/Excel2.png';
import excelImage3 from './assets/Excel3.png';
import NetSketchImage from './assets/NetSketch.png';
import NetSketchImage1 from './assets/NetSketch1.png';
import NetSketchImage2 from './assets/NetSketch2.png';
import NetSketchImage3 from './assets/NetSketch4.png';
import NetSketchProject from './assets/NetSketch.pdf';
import LineFollowingProject from './assets/Line-Following.pdf';
import robotImage from './assets/Robot.png';
import robotPresentation from './assets/Presentation.key'; 
import OrchectrationProject from './assets/OrchestrationReport.pdf';
import orchImage from './assets/orch.png';
import orchImage1 from './assets/orch1.png';
import orchImage2 from './assets/orch2.png';
import orchImage3 from './assets/orch3.png';
import netlify from './assets/netlify.png';
import netlify1 from './assets/netlify1.png';
import netlify2 from './assets/netlify3.png';
import netlify4 from './assets/netlify4.png';



const projects = [
  {
    title: 'Personal Portfolio Website Development and Deployment',
    description: (
      <>
        <strong>Description:</strong>
        <p>
          This project is my personal portfolio website, designed to showcase my work, projects, and skills as a software developer. It was developed as my first front-end project and successfully deployed on Netlify, with the goal of presenting my professional experience, achievements, and projects in a visually appealing and organized way.
        </p>
  
        <strong>Key Features:</strong>
        <ul>
          <li><strong>Multi-Page Website:</strong> Created a multi-page site featuring dedicated sections for an "About" page, "Projects" gallery, and "Contact" page, with consistent navigation and smooth transitions between pages.</li>
          <li><strong>Responsive Design:</strong> Implemented a responsive layout using modern CSS techniques, ensuring the website looks great on all devices, from desktops to smartphones.</li>
          <li><strong>Deployment to Netlify:</strong> Successfully deployed the website using Netlify, enabling live access and continuous deployment from the GitHub repository.</li>
          <li><strong>Interactive Animations:</strong> Integrated AOS (Animate On Scroll) to bring animations and dynamic behavior to page elements for a more engaging user experience.</li>
          <li><strong>Project Showcase:</strong> Featured project cards with expandable descriptions, technology tags, image galleries, and links to GitHub repositories for each project, providing visitors with detailed insights into each project.</li>
        </ul>
  
        <strong>Technologies Used:</strong>
        <ul>
          <li><strong>React:</strong> Used React as the core library to build reusable UI components and manage state efficiently.</li>
          <li><strong>CSS:</strong> Styled the website using custom CSS, with careful attention to typography, colors, and responsive elements to create a visually cohesive design.</li>
          <li><strong>React Router:</strong> Utilized React Router for client-side routing, ensuring smooth navigation across different pages without reloading the website.</li>
          <li><strong>Netlify:</strong> Leveraged Netlify for hosting and deploying the project, setting up a CI/CD pipeline to automatically publish changes pushed to GitHub.</li>
          <li><strong>AOS (Animate On Scroll):</strong> Implemented animations triggered during scrolling to create an interactive experience.</li>
        </ul>
  
        <strong>Challenges Overcome:</strong>
        <ul>
          <li><strong>Responsive Design Implementation:</strong> Developed a fully responsive layout using CSS media queries and flexible component design to ensure proper rendering on various devices and screen sizes.</li>
          <li><strong>Client-Side Routing:</strong> Utilized React Router to manage routes within the application, overcoming challenges related to preserving scroll positions and ensuring seamless navigation.</li>
          <li><strong>Continuous Deployment:</strong> Set up Netlify for automatic deployments from GitHub, addressing challenges like build failures and ensuring that assets load properly.</li>
        </ul>
  
        <strong>Future Enhancements:</strong>
        <ul>
          <li><strong>Blog Integration:</strong> Plan to add a blogging section to share my thoughts on technology and software development.</li>
          <li><strong>Enhanced Interactivity:</strong> Add more dynamic components and animations to improve the user experience and create a memorable website journey.</li>
          <li><strong>Testing:</strong> Implement automated tests to verify UI functionality and ensure reliability during further feature additions.</li>
        </ul>
  
        <strong>Project Impact:</strong>
        <p>
          This portfolio website serves as my first deployed front-end project, showcasing my learning journey in front-end development and deployment. It demonstrates my abilities in UI development, managing multi-page applications, and deploying applications with modern hosting solutions. This project also provides a central hub to share my projects with potential employers and collaborators.
        </p>
      </>
    ),
    images: [netlify, netlify1, netlify2, netlify4],
    technologies: ['React', 'CSS', 'Netlify', 'React Router', 'AOS'],
    github: 'https://github.com/ValentynTokariuk/Portfolio',
    liveDemo: 'https://valentyntokariuk.netlify.app/', 
  },
  {
    title: 'Cloud-Native Application Deployment Using Docker and Kubernetes',
    description: (
      <>
        <strong>Description:</strong>
        <p>
          This project demonstrates the deployment of a cloud-native application, specifically an online university course enrollment system, using Docker and Kubernetes technologies. The objective was to containerize the application and database components using Docker and then orchestrate these containers using Kubernetes to ensure scalability, reliability, and security.
        </p>

        <strong>Key Features:</strong>
        <ul>
          <li><strong>Docker Containerization:</strong> Utilized Docker to package the Enrollment application and PostgreSQL database into containers, ensuring consistent environments across development, testing, and production.</li>
          <li><strong>Kubernetes Orchestration:</strong> Deployed and managed these containers within a Kubernetes cluster, leveraging Kubernetes' powerful scheduling and load balancing capabilities to handle increased loads and ensure high availability.</li>
          <li><strong>FastAPI Integration:</strong> Developed a RESTful API using FastAPI, which not only provided a robust backend for handling the logic of course and student enrollments but also included automatic interactive API documentation using Swagger UI.</li>
          <li><strong>Persistent Storage:</strong> Configured Kubernetes Persistent Volumes (PVs) and Persistent Volume Claims (PVCs) to ensure data persistence across pod restarts and deployments.</li>
          <li><strong>Security Features:</strong> Planned and theoretically implemented security measures using an API gateway to secure sensitive endpoints and data transactions within the cluster.</li>
        </ul>

        <strong>Technologies Used:</strong>
        <ul>
          <li><strong>Docker:</strong> For creating isolated environments for application and database components, facilitating easy deployment and scaling.</li>
          <li><strong>Kubernetes:</strong> For automating deployment, scaling, and operations of application containers across clusters of hosts.</li>
          <li><strong>FastAPI:</strong> For building efficient and straightforward REST APIs with Python.</li>
          <li><strong>Minikube:</strong> For running a local Kubernetes cluster, ideal for development and testing.</li>
          <li><strong>Swagger UI:</strong> For interactive and automatic API documentation.</li>
          <li><strong>Python:</strong> Primary programming language used for backend development and scripting.</li>
        </ul>

        <strong>Challenges Overcome:</strong>
        <ul>
          <li><strong>Container Orchestration:</strong> Mastering Kubernetes configurations such as deployments, services, ConfigMaps, and secrets to ensure the application runs seamlessly in a microservices architecture.</li>
          <li><strong>Security Implementation:</strong> Addressing theoretical security challenges using an API gateway to protect against common vulnerabilities and threats in a cloud-native environment.</li>
          <li><strong>Persistent Data Management:</strong> Ensuring data persistence in a stateless environment provided by Kubernetes using Persistent Volumes and Claims.</li>
        </ul>

        <strong>Future Enhancements:</strong>
        <ul>
          <li><strong>CI/CD Integration:</strong> Implement continuous integration and deployment pipelines to streamline updates and deployment processes.</li>
          <li><strong>Security Enhancements:</strong> Implement practical API gateway solutions like Istio or Nginx for advanced traffic management and security.</li>
          <li><strong>Performance Monitoring:</strong> Integrate tools like Prometheus and Grafana for real-time monitoring and performance analytics.</li>
        </ul>

        <strong>Project Impact:</strong>
        <p>
          This project showcases the practical implementation of modern DevOps practices and tools, demonstrating an advanced understanding of cloud-native technologies. It serves as a foundation for building scalable, secure, and resilient applications, reflecting a deep commitment to quality and innovative software development practices. This project is a testament to the capability to design and manage complex cloud architectures and provides a robust template for future projects requiring high availability and security.
        </p>
      </>
    ),
    images: [orchImage, orchImage1, orchImage2, orchImage3], // Add an image representing the project
    technologies: ['Docker', 'Kubernetes', 'FastAPI', 'Minikube', 'Swagger UI', 'Python'],
    github: 'https://github.com/ValentynTokariuk/Orchestration',
    report: OrchectrationProject,
  },
  {
    title: 'NetSketch - Collaborative Whiteboard Application',
    description: (
      <>
        <strong>Project Summary:</strong>
        <p>Developed a real-time collaborative whiteboard application that allows multiple users to interact on a shared canvas over a network. Users can draw, chat, undo/redo actions, and change the canvas background in real-time, with seamless synchronization across all clients.</p>

        <strong>Key Features:</strong>
        <ul>
          <li><strong>Real-time Drawing Synchronization:</strong> Users can draw on a shared canvas, with updates immediately reflected on all connected clients.</li>
          <li><strong>Chat Functionality:</strong> A built-in chat feature allows users to communicate in real-time while collaborating on the canvas.</li>
          <li><strong>Undo/Redo Functionality:</strong> Users can undo or redo their drawing actions, ensuring flexible editing of the canvas.</li>
          <li><strong>Background Color Change:</strong> Users can change the background color of the canvas, with the update propagated across all connected clients.</li>
          <li><strong>Multi-Client Support:</strong> The server handles multiple client connections simultaneously, ensuring consistent interaction.</li>
        </ul>

        <strong>Techniques & Technologies:</strong>
        <ul>
          <li><strong>Network Programming:</strong> Implemented client-server architecture using TCP sockets to manage real-time communication between multiple clients and the server.</li>
          <li><strong>Concurrency Management:</strong> Employed multi-threading to handle multiple client connections concurrently, ensuring smooth performance under load.</li>
          <li><strong>Real-time Data Synchronization:</strong> Leveraged custom serialization and Java's Serializable interface to transmit data (drawing actions, chat messages, etc.) efficiently between clients and server.</li>
          <li><strong>Event-Driven Programming:</strong> Used event listeners to capture user interactions (mouse events for drawing, button clicks for chat and undo/redo actions).</li>
          <li><strong>GUI Development:</strong> Created an intuitive user interface using Java Swing for drawing, chat, and toolbar actions, including custom tools like color pickers and size adjustments.</li>
          <li><strong>State Management:</strong> Managed the canvas's state on the server side, ensuring consistency across all connected clients.</li>
          <li><strong>Error Handling & Debugging:</strong> Implemented comprehensive error handling and logging to track and resolve issues related to network communication, concurrency, and user input.</li>
        </ul>
      </>
    ),
    images: [NetSketchImage, NetSketchImage1, NetSketchImage2, NetSketchImage3], // Single image
    technologies: ['Java', 'Swing', 'Multithreading'],
    report: NetSketchProject,
    github: 'https://github.com/ValentynTokariuk/NetSketch',
    
  },
  {
    title: 'Line-Following Robot Using Arduino',
    description: (
      <>
        <strong>Description:</strong>
        <p>For this project, I developed a line-following robot using an Arduino microcontroller and infrared (IR) sensors. The robot is designed to autonomously follow a black line on a white surface by continuously adjusting its direction based on real-time sensor feedback. It utilizes three IR sensors positioned on the front: one on the left, one in the middle, and one on the right. These sensors detect the contrast between the black line and the white surface, allowing the robot to make directional adjustments to stay on track.</p>

        <strong>Key Features:</strong>
        <ul>
          <li><strong>Proportional Line Following:</strong> The robot adjusts its speed and direction depending on which sensors detect the line. If the left or right sensor detects the line, the robot adjusts by turning slightly or sharply in that direction. If the middle sensor detects the line, the robot moves forward.</li>
          <li><strong>Line Search Mechanism:</strong> In the event that all sensors lose track of the line, the robot enters a search mode where it spins in place until it reacquires the line.</li>
          <li><strong>Smooth Movement:</strong> The robot dynamically adjusts its turning speed based on sensor input, allowing for smooth and accurate tracking with minimal erratic movements.</li>
        </ul>

        <strong>This Project Demonstrates My Skills In:</strong>
        <ul>
          <li><strong>Embedded Systems Programming:</strong> Using the Arduino IDE, I wrote custom code that manages sensor input and motor control.</li>
          <li><strong>Sensor Integration:</strong> By carefully calibrating the IR sensors, I ensured reliable detection of the line under various lighting conditions.</li>
          <li><strong>Motor Control:</strong> I controlled the robot’s motors using PWM (Pulse Width Modulation), allowing for precise speed adjustments.</li>
        </ul>

        <p>This project showcases my ability to design and implement autonomous systems, combining hardware (sensors, motors) and software to solve a practical robotics challenge.</p>
      </>
    ),
    images: [robotImage], // Add the image for the robot
    technologies: ['Arduino', 'C++', 'IR Sensors', 'PWM'],
    report: LineFollowingProject,
    github: 'https://github.com/ValentynTokariuk/LineFollowingRobot',
    keynote: robotPresentation,
  },
  {
    title: 'Custom Spreadsheet Application with Formula Support and Data Visualization',
    description: (
      <>
        <strong>Description:</strong>
        <p>This project is a custom-built spreadsheet application developed using Python and PyQt5, featuring core functionality similar to Microsoft Excel. It provides users with the ability to manage tabular data, perform calculations using formulas, visualize data with charts, and perform various data manipulation tasks. The application is designed to be user-friendly while offering flexibility for advanced use cases.</p>

        <strong>Key Features:</strong>
        <ul>
          <li><strong>Spreadsheet Functionality:</strong> Supports adding and editing cells, rows, and columns with the ability to sort and filter data.</li>
          <li><strong>Formula Bar:</strong> Users can input formulas (e.g., <code>=SUM(A1:B2)</code> or arithmetic calculations like <code>=A1+B2</code>). The formulas are stored and can be edited later, and results are automatically updated in the selected cells.</li>
          <li><strong>Data Visualization:</strong> Provides real-time bar chart generation based on selected columns, allowing users to visualize their data directly within the app.</li>
          <li><strong>Undo/Redo Functionality:</strong> Users can easily revert changes with undo/redo actions, preserving the previous states of the spreadsheet.</li>
          <li><strong>CSV File Import/Export:</strong> Data can be imported from or exported to CSV files, making it easy to transfer data between this application and other platforms.</li>
          <li><strong>Cell Formatting:</strong> Supports basic text formatting such as bold, italic, font changes, and cell alignment (left, center, right).</li>
          <li><strong>Context Menu Actions:</strong> Users can quickly perform operations such as copy, cut, paste, and font color changes through an intuitive context menu.</li>
          <li><strong>Automatic Column Width Adjustment:</strong> Columns are auto-adjusted based on their content to ensure a clean and readable layout.</li>
        </ul>

        <strong>Technology Stack:</strong>
        <ul>
          <li><strong>Python:</strong> Core programming language for logic and data processing.</li>
          <li><strong>PyQt5:</strong> Used for building the GUI components and managing user interactions.</li>
          <li><strong>Matplotlib:</strong> Integrated for data visualization, enabling users to generate charts and graphs based on the table data.</li>
          <li><strong>Pandas:</strong> Used for CSV file handling, making it easy to import/export spreadsheet data.</li>
        </ul>

        <strong>Learning Outcomes:</strong>
        <ul>
          <li>Developed proficiency in PyQt5 for creating interactive desktop applications.</li>
          <li>Implemented custom formula parsing and evaluation within a table widget.</li>
          <li>Gained experience in handling CSV data and integrating graphical plots with <code>matplotlib</code>.</li>
          <li>Enhanced understanding of user interface design and desktop application workflows.</li>
        </ul>

        <p>This project demonstrates my ability to build complex desktop applications with user-friendly interfaces and advanced functionality such as formula management, data visualization, and file handling.</p>
      </>
    ), 
    images: [excelImage, excelImage2, excelImage3], // Relative paths to images
    technologies: ['Python', 'Matlab'],
    github: 'https://github.com/ValentynTokariuk/PyProj',
  },
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProjectImages, setCurrentProjectImages] = useState([]);
  const [showMoreIndex, setShowMoreIndex] = useState(null); // Track which project is expanded

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleImageClick = (images, index) => {
    setCurrentProjectImages(images);  // Set the images array for modal
    setCurrentImageIndex(index);  // Open modal with selected image index
    setSelectedImage(images[index]);
  };

  const closeModal = () => {
    setSelectedImage(null); // Close modal
  };

  const showNextImage = (e) => {
    e.stopPropagation(); // Stop modal from closing when clicking next
    const nextIndex = (currentImageIndex + 1) % currentProjectImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(currentProjectImages[nextIndex]);
  };

  const showPreviousImage = (e) => {
    e.stopPropagation(); // Stop modal from closing when clicking previous
    const previousIndex =
      (currentImageIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
    setCurrentImageIndex(previousIndex);
    setSelectedImage(currentProjectImages[previousIndex]);
  };

  // Toggle showing full description
  const toggleShowMore = (index) => {
    setShowMoreIndex(showMoreIndex === index ? null : index); // Toggle expansion
  };

  return (
    <section id="projects">
      <h1 className="projects-title" data-aos="fade-up">My Projects</h1>
      <div className="projects-container" data-aos="fade-up">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="image-container">
              {project.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={project.title}
                  className={`project-image project-image-${imgIndex}`}
                  style={{ opacity: imgIndex === 0 ? 1 : 0 }} // Show only the first image initially
                  onClick={() => handleImageClick(project.images, imgIndex)} // Click to open modal
                />
              ))}
            </div>
            <h2>{project.title}</h2>

            {/* Description with smooth height transition */}
            <div
              className="description-container"
              style={{
                maxHeight: showMoreIndex === index ? '500px' : '60px', // Adjust the height on toggle
                overflow: 'hidden',
                transition: 'max-height 0.5s ease',
              }}
            >
              <p>{project.description}</p>
            </div>

            <button className="read-more-btn" onClick={() => toggleShowMore(index)}>
              {showMoreIndex === index ? 'Show Less' : 'Read More'}
            </button>

            <ul className="technologies">
              {project.technologies.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              )}
              {project.report && (
                <a href={project.report} target="_blank" rel="noopener noreferrer">View Report</a>
              )}
              {project.keynote && (
                <a href={project.keynote} target="_blank" rel="noopener noreferrer">Download Presentation</a>
              )}

            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Full Screen" />
          {/* Previous and Next buttons for rotating images */}
          {currentProjectImages.length > 1 && (
            <>
              <button className="prev" onClick={showPreviousImage}>&#10094;</button>
              <button className="next" onClick={showNextImage}>&#10095;</button>
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default Projects;
