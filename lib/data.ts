export interface Project {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
}

export interface AskedQuestion {
  id: number;
  qs: string;
  answer: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    image: '/projects/a1.png',
    category: 'Front-end',
    title: 'GradesBot',
    description:
      'GradesBot is an innovative educational platform created to streamline classroom management and enrich the teaching and learning experience by offering autograding.',
  },
  {
    id: 2,
    image: '/projects/02.png',
    category: 'Back end',
    title: 'Kak Mobile Banking',
    description:
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
  },
  {
    id: 3,
    image: '/projects/a3.png',
    category: 'Front end',
    title: 'Snake Game',
    description:
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
  },
];

export const askedQuestions: AskedQuestion[] = [
  {
    id: 1,
    qs: 'Can you work on my project immediately?',
    answer:
      'Yes, if I am not currently engaged in other commitments, otherwise I will get the job done within the deadline.',
  },
  {
    id: 2,
    qs: 'Are you working on an hourly basis or by project?',
    answer: "Both, it depends on the client's choice.",
  },
  {
    id: 3,
    qs: 'What technologies do you use in your stack?',
    answer: 'I use the latest cutting-edge technologies, primarily focusing on the MERN stack.',
  },
];
