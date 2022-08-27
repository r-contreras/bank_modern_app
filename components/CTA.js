import Button from "./Button"

function CTA() {
    return (
        <section id='CTA' className="flex justify-center items-center w-full mb-10">
            <div className="flex flex-col md:flex-row bg-black-gradient-2 px-6 py-4 sm:px-16 xm:py-12 rounded-[20px] box-shadow max-w-[800px]">
                <div className="flex flex-col my-3">
                    <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] mb-3'>Give us a shot, you won&apos;t regret it.</h2>
                    <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]'>You&apos;ll only wish you had started sooner.</p>
                    <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]'>Welcome to the next generation.</p>
                </div>
                <div className="flex justify-center items-center my-3">
                    <Button text='Get Started' styles='w-[150px]' />
                </div>
            </div>


        </section>
    )
}

export default CTA