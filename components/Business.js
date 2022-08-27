import { features } from '../constants'
import Button from './Button'
import FeatureCard from './FeatureCard'

function Business() {
    return (
        <section id='features' className='flex md:flex-row flex-col py-16'>
            <div className="flex flex-col flex-1 justify-center items-start ">
                <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full'>You make the profits, you keep the profits. <br className='sm:block hidden' /> We allow you to spend them.</h2>
                <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[600px]'>Increase your passive income. Trade anywhere and anytime. Spend and withdraw instantly, no questions asked.</p>
                <Button text="Learn more" styles="mt-10 md:block hidden" />
            </div>

            <div className="flex flex-col flex-1 justify-center items-start gap-3 md:ml-10 mt-10 relative my-3">
                {features.map(feature => (
                    <FeatureCard key={feature.id} {...feature} />
                ))}
            </div>
            <div className="flex w-full justify-center items-center sm:hidden block">
                <Button text="Learn more" styles="mt-10 sm:hidden block" />
            </div>
        </section>
    )
}

export default Business