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
