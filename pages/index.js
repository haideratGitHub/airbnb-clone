import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
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
