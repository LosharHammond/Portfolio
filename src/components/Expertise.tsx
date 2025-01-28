import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faServer, faChartBar, faCogs, faTools } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "C/C++",
    "HTML5",
    "CSS3",
    "SASS",
    "Tailwind",
    "Firebase",
    "Python",
    "SQL",
    "PostgreSQL",
    "Vite",
    "Dart(Flutter)",
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Vite",
    "TensorFlow",
    "Firebase",
    "LMS",
    "IT Support",
    "Linux",
];

const labelsThird = [
    "OpenAI",
    "Word",
    "Excel",
    "PowerPoint",
    "IT Support",
    "LMS",
];


const labelsFourth = [
    "Excel(Data Analysis)",
    "Python(Data Processing)",
    "Data Entry",
    "Data Management",
    "Research",
];

const labelsFifth = [
    "Graphic Design",
    "Camera & Camcorder Handling",
    "Video Editing",
    "Research",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faLaptopCode} size="3x"/>
                    <h3>Software Developer</h3>
                    <p>Experienced in building scalable and user-friendly applications using Dart (Flutter), JavaScript (React Native, React.js, Node.js), Python, and C/C++. Proficient in modern frameworks and tools like Tailwind CSS, SCSS, Vite, and Firebase to create robust and dynamic solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCogs} size="3x"/>
                    <h3>DevOps</h3>
                    <p>Experienced in leveraging Firebase for cloud functions, hosting, and optimization. Skilled in automation, CI/CD, and infrastructure management to streamline workflows and improve efficiency.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faServer} size="3x"/>
                    <h3>IT Specialist</h3>
                    <p>Skilled in providing IT support and managing Learning Management Systems. Proficient in Microsoft Office Suite, ensuring efficiency in documentation, analysis, and presentations.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faChartBar} size="3x"/>
                    <h3>Data Analyst</h3>
                    <p>Adept at analyzing and managing data with tools like Python and Excel. Expertise in data entry, visualization, and conducting research to deliver actionable insights.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFourth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faTools} size="3x"/>
                    <h3>Additional Skills</h3>
                    <p>Creative and versatile with advanced expertise in graphic design, video editing using Camtasia, and camera/camcorder handling. Strong in research and data management for comprehensive project execution.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFifth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;