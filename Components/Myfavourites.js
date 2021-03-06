import Head from 'next/head'
import dynamic from "next/dynamic";
import sty from "../styles/discover.module.css";
import SkeletonCard from './SkeletonCard';
const Cardlayout = dynamic(() => import("./card"), {
    loading: () => <SkeletonCard />,
    ssr: false,
});
import Footer from './footer'
import CustomAlert from './CustomAlert'

const Myfavourites = (props) => {
    // console.log(props)
    let liked = true;
    const { snips_liked, token } = props
    // console.log(snips_liked)
    const cards = snips_liked
    return (
        <>
            <Head>
                <title>Favourites</title>
            </Head>            
            <div className={`ml-20 min-h-screen ${sty.card}`} >
                {cards.map(card => (
                    <Cardlayout {...card} key={card._id} profile_api='https://source.unsplash.com/500x500/?face' token={token} liked={liked} />
                ))}
            </div>
            <CustomAlert />
            <Footer />
        </>
    );
}

export default Myfavourites;
