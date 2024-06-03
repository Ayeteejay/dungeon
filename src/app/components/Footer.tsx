import Image from 'next/image'
import Skull from '../../../public/images/skull.svg'

const currentYear = () => new Date().getFullYear();

export default function Footer(){    
    return (
        <footer className="mt-32 py-10 border-t border-black bg-blood_red flex flex-col items-center z-20">
            <p className='text-xs'>Made by <a href="https://www.ayeteejay.com/" target='_blank' rel="noopner noreferrer" className='font-bold'>Adam Jones</a>. &copy;{currentYear()}.</p>              
            <div className='relative h-9 w-9'><Image src={Skull} alt='Skull' fill className='mt-3 mx-auto transition-all duration-700 group-hover:rotate-180'/></div>
        </footer>
    )
}