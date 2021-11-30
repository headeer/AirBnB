import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediunCard";
import bigCard from '../assets/2da67c1c-0c61-4629-8798-1d4de1ac9291.webp';
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({exploreData, cardsData}) {
    console.log(exploreData);
    return (
        <div className="">
            <Head>
                <title>AirBnB</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>


            <Header/>
            <Banner/>

            <main className="max-w-7xl mx-auto px-8 sm:px-16 ">
                <section className="pt-6">
                    <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {exploreData?.map(({img, distance, location}) =>
                            <SmallCard
                                key={img}
                                img={img}
                                distance={distance}
                                location={location}
                            />
                        )}
                    </div>
                </section>
                <section>
                    <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
                    <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
                        {cardsData?.map(({img, title}) =>
                            <MediumCard
                                key={img}
                                img={img}
                                title={title}
                            />
                        )}
                    </div>
                </section>
                <section>
                    <LargeCard
                        img={bigCard}
                        title="The Greatest Outdoors"
                        description="Wishlist curated by Airbnb."
                        buttonText="Get Inspired"
                    />
                </section>
            </main>
            <Footer />
        </div>
    )
}
export async function getStaticProps() {
    const exploreData = await fetch('https://links.papareact.com/pyp')
        .then(res => res.json());
    const cardsData = await fetch('https://links.papareact.com/zp1')
        .then(res => res.json());
    return {props: {exploreData, cardsData}};
}
