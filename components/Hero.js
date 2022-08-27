import Image from 'next/image'
import { discount, robot } from '../public'
import GetStarted from '../components/GetStarted'

function Hero() {
    return (
        <section id='home' className="flex md:flex-row flex-col sm:py-16 py-6">
            <div className='flex flex-1 justify-center items-start flex-col xl:px-0 px-6 sm:px-16'>
                <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                    <Image src={discount} alt="discount" width='32' height='32' />
                    <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]'>
                        <span>20%</span> Discount For {" "} <span>1 Month</span>
                    </p>
                </div>
                <div className="flex flex-row justify-between items-center w-full relative">
                    <h1 className='font-poppins flex-1 font-semibold ss:text-[72px] text-[52px] ss:leading-[100px]'>
                        The Next <br className='sm:block hidden' /> {" "}
                        <span className='text-gradient'>Generation</span> {" "}
                    </h1>
                    <div className='ss:flex hidden md:mr-4 mr-0'>
                        <GetStarted />
                    </div>
                </div>
                <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] w-full'>
                    Payment Method.
                </h1>
                <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
                    Crypto and Fiat in one virtual card. Spend your crypto anywhere in the world. No conversion fees.
                </p>
            </div>

            <div className='flex flex-1 justify-center items-center md:my-0 my-10 relative'>
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                <Image src={robot} alt='billing' className='relative z-[10]' />
            </div>

            <div className="ss:hidden flex justify-center items-center">
                <GetStarted />
            </div>

        </section>
    )
}

export default Hero