/* eslint-disable react/jsx-no-target-blank */
import team from './static/ditr-team.png';
import update from './static/ditr-update.png';

export default function Statement() {
  return (
    <div className='statement'>
      <div>
        <div className='statement-header'>
          <h1>_statement.jsx</h1>
        </div>
        <div>
          <div>
            <p>
              This website is powered by Hi-T/DITR, my system for managing
              website contents. When using the system, here is where you'll see
              your edits.
            </p>
            <p>
              Message me about an invite, should you want to check it out. Links
              in footer.
            </p>
          </div>
        </div>
        <div className='image'>
          <img src={update} alt='Hi-T/DITR team overview' />
          <img src={team} alt='Hi-T/DITR team overview' />
        </div>
        <div>
          <p className='application'>
            This website is built with React.js in combination with TypeScript
            and SASS.
          </p>
          <a
            href='https://github.com/jonasludvig/cms-sample-website'
            target='_blank'
          >
            Visit repository
          </a>
        </div>
      </div>
    </div>
  );
}
