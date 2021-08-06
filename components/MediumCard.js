import React from "react";
import Image from "next/dist/client/image";
function MediumCard({ img, title }) {
	return (
		<div className="rounded-xl cursor-pointer hover:scale-105 transform transition duration-200 ease-out">
			<div className="relative h-80 w-80 ">
				<Image src={img} layout="fill" className="rounded-xl"></Image>
			</div>
			<h3 className="text-2xl mt-3">{title}</h3>
		</div>
	);
}

export default MediumCard;
