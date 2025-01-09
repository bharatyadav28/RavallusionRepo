import Image from "next/image";


const LessonModuleList = ({ heading, subItems }) => {
    return (
        <>
            <h1 className='text-lg font-semibold font-[Satoshi] mb-4'>{heading}</h1>

            <div className='flex flex-col gap-y-4'>
                {
                    subItems && subItems.map((items, i) => (
                        <LessonCard img={items.img} title={items.title} description={items.description} key={i} />
                    ))
                }
            </div>
        </>
    )
}



export const LessonCard = ({ img, title, description }) => {
    return (
        <div className="flex gap-x-3 h-20 items-center cursor-pointer">

            <div className="bg-red-400 rounded-2xl w-40 h-20 relative">
                <Image src={img} alt="video" fill style={{ borderRadius: '16px', objectFit: "cover" }} />
                <span style={{
                    background: 'rgba(0, 0, 0, 0.50)',
                    backdropFilter: 'blur(5.400000095367432px)'
                }} className='px-1 py-[2px] text-[8px] absolute top-2 right-2 rounded-md font-[Satoshi]'>20:30</span>
            </div>

            <div className="flex-grow w-32">
                <h1 className="text-xs font-normal mb-1 font-[Satoshi]">
                    {title}
                </h1>

                <p className="text-[10px] truncate whitespace-nowrap">
                    {description}
                </p>
            </div>
        </div>

    )
}



export default LessonModuleList;