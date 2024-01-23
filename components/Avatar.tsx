//next image
import Image from "next/image";

export const Avatar = () => {
    return (
        <div className='hidden xl:flex xl:max-w-none'>
            <Image
                src={'/avatar4.png'}
                width={737}
                height={678}
                alt=''
            />
        </div>
    )
};

