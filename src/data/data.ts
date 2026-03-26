import placeholder from '../assets/media/placeholder.png'
/* Home Page */
import humanPoweredAircraft from '../assets/media/home/about-section/human-powered-aircraft.png'
import remoteControlAircraft from '../assets/media/home/about-section/remote-control-aircraft.png'
import communityCompetition from '../assets/media/home/about-section/community-competition.jpg'
import tshirtMerch from '../assets/media/home/merch-section/tshirt-merch.png'
import quarterZipMerch from '../assets/media/home/merch-section/quarter-zip-merch.png'
import capMerch from '../assets/media/home/merch-section/cap-merch.png'
/* Sponsors Page */
import dassaultSystemesLogo from '../assets/media/sponsor/dassault-systemes.png'
import avicCabinSystemsLogo from '../assets/media/sponsor/avic-cabin-systems.png'
import modelFlyingNzLogo from '../assets/media/sponsor/model-flying-nz.png'
import aerospaceNzLogo from '../assets/media/sponsor/aerospace-nz.png'
import royalAeronauticalSocietyLogo from '../assets/media/sponsor/royal-aeronautical-society.png'

export const layoutData = {
  header: {
    brand: {
      label: 'UOA Aeronautics Club',
      path: '/',
    },
    navLinks: [
      { label: 'About', path: '/about' },
      { label: 'Projects', path: '/projects' },
      { label: 'Sponsors', path: '/sponsors' },
      { label: 'Events', path: '/events' },
      { label: 'Contacts', path: '/contacts' },
    ],
    mobileNavLinks: [
      { label: 'Home Page', path: '/' },
      { label: 'About Us', path: '/about' },
      { label: 'Our Projects', path: '/projects' },
      { label: 'Our Sponsors', path: '/sponsors' },
      { label: 'Events & Gallery', path: '/events' },
      { label: 'Contact & Sign Up', path: '/contacts' },
    ],
    cta: {
      label: 'AeroCloud',
      href: 'PLACEHOLDER',
      external: true,
    },
  },
  footer: {
    description:
      'Inspiring the next generation of aviators and aerospace engineers. Elevate your passion for flight.',
    cta: {
      eyebrow: 'Check out our aviation charity website!',
      label: 'AeroCloud',
      href: 'PLACEHOLDER',
      external: true,
    },
    sections: [
      {
        title: 'Explore',
        links: [
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Projects', href: '/projects' },
          { label: 'Events', href: '/events' },
          { label: 'Sponsors', href: '/sponsors' },
          { label: 'Contacts', href: '/contacts' },
        ],
      },
      {
        title: 'Connect',
        links: [
          { label: 'Linktree', href: 'https://linktr.ee/uacuoa', external: true },
          { label: 'Email', href: 'mailto:aeroclubuoa@gmail.com', external: true },
          { label: 'Discord', href: 'http://discord.gg/9hj3xk8ZXj', external: true },
          {
            label: 'Instagram',
            href: 'https://www.instagram.com/aeronauticsuoa',
            external: true,
          },
          {
            label: 'Facebook',
            href: 'https://www.facebook.com/people/University-of-Auckland-Aeronautics-Club/61556325737665/',
            external: true,
          },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/company/uoa-aero/', external: true },
        ],
      },
    ],
  },
}

export const pageData = {
  homePage: {
    activityCards: [
      {
        src: humanPoweredAircraft,
        alt: 'Human-powered aircraft',
        title: 'Human Powered Aircraft',
        description:
          'Explore lightweight structures, low-speed aerodynamics, and efficient ideas for HPA.',
      },
      {
        src: remoteControlAircraft,
        alt: 'Remote-control aircraft',
        title: 'Remote Control Aircraft',
        description:
          'Build RC aircraft through electronics integration, controller tuning, and test flying.',
      },
      {
        src: communityCompetition,
        alt: 'Community & Competition',
        title: 'Community & Competition',
        description:
          'Take on design-build-fly challenges while helping run outreach activities for students.',
      },
    ],
    projectCollageSlug: 'project-section',
    merchCards: [
      {
        name: 'UAC T-shirt',
        price: '$40 NZD',
        description: 'Heavy cotton tee with clean front logo and bold print.',
        referenceSuffix: 'TShirt',
        image: tshirtMerch,
      },
      {
        name: 'UAC Quarter Zip',
        price: '$80 NZD',
        description: 'Midweight quarter zip with subtle Aero branding and clean fit.',
        referenceSuffix: 'QuarterZip',
        image: quarterZipMerch,
      },
      {
        name: 'UAC Cap',
        price: '$30 NZD',
        description: 'Low-profile cap with subtle embroidery for everyday wear.',
        referenceSuffix: 'Cap',
        image: capMerch,
      },
    ],
    eventDates: [
      {
        id: '1',
        title: 'Intro to Aerodynamics',
        date: '2024-04-15',
        description: 'Learn the basics of lift, drag, and thrust.',
        link: 'https://discord.com/events/1126497250554695714/1466718104670306528',
      },
      {
        id: '2',
        title: 'Intro to Aerodynamics',
        date: '2024-04-15',
        description: 'Learn the basics of lift, drag, and thrust.',
        link: 'https://discord.com/events/1126497250554695714/1466718104670306528',
      },
    ],
  },
  aboutPage: [
    {
      aboutCards: [
        {
          title: 'Our Mission',
          description: 'Making aeronautics accessible through hands-on building and flight theory.',
        },
        {
          title: "What You'll Learn",
          description:
            'Aerodynamics, aircraft design, flight control, safety, and teamwork through projects.',
        },
        {
          title: 'Who Can Join',
          description:
            'Open to all students with safety training no experience needed, just curiosity to learn.',
        },
      ],
    },
    {
      teamAccordion: [
        {
          id: 1,
          year: 2024,
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
          year: 2025,
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
            {
              name: 'Ryan Ruscoe',
              position: 'Advisor & Immediate Past President',
              image: placeholder,
            },
          ],
        },
        {
          id: 3,
          year: 2026,
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
            {
              name: 'Sam Boyle',
              position: 'Advisor & Immediate Past President',
              image: placeholder,
            },
            { name: 'A/Prof Mike Kingan', position: 'Faculty Advisor', image: placeholder },
          ],
        },
      ],
    },
  ],
  projectsPage: [
    {
      projects: [
        {
          title: 'Human-Powered Aircraft',
          subtitle: 'Structures & efficiency',
          description:
            'Explores aerodynamic efficiency, and low-speed airfoil performance for human-powered flight.',
          slug: 'human-powered-aircraft',
        },
        {
          title: 'Remote-Control Aircraft',
          subtitle: 'System integration',
          description:
            'Focusing on flight controller tuning, electronics, and sensor integration for stable flight.',
          slug: 'remote-control-aircraft',
        },
        {
          title: 'Community Outreach',
          subtitle: 'STEM engagement',
          description:
            'Workshops introducing aerodynamics through simple builds and interactive experiments for students.',
          slug: 'community-outreach',
        },
        {
          title: 'AIAA DBF Competition',
          subtitle: 'Design build fly',
          description:
            'Aircraft design for AIAA DBF, including mission optimization, payload integration, and flight testing.',
          slug: 'aiaa-dbf-competition',
        },
      ],
    },
  ],
  sponsorsPage: [
    {
      sponsors: [
        {
          name: 'Dassault Systèmes',
          logo: dassaultSystemesLogo,
          link: 'https://www.3ds.com/',
        },
        {
          name: 'AVIC Cabin Systems',
          logo: avicCabinSystemsLogo,
          link: 'https://www.aviccabinsystems.com/',
        },
        {
          name: 'Model Flying New Zealand',
          logo: modelFlyingNzLogo,
          link: 'https://www.mfnz.org/',
        },
        {
          name: 'Aerospace New Zealand',
          logo: aerospaceNzLogo,
          link: 'https://www.aerospace.org.nz/',
        },
        {
          name: 'Royal Aeronautical Society',
          logo: royalAeronauticalSocietyLogo,
          link: 'https://www.aerosociety.com/',
        },
      ],
    },
  ],
  eventsPage: [
    {
      calendarSrc:
        'https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=Pacific/Auckland&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0',
    },
    {
      eventDates: [
        {
          id: '1',
          title: 'HCAP Aviation Webinar Series',
          date: '2026-04-15',
          time: 'Wed Apr 15th 10:00 - 11:30',
          link: 'https://discord.com/events/1126497250554695714/1471017503365927045',
        },
        {
          id: '2',
          title: 'RAeS Seminar Air Crash Prediction',
          date: '2026-04-15',
          time: 'Wed Apr 15th 17:30 - 20:30',
          link: 'https://discord.com/events/1126497250554695714/1467395510582116424',
        },
        {
          id: '3',
          title: 'Aircraft Maintenance Weekends',
          date: '2026-04-18',
          time: 'Sat Apr 18th 08:00 - Sun Apr 19th 14:30',
          link: 'https://discord.com/events/1126497250554695714/1467395510582116424',
        },
      ],
    },
    {
      pastEventDetails: [
        {
          id: '1',
          title: 'RAeS Seminar Air Crash Prediction',
          date: '2026-03-19',
          description: 'Club intro with projects, teams, and how to get involved.',
          slug: 'uac-launch-night',
        },
        {
          id: '2',
          title: 'Aircraft Maintenance Training',
          date: '2026-03-21',
          description: 'Hands-on training in aircraft systems and maintenance.',
          slug: 'aircraft-maintenance-training',
        },
      ],
    },
  ],
  contactsPage: [
    {
      contacts: [
        { label: 'Discord', path: 'http://discord.gg/9hj3xk8ZXj' },
        { label: 'Email', path: 'mailto:aeroclubuoa@gmail.com' },
      ],
    },
    {
      membershipForm:
        'https://docs.google.com/forms/d/e/1FAIpQLSfFQ9JlnlpCb3L5v06bVk6dJ4PuYSTqGwXkyqL5Ux178O8iPA/viewform',
    },
  ],
}
