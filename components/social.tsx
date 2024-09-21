import { FaGithub, FaYoutube, FaStackOverflow, FaFacebook } from 'react-icons/fa'
import Link from 'next/link'

const socialLinks = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/sokny2023'
  },
  {
    icon: <FaYoutube />,
    path: 'https://www.youtube.com/@SoknyCoder'
  },
  {
    icon: <FaFacebook />,
    path: 'https://web.facebook.com/pov.sokny.560/'
  }
]
const Social = () => {
  return (
    <div className='flex gap-6'>
      {socialLinks.map((item, index) => (
        <Link
          target='_blank'
          href={item.path}
          key={index}
          className='duration-3000 flex size-10 items-center justify-center rounded-full border-2 border-blue text-blue hover:bg-blue/20 hover:transition-all hover:text-white'
        >
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default Social
