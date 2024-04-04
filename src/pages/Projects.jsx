import { Chip } from '@nextui-org/react'
import React from 'react'
import {
  githubIcon,
  linkIcon,
  mernChat,
  sudokuSolver,
  ticTacToeMinimax,
  ticTacToeOnline,
  matrixMaze
} from '../assets';

const projects = [
  {
    title: 'MERN-Chat',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat tempore veniam architecto ex eligendi incidunt? Corrupti obcaecati inventore aspernatur.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat tempore veniam architecto ex eligendi incidunt? Corrupti obcaecati inventore aspernatur..',
    img: mernChat,
    techStack: ['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS'],
    github: 'something',
    liveDemo: 'something',
  },
  {
    title: 'Tic-tac-toe Multiplayer: Local/Online',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat tempore veniam architecto ex eligendi incidunt? Corrupti obcaecati inventore aspernatur.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat tempore veniam architecto ex eligendi incidunt? Corrupti obcaecati inventore aspernatur..',
    img: ticTacToeOnline,
    techStack: ['ExpressJS', 'ReactJS', 'NodeJS'],
    github: 'something',
    liveDemo: 'something',
  },
  {
    title: 'Sudoku solver',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat tempore veniam architecto ex eligendi incidunt? Corrupti obcaecati inventore aspernatur.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat tempore veniam architecto ex eligendi incidunt? Corrupti obcaecati inventore aspernatur..',
    img: sudokuSolver,
    techStack: ['HTML', 'CSS', 'Javascript'],
    github: 'something',
    liveDemo: 'something',
  },
  {
    title: 'Tic-tac-toe: Human vs Computer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat tempore veniam architecto ex eligendi incidunt? Corrupti obcaecati inventore aspernatur.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat tempore veniam architecto ex eligendi incidunt? Corrupti obcaecati inventore aspernatur..',
    img: ticTacToeMinimax,
    techStack: ['HTML', 'CSS', 'Javascript', 'VueJS'],
    github: 'something',
    liveDemo: 'something',
  },
  {
    title: 'Maze solver using DFS and BFS',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat tempore veniam architecto ex eligendi incidunt? Corrupti obcaecati inventore aspernatur.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat tempore veniam architecto ex eligendi incidunt? Corrupti obcaecati inventore aspernatur..',
    img: matrixMaze,
    techStack: ['ReactJS'],
    github: 'something',
    liveDemo: 'something',
  }
]

const ProjectCard = ({ project, isReverse }) => {
  const { title, description, img, techStack, github, liveDemo } = project;
  return (
    <div className={`flex w-11/12 max-sm:flex-col ${isReverse && 'flex-row-reverse'} ${isReverse ? 'bg-slate-900/0' : 'bg-slate-900/0'} max-sm:bg-slate-800 relative justify-start rounded-md overflow-hidden pr-0 mt-5`}>
      <div className="w-4/5 max-sm:w-full max-sm:h-52 h-72 rounded-md p-2 overflow-hidden">
        <img src={img}
          className='rounded-md'
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          alt="sample"
        />
      </div>
      <div className={`flex w-full flex-col justify-between p-1 ${isReverse ? 'lg:pl-0 lg:pr-9' : 'lg:pl-9 lg:pr-0'} rounded-md box-border`}>
        <div className={`flex flex-col gap-3 max-sm:gap-0`}>
          <h1 className={`flex items-center max-sm:text-xl max-sm:p-3 max-sm:pb-5 max-sm:pl-4 max-sm:pr-4 text-2xl text-slate-300 font-semibold ${!isReverse && 'flex-row-reverse'} max-sm:flex-row flex-wrap`}>
            {title}
          </h1>
          <div className="bg-slate-800 p-5 max-sm:p-2 mb-2 box-border max-sm:pl-4 max-sm:pr-4  rounded-md">
            <p className={`text-slate-400 text-sm max-sm:text-justify ${!isReverse && 'text-right'}`}>{description}</p>
          </div>
        </div>
        <div className="flex justify-between gap-6 items-center bg-emerald-900/0 rounded-lg pl-0 pr-0 pt-2 pb-2 max-sm:pl-4 max-sm:pr-4">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (<Chip variant='flat' key={index} color='success' radius='sm' size='sm' className='opacity-70'>{tech}</Chip>))}
          </div>
          <div className="h-px bg-slate-700 rounded-md flex-1 max-sm:hidden"></div>
          <div className="flex max-sm:flex-col items-center gap-2">
            {github &&
              <a href={github} target='blank'>
                <img src={githubIcon} alt="" srcSet="" style={{
                  width: '20px',
                  height: '20px',
                  objectFit: 'contain',
                  filter: 'invert(1)'
                }} />
              </a>
            }
            {liveDemo &&
              <a href={liveDemo} target='blank'>
                <img src={linkIcon} alt="" srcSet="" style={{
                  width: '35px',
                  height: '35px',
                  objectFit: 'contain',
                  filter: 'invert(1) brightness(1.2)'
                }} />
              </a>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

const Projects = () => {
  return (
    <div className='flex flex-col items-center max-sm:gap-7 gap-20 pb-12 pt-8 lg:pt-12 md:mt-24 lg:mt-0'>
      <h2 className='text-5xl max-sm:text-3xl font-bold'>
        Some of my <font className='text-emerald-500'> Projects</font>
      </h2>
      {projects.map((project, index) => <ProjectCard key={index} project={project} isReverse={index % 2 == 1} />)}
    </div>
  )
}

export default Projects