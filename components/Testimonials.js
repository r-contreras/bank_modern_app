import { feedback } from '../constants'
import { quotes } from '../public'
import Image from 'next/image'

const FeedbackCard = ({ id, content, name, title, img }) => (
    <div key={id} className="flex flex-1 flex-col justify-center items-start px-10 py-12 rounded-[20px] sm:max-w-[500px] max-w-[370px] min-h-full md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <Image src={quotes} width='42' height="27" className='object-contain' />
        <p className='flex-1 font-poppins font-normal text-[18px] leading-[32px] my-10'>
            {content}
        </p>
        <div className="flex justify-center items-center gap-3">
            <Image src={img} width='48' height='48' className='flex-1' />
            <div className="flex flex-col w-full">
                <h3 className='font-poppins text-[20px]'> {name}</h3>
                <p className='font-poppins text-dimWhite text-[15px] w-full'> {title}</p>
            </div>
        </div>

    </div>
)

function Testimonials() {
    return (
        <section id="clients" className="flex flex-col relative">
            <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
            <div className="flex flex-col">
                <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px]'>What people say about us.</h2>
                <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[600px]'>We are dedicated to deliver the most convenient and secure way to store your fiat and crypto.</p>
            </div>
            <div className="flex md:flex-row flex-col flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
                {feedback.map((testimonial) => (
                    <FeedbackCard key={testimonial.id} {...testimonial} />
                ))}
            </div>
        </section>
    )
}

export default Testimonials