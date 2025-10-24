import {createRef, ReactNode} from "react";
import {TechnicalBlock} from "./TechnicalBlock"
import {technicalData} from "./technicalData"
import InfiniteSlider from "component/InfiniteSlider";
import {useGSAP} from "@gsap/react";
import {tweenFromToScroll} from "libs/gsap";

export const TechnicalSlider = () => {
	const ref = createRef<HTMLDivElement>();
	
	useGSAP(() => {
		tweenFromToScroll(
			ref.current,
			{x: 20, opacity: 0},
			{x: 0, opacity: 1},
		)
	})
	
	const items: ReactNode[] = technicalData.map((data) => {
		return (
			<TechnicalBlock
				imageUrl={data.imageUrl}
				caption={data.caption}
			/>
		)
	});
	
	return (
		<InfiniteSlider ref={ref} speed={30} items={items}/>
	)
}