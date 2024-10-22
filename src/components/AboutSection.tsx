"use client";

import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import DraggableResizableComponent from './DraggableResizableComponent';
import TitleComponent from './TitleComponent';
import { UI_CONSTANTS } from '@/constants/uiConstants';

const AboutSection = () => {
  return (
    <section className="grid-container fade-in">
      <TitleComponent text="About Me"/>
      <DraggableResizableComponent>
        <div className="mb-4">
          <p className="mb-2">
            I'm <strong>Orhan Aytekin</strong>, a <strong>Backend Developer</strong> at PlusMinusOne. With a <strong>Computer Engineering</strong> degree from Hacettepe University (GPA 3.3/4.0), I specialize in:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Backend:</strong> AWS, Node.js, TypeScript, NestJS</li>
            <li><strong>Frontend:</strong> React, Next.js, Flutter</li>
            <li><strong>Practices:</strong> CI/CD, Agile, Scrum</li>
          </ul>
          <p className="mt-2">
            I have a strong background in technology and a keen interest in building innovative solutions.
          </p>
        </div>
      </DraggableResizableComponent>
      <TitleComponent text="Career Timeline" centered={true}/>
      <section id="career-timeline">      
          <Timeline position="alternate">
            <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h4 className="text-xl font-bold">Backend Developer at PlusMinusOne</h4>
              <p className="text-sm text-gray-400">August 2024 - Present</p>
              <p>Currently working as a Backend Developer at PlusMinusOne.</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h4 className="text-xl font-bold">Full Stack Developer at Papelz</h4>
              <p className="text-sm text-gray-400">July 2024 - July 2024</p>
              <p>Assisted in developing the backend using Node.js and NestJS. Contributed to the frontend development with React and Next.js.</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h4 className="text-xl font-bold">Software Engineer at Neuronic</h4>
              <p className="text-sm text-gray-400">July 2023 - July 2024</p>
              <p>Developed and maintained backend services using AWS, NodeJS and TypeScript. Implemented CI/CD pipelines to automate testing, integration, and deployment processes, enhancing overall development efficiency.</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h4 className="text-xl font-bold">Android Developer Intern at GİB Teknoloji</h4>
              <p className="text-sm text-gray-400">July 2023 - September 2023</p>
              <p>Worked on improving the existing GİB application, enhancing user experience, optimizing efficiency, and maintaining backend functionality.</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h4 className="text-xl font-bold">Certifications</h4>
              <p className="text-sm text-gray-400">December 2022</p>
              <p >Google Cloud Fundamentals: Core Infrastructure</p>
              <p >Google Cloud Big Data and Machine Learning Fundamentals</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h4 className="text-xl font-bold">Computer Science Intern at Ankara Su ve Kanalizasyon İdaresi</h4>
              <p className="text-sm text-gray-400">August 2022 - September 2022</p>
              <p>Completed reviews of codes, requirements and project plans. Developed mobile applications using Flutter and Dart as a side project.</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
            </TimelineSeparator>
            <TimelineContent>
              <h4 className="text-xl font-bold">Bachelor's degree, Computer Engineering</h4>
              <p className="text-sm text-gray-400">2020 - 2024</p>
              <p>Hacettepe University</p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </section>
    </section>
  );
};

export default AboutSection;