import Image from 'next/image'

function FeatureCard({ id, icon, title, content }) {
    return (
        <div key={id} className="flex justify-center items-center p-6 rounded-[20px] feature-card">
            <div className="flex justify-center items-center w-[64px] h-[64px] rounded-full bg-dimBlue">
                <Image src={icon} alt="icon" height='30' width='30' className='object-contain' />
            </div>
            <div className="flex flex-1 flex-col ml-3">
                <h4 className='font-poppins font-semibold'>{title}</h4>
                <p className='font-poppins text-dimWhite'> {content} </p>
            </div>
        </div>
    )
}

export default FeatureCard