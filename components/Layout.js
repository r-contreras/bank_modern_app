function Layout({ children }) {
	return (
		<div className='bg-primary w-full overflow-hidden'>
			<div className="sm:px-16 px-6 flex justify-center items-center">
				<main>
					{children}
				</main>
			</div>
		</div>
	)
}

export default Layout