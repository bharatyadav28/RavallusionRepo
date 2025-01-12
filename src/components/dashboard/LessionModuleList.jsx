import { OrangePlay } from "@/lib/svg_icons";
import Image from "next/image";


const LessonModuleList = ({ heading, subItems }) => {
    return (
        <>
            <h1 className='text-lg font-semibold mb-7 px-3'>{heading}</h1>

            <div className='flex flex-col gap-y-7'>
                {
                    subItems && subItems.map((items, i) => (
                        <LessonCard  img={items.img} title={items.title} duration={items.duration} description={items.description} key={i} />
                    ))
                }
            </div>
        </>
    )
}



export const LessonCard = ({ img, title, description, duration ,isplaying}) => {

    return (
        <div className="flex gap-x-3 items-center cursor-pointer px-3">

            <div className="rounded-xl w-40 h-20 relative ">
                <Image src={img} alt="video" fill style={{ borderRadius: "12px", objectFit: "cover" }} className={`${isplaying&& 'brightness-50'}`}/>
                <span style={{
                    background: 'rgba(0, 0, 0, 0.50)',
                    backdropFilter: 'blur(5.400000095367432px)'
                }} className='px-1 py-[2px] text-[10px] absolute top-2 right-2 rounded-sm '>{duration}</span>
                {
                    isplaying && (
                        <span className="absolute font-semibold text-orange-300 text-[10px] bottom-2 left-1 flex gap-x-1 items-center">
                            <span><OrangePlay /></span>  Now Playing
                        </span>

                    )
                }
            </div>

            <div className="flex-grow w-32">
                <h1 className="text-xs font-normal mb-1">
                    {isplaying?(<span className="text-sm text-orange-300">Opening file</span> ):title}
                </h1>

                <p className="text-[10px] truncate whitespace-nowrap">
                    {isplaying?"": description}
                </p>
            </div>
        </div>

    )
}



export default LessonModuleList;