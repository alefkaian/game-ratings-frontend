import Footer from '@/components/specific/Footer';
import Navbar from '@/components/specific/Navbar';
import { Outlet } from 'react-router-dom';

const DefaultPageLayout = () => {
	return (
		<div className='flex flex-col min-h-screen max-w-screen bg-brand-black  text-brand-orange-light'>
			<Navbar />
			<main className='flex-1'>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default DefaultPageLayout;
