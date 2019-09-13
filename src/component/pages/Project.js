import React, { useState, useEffect } from 'react';
import { Nav } from '../Nav';
import { data } from '../../data/projectsData';
import { Loading } from '../Loading';
import { ImageSlider } from '../ImageSlider';
import { VideoPlayer } from '../VideoPlayer';
import { Footer } from '../Footer';

const Projects = (props) => {

  const [projectData, setProjectData] = useState(undefined);
  const [id] = useState(props.match.params.id);

  useEffect(() => {
    const _data = data.filter((project) => project.id === id);
    setProjectData(..._data);
  }, [id, projectData])

  return (
    <div>
      {projectData ?
        <>
          <Nav />
          <div className="overflow-hidden">
            <header
              className="vh-100 cover bg-imgae-animation"
              style={{
                background: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${projectData.image}) 
                no-repeat center center fixed` }}>
              <div className="flex h-100 items-center justify-center">
                <p className="ma0 tc white">
                  <span className="dib f2-l f4 fw7 livvic pb3">{projectData.name}</span>
                  {projectData.shortIntro.map(item => <span key={item} className="db f4-l f6 pt1">{item}</span>)}
                </p>
              </div>
            </header>
          </div>
          {projectData.sliderImages &&
            <div
              className="w-100"
              style={{
                backgroundImage: `linear-gradient(to left top, rgba(82,90,119,0.9), 
              rgba(29,130,125,0.7)` }}
            >
              <div className="pb6 center">
                <h2 className="f1-l f3 fw4 livvic ma0 pv4 tc white">Illustration</h2>
                <ImageSlider images={projectData.sliderImages} />
              </div>
            </div>}
          {projectData.videoURL &&
            <div
              className="w-100"
              style={{
                backgroundImage: `linear-gradient(to left top, rgba(82,90,119,0.9), 
              rgba(29,130,125,0.7)` }}
            >
              <div className="flex flex-column items-center justify-center pb5">
                <h2 className="f2-l f3 fw4 livvic ma0 pv3 pv4-l white">Watch the Animation</h2>
                <VideoPlayer url={projectData.videoURL} />
              </div>
            </div>}
          <div className="flex flex-wrap items-baseline justify-center pa3 pa5-l">
            <div className="pb0-l pb3 ph5-l w-100 w-60-l">
              <h1 className="f2-l f3 fw4 livvic ma0 pb3 pb4-l">{projectData.info.description.title}</h1>
              <p className="f4-l f5 fw4 lh-copy ma0">{projectData.info.description.text}</p>
            </div>
            {projectData.info.subDescription && <div className="ph5-l w-100 w-40-l">
              <h1 className="f2-l f3 fw4 livvic ma0 pb3 pb4-l">{projectData.info.subDescription.title}</h1>
              <ol className="ma0 pa0 list">
                {projectData.info.subDescription.text.map((item, index) => (
                  <li key={index} className="f4-l f5 fw4 lh-copy ma0">
                    {item}
                  </li>
                ))}
              </ol>
            </div>}
          </div>
          <Footer />
        </>
        :
        <header className="bg-black-90 vh-100">
          <Nav />
          <div className="flex h-100 items-center justify-center">
            <Loading />
          </div>
        </header>}
    </div>
  );
}

export default Projects;