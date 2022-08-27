import { useState } from 'react';
import { close, logo, menu } from '../public'
import { navLinks } from '../constants'
import Link from 'next/link'
import Image from 'next/image';

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className="sm:px-16 px-6 flex justify-center items-center">
            <div className="xl:max-w-[1280px] w-full">
                <nav className='w-full flex py-6 justify-between items-center navbar'>
                    <Image src={logo} alt='hoobank' width="124" height="32" />
                    <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                        {navLinks.map((navlink, index) => (
                            <li key={navlink.id} className={`font-poppins font-normal hover:text-secondary cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
                                <Link href={`${navlink.id}`} >
                                    <a>{navlink.title}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* Mobile menu */}
                    <div className="sm:hidden flex flex-1 justify-end items-center">
                        <Image src={openMenu ? close : menu} alt='menu' width='28' height='28' onClick={() => setOpenMenu((toggled) => !toggled)} />
                    </div>

                    <div className={`${openMenu ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[1]`}>
                        <ul className='list-none flex flex-col justify-end items-center flex-1'>
                            {navLinks.map((navlink, index) => (
                                <li key={navlink.id} className={`font-poppins font-normal hover:text-secondary cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}>
                                    <Link href={`${navlink.id}`} >
                                        <a>{navlink.title}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar