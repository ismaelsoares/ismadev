//next image
import Image from "next/image";

export const Avatar = () => {
    return (
        <div className='hidden xl:flex xl:max-w-none'>
            <Image
                src={'/avatar7.png'}
                width={640}
                height={578}
                alt=''
                className="w-full h-full translate-z-0"
            />
        </div>
    )
};

