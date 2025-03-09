/* Gsap */
	gsap.registerPlugin(ScrollTrigger);

	const tlloader = gsap.timeline()

		tlloader
		.set('.loader__item', {yPercent: -100})
		.set('.loader__title', {opacity: 0})
		.to('.loader__item', {
			yPercent: 0,
			duration: 1.2,
			stagger: 0.25,
		})
	  	.to('.loader__item', {
			yPercent: 100,
			duration: 1.5,
			stagger: 0.25,
		})
		
		.to('.loader__title', {
			opacity: 1,
			duration: 1.2,
			scale: 1.2,
		})
		.set('.loader__item', {
			yPercent: -100,
		})
		.to('.loader__title', {
			opacity: 0,
			duration: 1,
			scale: 1,
		})
		.to('.loader', {
			yPercent: -100,
			duration: 1,
		})