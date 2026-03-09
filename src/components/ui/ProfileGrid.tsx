export type Profile = {
  name: string
  position: string
  image: string
}

type ProfileGridProps = {
  profiles: Profile[]
}

const ProfileGrid = ({ profiles }: ProfileGridProps) => {
  return (
    <div className='flex w-full flex-wrap justify-center'>
      {profiles.map((profile, index) => (
        <div
          key={index}
          className='flex w-1/2 flex-col items-center p-4 text-center md:w-1/3 lg:w-1/4'
        >
          <img
            src={profile.image}
            alt={profile.name}
            className='mb-3 h-40 w-40 rounded-2xl object-cover'
          />

          <h3 className='text-xl font-semibold'>{profile.name}</h3>
          <p className='text-gray-400'>{profile.position}</p>
        </div>
      ))}
    </div>
  )
}

export default ProfileGrid
