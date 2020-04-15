import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li>
              <a href={url} class={`icon ${icon}`}>
                <span class="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>&copy; Deedlist</li>
        <li>
          Credits:{' '}
          <a href="https://linkedin.com/in/adena-mcgibbon-95898879">
            {' '}
            Adena McGibbon
          </a>{' '}
          + <a href="https://rgermaine.com">Richard Germaine</a> +{' '}
          <a href="http://unsplash.com/">Unsplash</a> +
          <a href="http://html5up.net"> HTML5 UP</a>
        </li>
      </ul>
    </footer>
  );
}
