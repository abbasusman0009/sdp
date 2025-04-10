import sdpLogo from '../../assets//image/sdplogo.png'
import { Button } from "@material-tailwind/react";
const menu = [
  { name: 'Home', active: 'true', href: '/' },
  { name: 'Membership', active: 'false', href: '/membership' },
  { name: 'Information', active: 'false', href: 'information' },
  { name: 'Forum', active: 'false', href: '/forum' },
  { name: 'Support', active: 'false', href: '/support' },
  { name: 'Election', active: 'false', href: '/election' },
  { name: 'Volunteer', active: 'false', href: '/volunteer' },
  { name: 'News', active: 'false', href: '/new' },

]
export const Header = () => {
  return (
    <div className='flex justify-around items-center font-inter p-4' style={{ background: 'linear-gradient(to right, #EEF0EF, #F5FFFA)', filterblur: 'blur(15px)' }}>
      <img className='w-[50px] h-[50px]' src={sdpLogo} alt="" />
      <div>
        <ul className='flex space-x-8 text-[16px]'>
          {menu.map((item, index) => (
            <li key={index} className='text-xltext-gray-700 hover:text-gray-900'>
              <a className={item.active == 'true' ? 'text-[#F3A30E]' : ''} href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <Button className='bg-[#E99050]  text-[#F5FFFA] rounded-md p-2 w-[166px]'>Become A Member</Button>
    </div>
  )
}
