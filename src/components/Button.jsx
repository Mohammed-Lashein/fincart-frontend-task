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
