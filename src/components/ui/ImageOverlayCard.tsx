import { Link } from 'react-router-dom'

interface ImageOverlayCardProps {
  id: number
  src: string
  title: string
  description: string
  link: string
}

const ImageOverlayCard = ({ src, title, description, link }: ImageOverlayCardProps) => {
  return (
    <div className='group relative h-60 w-full overflow-hidden rounded-2xl'>
      {/* Gray Overlay (default state)*/}
      <div className='absolute inset-0 rounded-2xl bg-gray-900/30 transition-opacity duration-300' />
      <img src={src} alt={title} className='h-full w-full object-cover object-center' />
      <Link
        to={link}
        className='absolute inset-0 flex items-center justify-center px-4 text-center text-2xl font-semibold transition-opacity duration-300 group-hover:opacity-0'
      >
        {title}
      </Link>

      {/* Blue Overlay (hover state) */}
      <div className='absolute inset-0 bg-[oklch(0.3121_0.0722_251.82)]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
      <div className='absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 py-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
        <Link to={link} className='text-center'>
          {description}
        </Link>
        <Link
          to={link}
          className='rounded-lg bg-white px-4 py-2 font-semibold text-blue-600 transition duration-300 hover:bg-gray-300'
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}

export default ImageOverlayCard
