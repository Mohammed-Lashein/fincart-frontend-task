/* 
	This component is really a good one . 
	It provides a more clickable space while also preserving the visual aspect of the icon
	(no need to make it bigger unnecessarily just to make it more clickable)

	I followed the conventions present in this free 5-day workshop by tailwindcss : 
	https://tailwindcss.com/build-uis-that-dont-suck

*/

function Button({ icon, iconDescription, onClick = () => {} }) {
	return (
		<button
			className='relative size-6'
			onClick={() => {
				console.log("I was clicked ! with bubbling or not ?")
			}}
		>

      {/* For some reason -translate-1/2 is not working and I don't know why, so
      I will use the more verbose syntax */}
			<span className='bg-pink-500/15 absolute top-1/2 left-1/2 transform size-12 -translate-x-1/2 -translate-y-1/2'></span>
			<img
				src={icon}
				alt={iconDescription}
			/>
		</button>
	)
}
export default Button
