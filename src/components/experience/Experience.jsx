import React from 'react'
import './experience.css'
import {FiCheckSquare} from'react-icons/fi'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
              <article className='experience_details'>
                <FiCheckSquare className='experience_details_icon'/>
                <div>
                  <h4>HTML5</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience_details'>
                <FiCheckSquare className='experience_details_icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>- Material UI</small>
                  <br />
                  <small className='text-light'>- Tailwind</small>
                </div>
              </article>

              <article className='experience_details'>
                <FiCheckSquare className='experience_details_icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience_details'>
                <FiCheckSquare className='experience_details_icon'/>
                <div>
                  <h4>React</h4>
                  <small className='text-light'>NextJS</small>
                </div>
              </article>
          </div>
        </div>

        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <FiCheckSquare className='experience_details_icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <FiCheckSquare className='experience_details_icon'/>
              <div>
                <h4>Flask</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <FiCheckSquare className='experience_details_icon'/>
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <FiCheckSquare className='experience_details_icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>MySQL Workbench</small>
              </div>
            </article>

            <article className='experience_details'>
              <FiCheckSquare className='experience_details_icon'/>
              <div>
                <h4>OOP</h4>
                <small className='text-light'>Object - Oriented Programming</small>
              </div>
            </article>

            <article className='experience_details'>
              <FiCheckSquare className='experience_details_icon'/>
              <div>
                <h4>MVC Model</h4>
                <small className='text-light'>Models ,Views, Controllers</small>
              </div>
            </article>

            <article className='experience_details'>
              <FiCheckSquare className='experience_details_icon'/>
              <div>
                <h4>APIs</h4>
                <small className='text-light'>Rapid API</small>
              </div>
            </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience