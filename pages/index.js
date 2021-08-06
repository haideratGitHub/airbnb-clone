import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardsData }) {
	return (
		<div className="">
			<Head>
				<title>Airbnb clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>
			<Banner></Banner>
			<main className="max-w-7xl mx-auto px-8 sm:px-16">
				<section className="pt-6">
					<h2 className="text-4xl font-semibold pb-5">Explore nearby</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{exploreData?.map(({ img, distance, location }) => (
							<SmallCard
								key={img} //wheneer use map, use a key. it avoids rendering entire list when we add something new
								img={img}
								distance={distance}
								location={location}
							></SmallCard>
						))}
					</div>
				</section>
				<section>
					<h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
					<div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
						{cardsData?.map(({ img, title }) => (
							<MediumCard key={img} img={img} title={title} />
						))}
					</div>
				</section>
				<section className="relative py-16 cursor-pointer">
					<LargeCard
						img="https://links.papareact.com/4cj"
						title="The Greatest Outdoors"
						description="Wishlists curated by Airbnb"
						buttonText="Get inspired"
					></LargeCard>
				</section>
			</main>
		</div>
	);
}

export async function getStaticProps() {
	const exploreData = await await fetch("https://links.papareact.com/pyp").then(
		(res) => res.json()
	);
	const cardsData = await await fetch("https://links.papareact.com/zp1").then(
		(res) => res.json()
	);

	return {
		props: {
			exploreData: exploreData,
			cardsData: cardsData,
		},
	};
}
