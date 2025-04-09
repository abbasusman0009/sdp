import sdpLogo from '../../assets//image/sdplogo.png'
import { Button } from "@material-tailwind/react";
const menu = [
  { name: 'Home', href: '/' },
  { name: 'Membership', href: '/membership' },
  { name: 'Information', href: 'information' },
  { name: 'Forum', href: '/forum' },
  { name: 'Support', href: '/support' },
  { name: 'Election', href: '/election' },
  { name: 'Volunteer', href: '/volunteer' },
  { name: 'News', href: '/new' },

]
export const Header = () => {
  return (
    <div className='flex justify-around items-center font-inter p-4' style={{ background: 'linear-gradient(to right, #EEF0EF, #F5FFFA)' }}>
      <img className='w-[50px] h-[50px]' src={sdpLogo} alt="" />
      <div>
        <ul className='flex space-x-8 text-[16px]'>
          {menu.map((item, index) => (
            <li key={index} className='text-xltext-gray-700 hover:text-gray-900'>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <Button className='bg-[#E99050]  text-[#F5FFFA] rounded-md p-2 w-[166px]'>Become A Member</Button>
    </div>
  )
}
