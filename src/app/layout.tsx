// import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
import Footer from '@/components/footer';

const montserrat = Montserrat({
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'MoryShop',
	description: 'MoryShop - Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>
				<Navbar />
				<ToastContainer />
				{children}
				<Footer />
			</body>
		</html>
	);
}