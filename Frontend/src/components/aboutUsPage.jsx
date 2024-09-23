import React, { useEffect, useState } from 'react';
import { Navbar, Footer, WorkImage, GraduateImage, ScholarJobLogoGreen } from '../import/all_import.jsx';

const AboutUsPage = () => {
  const [aboutData, setAboutData] = useState(null);
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch('https://dev-career.cammob.ovh/capstone/Backend/public/api/about-us')
      .then(response => response.json())
      .then(data => setAboutData(data))
      .catch(error => console.error('Error fetching About Us data:', error));
    
    fetch('https://dev-career.cammob.ovh/capstone/Backend/public/api/team-members')
      .then(response => response.json())
      .then(data => setTeamMembers(data))
      .catch(error => console.error('Error fetching Team Members data:', error));
  }, []);

  return (
    <div>
      <header className="p-12">
        <Navbar />
      </header>
      <section className="relative items-center flex mx-16 bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 text-white rounded-lg">
        <div className="mb-4">{aboutData?.mission ? <span dangerouslySetInnerHTML={{ __html: aboutData.mission }} /> : 'Our Mission'}</div>
      </section>

      <section className="mt-12 flex flex-col md:flex-row justify-between items-center">
        <div className="pl-16 w-2/3">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="pr-6">
            {aboutData?.mission ? <span dangerouslySetInnerHTML={{ __html: aboutData.mission }} /> : 'Loading mission...'}
          </p>
        </div>
        <div className="w-1/2 flex justify-end pt-4 pr-16">
          <img
            src={WorkImage}
            alt="Mission Image"
            className="w-auto max-w-md rounded-lg"
          />
        </div>
      </section>

      <section className="mt-12 flex flex-col md:flex-row justify-between items-center">
        <div className="w-1/2 flex justify-start ml-16 pt-4">
          <img
            src={GraduateImage}
            alt="Vision Image"
            className="w-auto max-w-md rounded-lg"
          />
        </div>
        <div className="w-2/3">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="pr-16">
            {aboutData?.vision ? <span dangerouslySetInnerHTML={{ __html: aboutData.vision }} /> : 'Loading vision...'}
          </p>
        </div>
      </section>

      <section className="mt-16 relative flex flex-col justify-center">
        <h2 className="text-3xl font-bold justify-center flex">Team Work</h2>
        <div className="border-t border-2 flex justify-center mx-auto w-1/12 items-center rounded-full border-customTeal my-2"></div>
        <div className="flex justify-between mx-16 mt-8">
          {teamMembers.map(member => (
            <div key={member.id} className="bg-grey text-center">
              <img
                  src={member.image_url || ScholarJobLogoGreen}
                  alt={member.name}
                className="rounded-full w-40 mx-auto mb-4"
              />
              <h3 className="font-bold text-lg mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="mt-12">
        <Footer />
      </footer>
    </div>
  );
};

export default AboutUsPage;
