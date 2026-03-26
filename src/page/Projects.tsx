import React from 'react'
import { Card } from '../components/ui/Card'
import { Modal } from '../components/ui/Modal'
import { Carousel } from '../components/ui/Carousel'
import { pageData } from '../data/data'
import { getMediaBySlug } from '../utils/media'
import placeholder from '../assets/media/placeholder.png'

const projectImageModules = import.meta.glob('../assets/media/projects/*/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const projectImagesBySlug = getMediaBySlug(projectImageModules, 'projects')

const projectSlidesBySlug = Object.fromEntries(
  Object.entries(projectImagesBySlug).map(([slug, slides]) => [
    slug,
    slides.map(({ src, order }, index) => ({
      id: order ?? index + 1,
      image: src,
      alt: `${slug.replace(/-/g, ' ')} slide ${order ?? index + 1}`,
    })),
  ]),
)

export const Projects: React.FC = () => {
  const [projectSection] = pageData.projectsPage
  const projects = projectSection?.projects ?? []
  const [selectedProjectSlug, setSelectedProjectSlug] = React.useState<string | null>(null)
  const projectsWithSlides = projects.map((project) => ({
    ...project,
    slides: projectSlidesBySlug[project.slug] ?? [],
  }))

  const selectedProject =
    selectedProjectSlug === null
      ? null
      : (projectsWithSlides.find((project) => project.slug === selectedProjectSlug) ?? null)

  return (
    <div className='animate-fade-in'>
      <section className='bg-white px-6 py-20'>
        <div className='container mx-auto max-w-5xl'>
          <div className='mb-12 text-center'>
            <span className='mb-4 block text-sm font-semibold tracking-wider text-sky-500 uppercase md:text-base'>
              Projects
            </span>
            <h1 className='font-sora mb-6 text-4xl font-bold text-slate-900 md:text-5xl'>
              Build Something That Flies
            </h1>
            <p className='mx-auto max-w-3xl text-lg font-light text-slate-600'>
              Join a project team, contribute to real hardware, and see your designs take to the air
              across the semester.
            </p>
          </div>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            {projectsWithSlides.map((project) => {
              const projectPreviewImage = project.slides[0]?.image ?? placeholder

              return (
                <Card key={project.title} interactive>
                  <button
                    type='button'
                    className='flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl text-left focus-visible:outline-none'
                    onClick={() => setSelectedProjectSlug(project.slug)}
                  >
                    <div className='mb-4 aspect-video w-full overflow-hidden rounded-xl bg-slate-100'>
                      <img
                        src={projectPreviewImage}
                        alt={project.title}
                        className='h-full w-full object-cover'
                      />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <p className='text-sm tracking-wider text-sky-500 uppercase'>
                        {project.subtitle}
                      </p>
                      <h2 className='font-sora text-2xl font-semibold text-slate-900'>
                        {project.title}
                      </h2>
                      <p className='font-light text-slate-600'>{project.description}</p>
                    </div>
                  </button>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <Modal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProjectSlug(null)}
        title={selectedProject?.title}
        className='max-w-5xl'
      >
        <div className='overflow-hidden rounded-xl bg-slate-100'>
          <Carousel slides={selectedProject?.slides ?? []} />
        </div>
      </Modal>
    </div>
  )
}
