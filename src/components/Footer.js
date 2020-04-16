import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <ul className="icons">
          {config.socialLinks.map(social => {
            const { icon, name, url } = social;
            return (
              <>
                <li>
                  <a href={url} className={`icon ${icon}`}>
                    <span className="label">{name}</span>
                  </a>
                </li>
              </>
            );
          })}
        </ul>
        <>
          <ul className="copyright">
            <li>&copy; Deedlist</li>
            <li>
              Credits:{' '}
              <a href="https://linkedin.com/in/adena-mcgibbon-95898879">
                {' '}
                Adena McGibbon
              </a>{' '}
              + <a href="https://rgermaine.com">Richard Germaine</a>
            </li>
          </ul>
        </>
      </footer>
    </>
  );
}
