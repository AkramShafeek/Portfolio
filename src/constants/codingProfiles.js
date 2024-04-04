import { leetcodeBlackLogo, codeforcesLogo, codechefLogo } from '../assets';
import { leetcodeLink, codeforcesLink, codechefLink } from './socialLinks';

export const profiles = [
  {
    img: leetcodeBlackLogo,
    platform: 'Leetcode',
    title: 'Knight',
    rating: 2028,
    problemsSolved: 700,
    link: leetcodeLink,
    textColor: '#3dad64',
    color: '#3da160',
  },
  {
    img: codeforcesLogo,
    platform: 'Codeforces',
    title: 'Specialist',
    rating: 1482,
    problemsSolved: 200,
    link: codeforcesLink,
    textColor: '#03a89e',
    color: '#03a89e',
  },
  {
    img: codechefLogo,
    platform: 'Codechef',
    title: '4 star',
    rating: 1825,
    problemsSolved: 50,
    link: codechefLink,
    textColor: '#9451a7',
    color: '#684273',
  }
]

export const totalSolved = 900;

export const desc = "Proficient in Data Structures and Algorithms, I've tackled over 900 problems on platforms like LeetCode and Codeforces. From arrays to dynamic programming, I've explored a wide range of topics, equipping me with the skills to approach challenges with confidence and precision";