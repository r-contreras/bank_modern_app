import { logo } from '../public'
import { footerLinks, socialMedia } from '../constants'
import Image from 'next/image'

function Footer() {
    return (
        <section className="flex flex-col justify-center items-center pt-20 mb-10">
            <div className="flex flex-col sm:flex-col justify-start items-start md:flex-row flex-col w-full gap-10">
                <div className="flex-1 flex-col justify-center items-end" id="logo">
                    <Image id='greyed-logo' src={logo} width='266' height='72' />
                    <p className='font-poppins text-[12px] text-dimWhite leading-[20px] ml-1 text-end'>The next gen bank.</p>
                </div>
                <div className="flex flex-[1.5] flex-row justify-center w-full">
                    {footerLinks.map((section) => (
                        <div key={section.title} className="flex flex-1 flex-col gap-3">
                            <h3 className='font-poppins text-[18px]'>{section.title}</h3>
                            {section.links.map((link) => (
                                <a key={link.name} href='#' className='font-poppins text-dimWhite text-[16px] hover:text-secondary hover:cursor-pointer'>{link.name}</a>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <hr className='my-10' />
            <div className='flex justify-between items-end w-full'>
                <p className='font-poppins font-normal text-center text-[10px] sm:text-[16px] text-dimWhite'>{new Date().getFullYear()} Hoobank. All Rights Reserved.</p>
                <div className='flex flex-row gap-6 mr-5'>
                    {socialMedia.map(social => (
                        <Image key={social.id} src={social.icon} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Footer