import { useEffect } from "react";
import gsap from "gsap";

const useGsapPageTransition = (ref) => {
	useEffect(() => {
		if (!ref?.current) return;
		gsap.fromTo(
			ref.current,
			{ opacity: 0, x: 100 },
			{ opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
		);
	}, [ref]); 
	return null;
};

export { useGsapPageTransition };


// варианты ...
// выдвигается снизу в верх

// 1. gsap.fromTo(
// 	ref.current,
// 	{ opacity: 0, y: 20 },
// 	{ opacity: 1, y: 0, duration: 1, ease: "power3.out" }
// );

// 2. с права на лево
// gsap.fromTo(
// 	ref.current,
// 	{ opacity: 0, x: 100 },
// 	{ opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
// );

// 3. увеличивается с центра
// 	gsap.fromTo(
// 		ref.current,
// 		{ opacity: 0, scale: 0.8 },
// 		{ opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
// 	);

// 4. с начала появляются к верх ногами, потом переворачиваются
//   gsap.fromTo(
//     ref.current.children,
//     { opacity: 0, rotate: -90 },
//     { opacity: 1, rotate: 0, duration: 0.6, stagger: 0.2, ease: "power3.out" }
//   );


// 5. [самый худший - сначала все мутное потом улучается]
//   gsap.fromTo(
//     ref.current,
//     { opacity: 0, filter: "blur(10px)" },
//     { opacity: 1, filter: "blur(0px)", duration: 1, ease: "power3.out" }
//   );
