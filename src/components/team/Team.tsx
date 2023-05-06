/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from 'react';

export default function Team() {
  return (
    <div className='team'>
      <Members />
    </div>
  );
}

interface IMember {
  id: string;
  name: string;
  title: string;
  description: string;
  experiencedSince: number;
  stack: string;
}

function Members() {
  const host: string = '';
  const client: string = '';
  const param: string = '';
  const [data, setData] = useState<IMember[]>([]);

  useEffect(() => {
    fetch(`${host}/members-details`, {
      method: 'GET',
      headers: {
        Client: `${client}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className='members-container'>
      {data.map((member) => (
        <div className='member' key={member.id}>
          <div>
            <div>
              <img
                src={`${host}/members-image/${member.id}${param}`}
                alt='Team member image'
              />
            </div>
            <div>
              <h3>{member.name}</h3>
              <p className='title'>{member.title}</p>
              {member.experiencedSince !== 0 && (
                <>
                  <p className='experience'>
                    {yearsOfExperience(member.experiencedSince)}
                  </p>
                  <p className='stack'>{member.stack}</p>
                </>
              )}
            </div>
          </div>

          <p>{member.description}</p>
        </div>
      ))}
    </div>
  );
}

function yearsOfExperience(experiencedSince: number) {
  return `${new Date().getFullYear() - experiencedSince} years of experience`;
}
