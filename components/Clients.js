import { clients } from '../constants'
import Image from 'next/image'

function Clients() {
    return (
        <section className='flex justify-center items-center my-20 w-full'>
            <div className='flex flex-wrap justify-center items-center gap-6 ss:gap-10 sm:gap-12 md:gap-10 w-full'>
                {clients.map((client) => (
                    <div key={client.id} className="flex flex-1 justify-center items-center hover:text-white h-full md:p-5 lg:p-10">
                        <Image id="company" alt="client" src={client.logo} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Clients