import Button from './Button'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
function Navbar() {
	return (
		<div className='flex justify-between w-full px-10 py-3 align-center'>
			{/* mobile logo */}
			<div className='block md:hidden'>
				<img
					src='/logo-mobile.png'
					alt=''
					className='size-8'
				/>
			</div>

			{/* desktop logo */}
			<div className='hidden w-40 h-6 md:block '>
				<img
					src='/logo.png'
					alt=''
				/>
			</div>

			{/* cart icon */}
			<IconButton onClick={() => console.log("I was clicked yay !")}>
			<ShoppingCartIcon />
			</IconButton>
		</div>
	)
}
export default Navbar
