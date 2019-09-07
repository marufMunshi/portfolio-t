import React from 'react';
import { Link } from 'react-router-dom';

export const ProjectImage = ({ projects }) => (
  projects.map((project, index) => (
    <div key={index} className="flex w-50-l w-100 img-wrap pointer">
      <Link className="flex" to={`/works/${project.id}`}>
        <img src={project.image} alt={project.name} />
        <div className="img-description" style={{ backgroundColor: project.backgroundColor }}>
          <div className="flex h-100 items-center justify-center">
            <p>
              <span className="f2 fw7 livvic">{project.name}</span>
              <span className="f4 db f4 pt3">{project.type}</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  ))
);