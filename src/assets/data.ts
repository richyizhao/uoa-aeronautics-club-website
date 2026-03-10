// PLACEHOLDER
import placeholder from '../assets/media/placeholder.jpg'

// Foooter (component > layout > footer)
import uacLogo from './media/uac-logo.png'
// Image Overlay Text (pages > home page)
import aboutUs from './media/about-us.jpg'
import newsEvents from './media/news-events.jpg'
import ourProjects from './media/our-projects.jpg'
import ourSponsors from './media/our-sponsors.jpg'
// Image Overlay Text (pages > our sponsors)
import dassaultSystemes from './media/dassault-systemes.png'
import avicCabinSystems from './media/avic-cabin-systems.png'
import modelFlyingNZ from './media/model-flying-nz.png'
import aerospaceNZ from './media/aerospace-nz.png'
import royalAeronauticalSociety from './media/royal-aeronautical-society.png'

/*
Frequently modified data is prioritized to be stored here.
*/
export const frequentlyModifiedData = {
  applicationLink: '',
}

/*
Layout Data
*/

// Footer (components > layout > footer)
export const footerData = {
  uacLogo: uacLogo,
  socialLinks: [
    { icon: 'simple-icons:linktree', url: 'https://linktr.ee/uacuoa' },
    { icon: 'grommet-icons:instagram', url: 'https://www.instagram.com/aeronauticsuoa' },
    {
      icon: 'brandico:facebook-rect',
      url: 'https://www.facebook.com/profile.php?id=61556325737665',
    },
    { icon: 'fa:linkedin-square', url: 'https://www.linkedin.com/company/uoa-aero' },
  ],
}

/*
Component data
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

// Carousel (pages > home page) <PLACEHOLDERS>
export const carouselSlides = [
  {
    id: 1,
    image: 'https://picsum.photos/1200/500?random=1',
    alt: 'First slide',
  },
  {
    id: 2,
    image: 'https://picsum.photos/1200/500?random=2',
    alt: 'Second slide',
  },
]

// Image Overlay Card (pages > home page) (pages > our sponsors)
export const imageOverlayTextData = [
  {
    id: 1, // (pages > home page)
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
  {
    id: 5, // (pages > our sponsors)
    src: dassaultSystemes,
    title: 'Dassault Systèmes',
    description: 'Learn more about Dassault Systèmes.',
    link: 'https://www.3ds.com/',
    category: 'company',
  },
  {
    id: 6,
    src: avicCabinSystems,
    title: 'AVIC Cabin Systems',
    description: 'Learn more about AVIC Cabin Systems.',
    link: 'https://www.aviccabinsystems.com/',
    category: 'company',
  },
  {
    id: 7,
    src: modelFlyingNZ,
    title: 'Model Flying New Zealand.',
    description: 'Learn more about Model Flying New Zealand.',
    link: 'https://www.mfnz.org/',
    category: 'company',
  },
  {
    id: 8,
    src: aerospaceNZ,
    title: 'Aerospace New Zealand',
    description: 'Learn more about Aerospace New Zealand.',
    link: 'https://www.aerospace.org.nz/',
    category: 'company',
  },
  {
    id: 9,
    src: royalAeronauticalSociety,
    title: 'Royal Aeronautical Society',
    description: 'Learn more about the Royal Aeronautical Society.',
    link: 'https://www.aerosociety.com/',
    category: 'company',
  },
]

// Profile Grid (pages > about us) <PLACEHOLDERS>
export const profileGridData = [
  { name: 'Andre Williams', position: 'Co-President', image: placeholder },
  { name: 'William Li', position: 'Co-President', image: placeholder },
  { name: 'Stanley Tian', position: 'Treasurer', image: placeholder },
  { name: 'Dylan Parkin', position: 'Secretary', image: placeholder },
  { name: 'John Villanueva', position: 'Events', image: placeholder },
  { name: 'Johnson Du', position: 'Marketing', image: placeholder },
  { name: 'Jack Hollewand', position: 'Outreach', image: placeholder },
  { name: 'Finlay Hayes', position: 'HPA Restoration', image: placeholder },
  { name: 'Roger Warren MRAeS', position: 'Advisor', image: placeholder },
  { name: 'Sam Boyle', position: 'Advisor & Immediate Past President', image: placeholder },
  { name: 'A/Prof Mike Kingan', position: 'Faculty Advisor', image: placeholder },
]

// Accordion (pages > about us) <PLACEHOLDERS>
export const accordionData = [
  {
    id: 1,
    year: '2024',
    profiles: [
      { name: 'Ryan Ruscoe', position: 'President & Co-founder', image: placeholder },
      { name: 'Drishti Murara', position: 'Secretary & Co-founder', image: placeholder },
      { name: 'Ben', position: 'Treasurer', image: placeholder },
      { name: 'Stanley Tian', position: 'Events & Outreach', image: placeholder },
      { name: 'Hannah Tomlinson', position: 'Health & Safety', image: placeholder },
      { name: 'Roger Warren MRAeS', position: 'Advisor & Co-founder', image: placeholder },
    ],
  },
  {
    id: 2,
    year: '2025',
    profiles: [
      { name: 'Sam Boyle', position: 'President', image: placeholder },
      { name: 'Andre Williams', position: 'Vice President', image: placeholder },
      { name: 'Rayen Lee', position: 'Treasurer', image: placeholder },
      { name: 'Niko Snell', position: 'Secretary', image: placeholder },
      { name: 'Umi van Dalen', position: 'Outreach', image: placeholder },
      { name: 'Finlay Hayes', position: 'HPA Restoration', image: placeholder },
      { name: 'Hannah Tomlinson', position: 'Health & Safety', image: placeholder },
      { name: 'Stanley Tian', position: 'Sponsorship', image: placeholder },
      { name: 'Roger Warren MRAeS', position: 'Advisor', image: placeholder },
      { name: 'Ryan Ruscoe', position: 'Advisor & Immediate Past President', image: placeholder },
    ],
  },
  {
    id: 3,
    year: '2026',
    profiles: [
      { name: 'Andre Williams', position: 'Co-President', image: placeholder },
      { name: 'William Li', position: 'Co-President', image: placeholder },
      { name: 'Stanley Tian', position: 'Treasurer', image: placeholder },
      { name: 'Dylan Parkin', position: 'Secretary', image: placeholder },
      { name: 'John Villanueva', position: 'Events', image: placeholder },
      { name: 'Johnson Du', position: 'Marketing', image: placeholder },
      { name: 'Jack Hollewand', position: 'Outreach', image: placeholder },
      { name: 'Finlay Hayes', position: 'HPA Restoration', image: placeholder },
      { name: 'Roger Warren MRAeS', position: 'Advisor', image: placeholder },
      { name: 'Sam Boyle', position: 'Advisor & Immediate Past President', image: placeholder },
      { name: 'A/Prof Mike Kingan', position: 'Faculty Advisor', image: placeholder },
    ],
  },
]
