import '../styles/global.css';
import type { AppProps, AppType } from 'next/app';

//components
import { Layout } from '../components/Layout';
import { Transition } from '../components/Transition';

//router 
import { useRouter } from 'next/router';

//framer motion
import { AnimatePresence, motion } from 'framer-motion';

function Home({ Component, pageProps }: AppProps) {
    const router = useRouter();
    return (
        < >
            <Layout>
                <AnimatePresence mode='wait'>
                    <motion.div className='h-full'>
                        <Transition />
                        <Component {...pageProps} />
                    </motion.div>
                </AnimatePresence>
            </Layout>
        </>
    )
}

export default Home;