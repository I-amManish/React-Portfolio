import React from 'react';
import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';

const About = () => {
  return (
    <section id='about' className='text-white p-8'>
      {/* Title */}
      <h2 className='text-6xl font-bold mb-8 text-center'>
        About <span className='text-emerald-300'>Me</span>
      </h2>
      
      {/* Three Column Layout */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Background Section */}
        <div className='border border-white/20 rounded-lg p-6 bg-black/30'>
          <h3 className='text-xl font-bold mb-4'>01. Background</h3>
          <p className='text-white/50 mb-4'>
            I'm a passionate full-stack developer with a strong foundation in computer science and a love for creating innovative web applications. My curiosity about how things work led me to pursue a career in web development.
          </p>
          <div className='rounded-lg p-4 border border-white/20 bg-black/50'>
            <code className='text-emerald-200'>
              const skills = [<br/>
              &nbsp;&nbsp;'JavaScript',<br/>
              &nbsp;&nbsp;'React',<br/>
              &nbsp;&nbsp;'Node.js',<br/>
              &nbsp;&nbsp;'Express.js',<br/>
              &nbsp;&nbsp;'MongoDb',<br/>
              &nbsp;&nbsp;'Python'<br/>
              ];
            </code>
          </div>
        </div>

        {/* Expertise Section */}
        <div className='border border-white/20 rounded-lg p-6 bg-black/30'>
          <h3 className='text-xl font-bold mb-4'>02. Expertise</h3>
          <p className='text-white/50'>
            I specialize in building robust and scalable web applications using modern technologies. My expertise spans both front-end and back-end development, allowing me to create seamless, end-to-end solutions.
          </p>
          <div className='mt-4 rounded-lg overflow-hidden border border-white/20'>
            <img src={project1} alt='Project' className='w-full h-auto object-cover' />
          </div>
        </div>

        {/* Skills Section */}
        <div className='border border-white/20 rounded-lg p-6 bg-black/30'>
          <h3 className='text-xl font-bold mb-4'>03. Skills</h3>
          <p className='text-white/50 mb-4'>
            I'm proficient in a wide range of technologies and constantly expanding my skill set to stay at the forefront of web development.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <div className='border border-white/20 rounded-lg p-4'>
              <h4 className='text-emerald-300 font-medium mb-2'>Frontend</h4>
              <ul className='text-white/50 space-y-1 text-sm'>
                <li>React/Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            <div className='border border-white/20 rounded-lg p-4'>
              <h4 className='text-emerald-300 font-medium mb-2'>Backend</h4>
              <ul className='text-white/50 space-y-1 text-sm'>
                <li>Node.js</li>
                <li>Python</li>
                <li>PostgreSQL</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
            <div className='border border-white/20 rounded-lg    p-6'>
                <div className='space-y-4'>
                    <div>
                        <label className='block text-sm font-medium mb-2'>
                            Front-end
                        </label>
                        <div className='w-full bg-white/10 rounded-full h-2'>
                        <div className='bg-emerald-300 h-2 rounded-full' style={{width: "90%"}}>    </div>
                    </div>
                </div>
                <div>
                        <label className='block text-sm font-medium mb-2'>
                            Back-end
                        </label>
                        <div className='w-full bg-white/10 rounded-full h-2'>
                        <div className='bg-emerald-300 h-2 rounded-full' style={{width: "75%"}}>    </div>
                    </div>
                </div>
                    {/* info: more label data should been added here */}
            </div>
            <h3 className='text-2xl font-bold mt-4 mb-2'>04. Approach</h3>
            <p className='text-white/50'> 
              I believe in writing clean, maintainable code and following best practices. My approach involves understanding client needs, planning thoroughly, and delivering high-quality solutions on time.
            </p>
            </div>

              <div className='border border-white/20 rounded-lg p-6 flex flex-col justify-between'>
                <div className='relative border border-white/20 rounded-lg p-4 h-[200px] overflow-hidden'>
                    <img
                        src={project2}
                        alt='Project 2'
                        className='absolute inset-0 w-full h-full object-cover'
                    />
                </div>
                <h3 className='text-2xl font-bold mb-2'>0.5 Goals</h3>
                <p className='text-white/50'>
                    My goal is to continue growing as a developer, tackling challenging projects, and contributing to the tech community. I'm always excited to learn new technologies and push the boundries of what's possible in web development.
                </p>
              </div>
        </div>

    </section>
  );
};

export default About;
