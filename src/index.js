import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css"
import CoverContent from './components/coverContent';
import About from './components/about';
import Countdown from './components/Countdown';
import Sponsors from './components/Sponsors';
import FAQ from './components/faqs';
import Tracks from './components/tracks';
import Footer from './components/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <CoverContent />
    <Countdown />
    <About />
    <Tracks />
    <Sponsors />



    <div className="head">
      <div className="heading_faq">FAQ</div>
      <div className="faq-container">

        <div className="faq-tower">

          <FAQ
            question="How can I register?"
            answer="You can register through Devfolio by clicking on the button provided above."
          />
          <FAQ
            question="Do I need to pay any money to register for the Hackathon?"
            answer="No. You do not have to pay anything to anyone to register yourself. It's absolutely FREE"
          />
          <FAQ
            question="When will the hackathon take place?"
            answer="ENGAGE 2023 will be held on 1st November 2023. So mark your calendars now."
          />
          <FAQ
            question="Who can participate in the Hackathon?"
            answer="Anyone who wants to develop their skills or want to gain experience and are passionate can participate in the hackathon."
          />
        </div>
        <div className="faq-tower">
          <FAQ
            question="What are the rules on the Team Size?"
            answer="You can participate as an indivisual or a team of maximum 6 members."
          />
          <FAQ
            question="What's in it for participants ?"
            answer="Goodies & swag, learning new skills, networking, winning cash prizes,
            community building, teamwork, meeting wonderful people, having fun, and much more!"
          />
          <FAQ
            question="What is the venue for the event?"
            answer="The offline hackathon will be held in The North Cap University. Other details will be shared with you via email."
          />
        </div>
      </div>
    </div>

    <Footer />


  </React.StrictMode>
);


