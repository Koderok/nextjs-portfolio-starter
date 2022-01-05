import Image from 'next/image'

const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
module.exports = withNextra()

// replace [yourprojectname] and [yourdomain.com] with your actual project name and (custom) domain
const cloudflareImageLoader = ({ src, width, quality }) => {
  if (!quality) {
    quality = 75
  }
  return `https://images.pulkityadav.workers.dev?width=${width}&quality=${quality}&image=https://pulkityadav.com${src}`
}

export default function Img(props) {
  if (process.env.NODE_ENV === 'development') {
    return <Image unoptimized={true} {...props} />
  } else {
    return <Image {...props} loader={cloudflareImageLoader} />
  }
}
