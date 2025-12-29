const images = import.meta.glob('~/assets/projects/**/*.jpg', { eager: true })

export const projectImages = {}

Object.entries(images).forEach(([path, mod]) => {
  const match = path.match(/projects\/([^/]+)\//)
  const folder = match ? match[1] : 'unknown'

  if (!projectImages[folder]) projectImages[folder] = []
  projectImages[folder].push({
    src: mod.default,
    alt: `${folder} image`,
  })
})
