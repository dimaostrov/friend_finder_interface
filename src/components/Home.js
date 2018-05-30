import React from 'react'

import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

const Home = () =>
 <header className="bg-gold sans-serif">
    <div class="mw9 center pa4 pt5-ns ph7-l">
        <h3 class="f2 f1-m f-headline-l measure-narrow lh-title mv0">
        <span class="bg-black-90 lh-copy white pa1 tracked-tight">
          Friend Finder Survey
        </span>
      </h3>
      <h4 class="f3 fw1 georgia i">Take a quick test to see how similar you are to other dudes.</h4>
      <a class="f3 grow no-underline br-pill pa3 mb2 dib white bg-purple center" href="survey">Take Survey!</a>
    </div>
  </header>


export default Home;