import Navbar from "./Navbar"

function Layout({ children }) {
	return (
		<div className='bg-primary w-full overflow-hidden'>
			<Navbar />
			<main>
				{children}
			</main>
		</div>
	)
}

export default Layout