import Image from 'next/image'
import { arrowUp } from '../public'

function GetStarted() {
    return (
        <div className='flex justify-center items-center w-[140px] h-[140px] border-2 text-gradient rounded-full cursor-pointer'>
            <div className="flex flex-col justify-center items-center font-poppins font-medium text-[18px] leading-[23px] ">
                <p className='flex justify-center items-center'>
                    <span>Get</span>
                    <Image src={arrowUp} height='23' width='23' />
                </p>
                <span>Started</span>
            </div>
        </div>
    )
}

export default GetStarted