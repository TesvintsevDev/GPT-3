import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="img" />
      </div>
      <div>
        <img src={slack} alt="img" />
      </div>
      <div>
        <img src={atlassian} alt="img" />
      </div>
      <div>
        <img src={dropbox} alt="img" />
      </div>
      <div>
        <img src={shopify} alt="img" />
      </div>
    </div>
  );
};

export default Brand;
