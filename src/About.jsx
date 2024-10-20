import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'; // Import the CSS for styling

import photo1 from './assets/Me1.png'; // Replace with your own images
import photo2 from './assets/Me2.png';
import photo3 from './assets/Me3.png';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with repeated animations
  }, []);

  return (
    <section id="about-me" class="about-section">
  <div class="about-block about-left">
    <img src={photo1} alt="My childhood photo" class="about-photo" />
    <div class="about-text" data-aos="fade-right">
      <h2>Early Life</h2>
      <p>I was born in Chernivtsi, Ukraine, a vibrant city that set the stage for my interests and early development. My childhood was filled with a mix of academic and extracurricular activities—I went to school early and spent my high school years exploring a range of passions. I attended classes in dancing, piano, and guitar, as well as participated in all of the kinds of outdoor sports. My favorite pastime, however, was playing billiards with my father, which remains one of my cherished memories.</p>
    </div>
  </div>

  <div class="about-block about-right">
    <img src={photo2} alt="Computer science journey" class="about-photo" />
    <div class="about-text" data-aos="fade-left">
      <h2>Move to Poland</h2>
      <p>In middle school, I realized my fascination for computer science. This discovery inspired me to learn Polish and, at the age of 17, move to Poland to pursue higher education in computer science. I initially studied in Lublin, but found myself struggling to adjust; I couldn't find a job to sustain myself, and my Polish wasn't yet strong enough to secure a good position. Moreover, the university wasn't offering what I had hoped for, so I decided to move to Szczecin.</p>
    </div>
  </div>

  <div class="about-block about-left">
    <img src={photo3} alt="Malta exchange experience" class="about-photo" />
    <div class="about-text" data-aos="fade-right">
      <h2>Szczecin and Malta</h2>
      <p>Szczecin marked a turning point. I found friends, strengthened my skills, and gained valuable work experience—especially during my time as a Master Data Specialist. This role helped me understand data management at a deeper level and become an effective member of a corporate team. In early 2024, I took another leap by joining the University of Malta as an exchange student. I fell in love with Malta's culture and lifestyle, which prompted me to switch my studies to part-time and stay on the island, becoming self-employed as a real estate agent.</p>
    </div>
  </div>
</section>

  );
};

export default About;
