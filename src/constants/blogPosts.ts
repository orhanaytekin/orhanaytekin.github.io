export interface BlogPost {
  id: string;
  title: string;
  date: string;
  description: string;
  link: string;
}

export const blogPosts: BlogPost[] = [
  /* {
    id: '1',
    title: 'Understanding NestJS',
    date: 'September 1, 2024',
    description: 'A comprehensive guide to getting started with NestJS.',
    link: 'https://medium.com/@orhanaytek1n/understanding-nestjs',
  },
  {
    id: '2',
    title: 'Next.js for Beginners',
    date: 'August 15, 2024',
    description: 'An introductory tutorial on building web applications with Next.js.',
    link: 'https://medium.com/@orhanaytek1n/next-js-for-beginners',
  },
  {
    id: '3',
    title: 'Docker Essentials',
    date: 'July 30, 2024',
    description: 'Learn the basics of Docker and containerization.',
    link: 'https://medium.com/@orhanaytek1n/docker-essentials',
  }, */
];