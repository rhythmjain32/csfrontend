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

const MySnippet = (props) => {
    const {snip, token} = props
    const cards = snip;
    // console.log(snip)
    return (
        <>
            <Head>
                <title>My Snippet</title>
            </Head>
            <div className="min-h-screen bg-section_secondary">
            
            <div className={`ml-20 ${sty.card}`}>
                {cards.map(card => (
                    <Cardlayout {...card} key={card._id} profile_api='https://source.unsplash.com/500x500/?face' token={token} />
                ))}
            </div>
            </div>
            <CustomAlert />
            <Footer />
            
            
        </>
    );
}

export default MySnippet;