import Image from "next/image";
import {
	SearchIcon,
	GlobeAltIcon,
	MenuIcon,
	UserCircleIcon,
	UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
function Header() {
	const [searchInput, setSearchInput] = useState("");

	return (
		<header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
			{/* left */}
			<div className="relative flex items-center h-10 cursor-pointer my-auto ">
				<Image
					src="https://links.papareact.com/qd3"
					layout="fill"
					objectFit="contain" // it does not allow image to change it's aspect ratio
					objectPosition="left"
				/>
			</div>
			{/* middle - search*/}
			<div className="flex items-center md:border-2 rounded-full py-2 shadow-sm">
				<input
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
					className="flex-grow pl-5 bg-transparent outline-none text-gray-500"
					type="text"
					placeholder="Start your search"
				></input>
				<SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2"></SearchIcon>
			</div>

			{/* right */}
			<div className="flex items-center space-x-4 justify-end text-gray-500">
				<p className="hidden md:inline-flex">Become a host</p>
				<GlobeAltIcon className="h-6 cursor-pointer"></GlobeAltIcon>
				<div
					className="flex items-center space-x-2 border-2 p-2 rounded-full shadow-sm cursor-pointer
                "
				>
					<MenuIcon className="h-6"></MenuIcon>
					<UserCircleIcon className="h-6"></UserCircleIcon>
				</div>
			</div>
		</header>
	);
}

export default Header;
