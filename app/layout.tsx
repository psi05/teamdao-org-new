import Footer from '@/components/Shared/Layout/Footer/Footer';
import Navbar from '@/components/Shared/Layout/Navbar/Navbar';

import '@coinbase/onchainkit/styles.css';
import './globals.css';

import FONTS from '@/configurations/fonts';
import METADATA from '@/configurations/metadata';
import type { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';
import AnimatedCursor from 'react-animated-cursor';
import Providers from './providers';

export const metadata: Metadata = METADATA;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${FONTS.alpha.className} bg-black`}>
				<Providers>
					<AnimatedCursor
						innerSize={100}
						outerSize={150}
						outerAlpha={0}
						clickables={[
							'a',
							'input[type="text"]',
							'input[type="email"]',
							'input[type="number"]',
							'input[type="submit"]',
							'input[type="image"]',
							'label[for]',
							'select',
							'textarea',
							'button',
							'.cursor-hover',
						]}
					>
						<Image
							src='/cursor.png'
							width={100}
							height={100}
							alt='Sniper cursor'
							className='select-none opacity-80'
						/>
					</AnimatedCursor>
					<Navbar />
					{children}
					<Footer />
				</Providers>
				<Script
					id='google-tag-manager'
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
				/>
				<Script id='google-analytics'>
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
							page_path: window.location.pathname,
						});
					`}
				</Script>
			</body>
		</html>
	);
}
