import { useEffect, useState } from 'react';
import down from './static/down.svg';
import arrow from './static/arrow.svg';

export default function Banner() {
  return (
    <div className='banner'>
      <h1>Server is waking up, please hang tight</h1>
      <img src={down} className='down' alt='Arrow pointing downward' />
      <Promo />
    </div>
  );
}

interface IPromo {
  id: string;
  header: string;
  body: string;
  link: string;
  linkLabel: string;
  publish: boolean;
}

function Promo() {
  const host: string = '';
  const client: string = '';
  const [data, setData] = useState<IPromo[]>([]);

  useEffect(() => {
    fetch(`${host}/promotions`, {
      method: 'GET',
      headers: {
        Client: `${client}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      {data
        .filter((promo) => promo.publish)
        .map((promo) => (
          <div className='promo' key={promo.id}>
            <h3>{promo.header}</h3>
            <p>{promo.body}</p>
            <a href={promo.link} target='_blank' rel='noreferrer'>
              {promo.linkLabel}
              <img src={arrow} alt='Promotional link icon' />
            </a>
          </div>
        ))}
    </>
  );
}
