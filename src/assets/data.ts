import aboutUs from '../assets/media/about-us.jpg'
import newsEvents from '../assets/media/news-events.jpg'
import ourProjects from '../assets/media/our-projects.jpg'
import ourSponsors from '../assets/media/our-sponsors.jpg'

// Frequently modified data on every page is stored here.
export const frequentlyModifiedData = {
  applicationLink: '',
}

/*
Component data commenting format: 
  <Compnent Name> (<file path>)
*/

// Hamburger Menu (components > layout > header)
export const hamburgerMenuData = [
  { label: 'Home Page', path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Our Projects', path: '/our-projects' },
  { label: 'Our Sponsors', path: '/our-sponsors' },
  { label: 'News & Events', path: '/news-events' },
  { label: 'Contact & Sign Up', path: '/contact-sign-up' },
]

// Image Overlay Card (pages > home page)
export const imageOverlayCardData = [
  {
    id: 1,
    src: aboutUs,
    title: 'About Us',
    description: 'Learn more about UAC.',
    link: '/about-us',
  },
  {
    id: 2,
    src: newsEvents,
    title: 'News & Events',
    description: 'Stay updated with the latest news from our club.',
    link: '/news-events',
  },
  {
    id: 3,
    src: ourProjects,
    title: 'Our Projects',
    description: 'Explore our innovative engineering projects.',
    link: '/our-projects',
  },
  {
    id: 4,
    src: ourSponsors,
    title: 'Our Sponsors',
    description: 'Discover the organisations that generously support our club.',
    link: '/our-sponsors',
  },
]
