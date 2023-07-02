import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {GiDiploma} from 'react-icons/gi'
import {FaRunning} from 'react-icons/fa'
import {GiLaptop} from 'react-icons/gi'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="#" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaRunning className='about_icon'/>
              <h5>Interests</h5>
              <small>Working out</small>
              <br />
              <small>Building Computers</small>
              <br />
              <small>Software</small>
              <br />
              <small>Podcasts</small>
              <br />
              <small>Lofi-Music</small>
            </article>

            <article className='about_card'>
              <GiDiploma className='about_icon'/>
              <h5>Education</h5>
              <small>Recent Graduate from Coding Dojo's Coding Bootcamp <br />- Full Stack Software Development</small>
            </article>

            <article className='about_card'>
              <GiLaptop className='about_icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
            Hello once again, I appreciate you took some time to go through my personal portfolio . I am 27 years old and a Fullstack developer just starting out. I am currently making a career transition from the beverage industry which I had 9 years of experinece in, into the tech industry. I also recently just graduated from Coding Dojo's Bootcamp. I've always had an itch for tech whether it was building my own computers or just a great curiosity of how tech works ! I know this is just the beginning of a long venture with many challanges and opportunities along the way just excited to be starting it and learning a lot along the way ! Feel free to message me down below if you have any questions and let me know what you think . Thanks for stopping by !
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About