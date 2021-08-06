import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData }) {
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
					<h2 className="text-4xl font-semibold pb-5 py-8">Live Anywhere</h2>
				</section>
			</main>
		</div>
	);
}

export async function getStaticProps() {
	const exploreData = await await fetch("https://links.papareact.com/pyp").then(
		(res) => res.json()
	);

	return {
		props: {
			exploreData: exploreData,
		},
	};
}
