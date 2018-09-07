(function(){
	'use strict';
	
	const svg = d3.select('svg');
	const height = parseFloat(svg.style('height'));
	const width = parseFloat(svg.style('width'));
	const eyeRadius = 30;
	const eyeSpacing = 70;
	const eyeYOffset = -80;
	const eyeBrowWidth = 50;
	const eyeBrowHeight = 15;
	const eyeBrowYOffset = -60;
	
	const g = svg
		.append('g')
			.attr('transform', `translate(${width/2}, ${height/2})`);
		
	const circle = g
		.append('circle')
			.attr('r', height/2)
			.attr('fill', 'yellow')
			.attr('stroke', 'black');
		
	const eyesG = g
		.append('g')
			.attr('transform', `translate(0, ${eyeYOffset})`);
		
	const leftEye = eyesG
		.append('circle')
			.attr('r', eyeRadius)
			.attr('cx', -eyeSpacing);
		
	const rightEye = eyesG
		.append('circle')
			.attr('r', eyeRadius)
			.attr('cx', eyeSpacing);
		
	const eyebrowsG = eyesG
		.append('g')
			.attr('transform', `translate(0, ${eyeBrowYOffset})`);
			
	eyebrowsG
		.transition().duration(250)
			.attr('transform', `translate(0, ${eyeBrowYOffset - 30})`)
		.transition().duration(250)
			.attr('transform', `translate(0, ${eyeBrowYOffset})`)
		.transition().duration(250)
			.attr('transform', `translate(0, ${eyeBrowYOffset - 30})`)
		.transition().duration(250)
			.attr('transform', `translate(0, ${eyeBrowYOffset})`);
		
	const leftEyebrow = eyebrowsG
		.append('rect')
			.attr('x', -eyeSpacing - eyeBrowWidth / 2)
			.attr('width', eyeBrowWidth)
			.attr('height', eyeBrowHeight);
	
	const rightEyebrow = eyebrowsG
		.append('rect')
			.attr('x', eyeSpacing - eyeBrowWidth / 2)
			.attr('width', eyeBrowWidth)
			.attr('height', eyeBrowHeight);
			
	const mouth = g
		.append('path')
			.attr('d', d3.arc()({
				innerRadius: 150,
				outerRadius: 170,
				startAngle: Math.PI/2,
				endAngle: Math.PI * 1.5
			}))
			.attr('cx', 100)
			.attr('cy', 200);
})();