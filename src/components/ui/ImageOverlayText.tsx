import { Link } from 'react-router-dom'

interface ImageOverlayTextProps {
  id: number
  src: string
  title: string
  description: string
  link: string
}

const ImageOverlayText = ({ src, title, description, link }: ImageOverlayTextProps) => {
  return (
    <div className='group relative h-60 w-full overflow-hidden rounded-2xl'>
      {/* light black overlay (default state)*/}
      <div className='absolute inset-0 rounded-2xl bg-black/10 transition-opacity duration-300' />
      <img src={src} alt={title} className='h-full w-full object-cover object-center' />
      <Link
        to={link}
        className='absolute inset-0 flex items-center justify-center px-4 text-center text-2xl font-semibold transition-opacity duration-300 group-hover:opacity-0'
      >
        {title}
      </Link>

      {/* mid black overlay (hover state) */}
      <div className='absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
      <div className='absolute inset-0 flex flex-col items-center justify-center gap-4 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
        <Link to={link} className='text-center'>
          {description}
        </Link>
        <Link
          to={link}
          className='rounded-4xl bg-white px-4 py-2 font-semibold text-blue-600 transition duration-300 hover:bg-gray-300'
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}

export default ImageOverlayText
