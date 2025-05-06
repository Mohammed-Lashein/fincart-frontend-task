import { CartIcon } from "../icons"
function Navbar() {
	return (
		<div className='w-full px-10 py-3 flex justify-between align-center'>
			{/* mobile logo */}
			<div className='block md:hidden'>
				<img
					src='/logo-mobile.png'
					alt=''
					className='size-8'
				/>
			</div>

			{/* desktop logo */}
			<div className='hidden md:block w-40 h-6 '>
				<img
					src='/logo.png'
					alt=''
				/>
			</div>

			{/* cart icon */}
			<button>
				<CartIcon />
			</button>
		</div>
	)
}
export default Navbar
