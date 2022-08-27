import Image from "next/image"
import { iphoneApp, apple, google } from "../public"

function App() {
    return (
        <section id="product" className="flex md:flex-row flex-col justify-between items-start md:items-center mb-20 w-full relative">
            <div className="flex flex-1 justify-center items-center relative py-10">
                <div className="absolute z-[1] w-[80%] h-[80%] pink__gradient -left-1/2" />
                <div className="absolute z-[0] w-[80%] h-[80%] rounded-full blue__gradient -left-1/2" />
                <Image src={iphoneApp} className='z-[10] relative' />
            </div>
            <div className="flex flex-col flex-1 justify-center items-start md:ml-10">
                <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px]'>Get the app.</h2>
                <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[600px]'>Securely trade and access your funds anywhere, anytime.</p>
                <div className="flex gap-3 mt-5">
                    <Image src={apple} alt="apple_store" className="rounded-lg" />
                    <Image src={google} alt="play_store" className="rounded-lg" />
                </div>
            </div>

        </section>

    )
}

export default App