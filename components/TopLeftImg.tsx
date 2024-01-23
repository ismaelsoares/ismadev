import Image from 'next/image';

export const TopLeftImg = () => {
    return (
        <div className='top-0 left-0 z-10 absolute mix-blend-color-dodge w-[200px] xl:w-[400px] opacity-50'>
            <Image src='/top-left-img.png' width={400} height={400} alt='image' />
        </div>
    )
};

