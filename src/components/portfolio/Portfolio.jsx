import React from 'react'
import './portfolio.css'
import IMG_1 from '../../assets/creator-tube.png'
import IMG_2 from '../../assets/vibes.png'
import IMG_3 from '../../assets/super-summzz.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG_1} alt="creator-tube" />
          </div>
          <h3>Creator Tube
            <br />
            <small className='text-light'>A video streaming application similar to youtube that lets you watch videos and search as well. Created with React and implemented Rapid API.</small>
          </h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Alejandro-Fernandez-Macias/youtube-alike" className='btn' target='_blank'>Github</a>
            <a href="https://creators-tube.online" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG_2} alt="vibes" />
          </div>
          <h3>Vibes
            <br />
            <small className='text-light'>A music streameing application thats lets you listen and search songs as well as artists. Created with React and implemented Rapid API. </small>
          </h3>
        <div className="portfolio_item-cta">
          <a href="https://github.com/Alejandro-Fernandez-Macias/vibes" className='btn' target='_blank'>Github</a>
          <a href="https://vibes-streamer.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG_3} alt="super-summz" />
          </div>
          <h3>Super Summz
            <br/>
            <small className='text-light'>An open-source article summarizer that transforms lenghty articles into clear and concise summaries. Created with React and implemented OpenAI's GPT-4 API. </small>
          </h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Alejandro-Fernandez-Macias/ai_summarizer" className='btn' target='_blank'>Github</a>
            <a href="https://super-summz.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio