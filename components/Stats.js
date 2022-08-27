import { stats } from '../constants'


function Stats() {
    return (
        <section className='flex flex-row flex-wrap gap-10 justify-center items-center sm:mb-20 mb-6 w-full'>
            {stats.map((stat) => (
                <div key={stat.id} className='flex flex-[1-1-50%] lg:flex-1 justify-center items-center'>
                    <div className="flex justify-center items-center" key={stat.id}>
                        <h4 className='font-poppins font-semibold text-[30px] xs:leading-[53px] leading-[43px] '>{stat.value}</h4>
                        <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] text-gradient uppercase ml-3'>{stat.title}</p>
                    </div>
                </div>
            ))
            }
        </section >
    )
}

export default Stats