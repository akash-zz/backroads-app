import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'Home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur',
  },
];

export const tours = [
  {
    id: 1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    location: 'china',
    duration: '6 days',
    price: 'from $2100',
    image: tour1,
  },
  {
    id: 2,
    date: 'october 26th, 2020',
    title: 'Best of Java',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    location: 'indonesia',
    duration: '11 days',
    price: 'from $1400',
    image: tour2,
  },
  {
    id: 3,
    date: 'october 5th, 2020',
    title: 'kenya highlights',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    location: 'kenya',
    duration: '20 days',
    price: 'from $3300',
    image: tour3,
  },
  {
    id: 3,
    date: 'october 5th, 2020',
    title: 'explore hong kong',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    location: 'hong kong',
    duration: '8 days',
    price: 'from $5000',
    image: tour4,
  },
];
