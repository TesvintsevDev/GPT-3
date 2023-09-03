import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise
          blessing. Indulgence way everything joy alteration boisterous the attachment. Party
          we&nbsp;years to&nbsp;order allow asked&nbsp;of.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">
            <a href="https://codex-beta.vercel.app/" rel="noreferrer" target="_blank">
              Get Started
            </a>
          </button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="img" />
          <p>1,600 people requested access a&nbsp;visit in&nbsp;last 24&nbsp;hours</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt="img" />
      </div>
    </div>
  );
};

export default Header;
