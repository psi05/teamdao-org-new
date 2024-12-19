// function Providers({ children }: { children: ReactNode }) {
// 	return (
// 		<QueryClientProvider client={queryClient}>
// 			<OnchainKitProvider
// 				apiKey={
// 					'organizations/fbafc5ee-7fc4-4b9b-8d7a-f4b304b9cf9a/apiKeys/83189fe4-f2d8-4a0f-8a0e-0f0e4c9606fa'
// 				}
// 				chain={base}
// 			>
// 				<WagmiProvider
// 					config={createConfig({
// 						ssr: true,
// 						chains: [base, mainnet, polygon, optimism, arbitrum],
// 						connectors,
// 						storage: createStorage({
// 							storage: cookieStorage,
// 						}),
// 						transports: {
// [mainnet.id]: http(),
// [polygon.id]: http(),
// [optimism.id]: http(),
// [arbitrum.id]: http(),
// [base.id]: http(),
// 						},
// 					})}
// 				>
// 					<RainbowKitProvider modalSize='compact' theme={darkTheme()}>
// 						{children}
// 					</RainbowKitProvider>
// 				</WagmiProvider>
// 			</OnchainKitProvider>
// 		</QueryClientProvider>
// 	);
// }

'use client';

import { OnchainKitProvider } from '@coinbase/onchainkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { createConfig, http, WagmiProvider } from 'wagmi';
import { arbitrum, base, mainnet, optimism, polygon } from 'wagmi/chains';
import { coinbaseWallet } from 'wagmi/connectors';

import { darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';

import { cookieStorage, createStorage } from 'wagmi';

import '@coinbase/onchainkit/styles.css';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import {
	metaMaskWallet,
	rainbowWallet,
	walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';

const queryClient = new QueryClient();

// const connectors = connectorsForWallets(
// 	[
// 		{
// 			groupName: 'Recommended',
// 			wallets: [rainbowWallet, walletConnectWallet],
// 		},
// 		{
// 			groupName: 'Other Wallets',
// 			wallets: [rainbowWallet, metaMaskWallet, coinbaseWallet],
// 		},
// 	],
// 	{
// 		appName: 'My RainbowKit App',
// 		projectId: process.env.NEXT_PUBLIC_RAINBOWKIT_PROJECT_ID as string,
// 	}
// );

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			<OnchainKitProvider
				apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
				chain={base}
				config={{
					appearance: {
						name: 'Your App Name', // Displayed in modal header
						logo: 'https://your-logo.com', // Displayed in modal header
						mode: 'auto', // 'light' | 'dark' | 'auto'
						theme: 'default', // 'default' or custom theme
					},
					wallet: {
						display: 'modal',
						termsUrl: 'https://...',
						privacyUrl: 'https://...',
					},
				}}
			>
				<WagmiProvider
					config={createConfig({
						ssr: true,
						chains: [arbitrum, base, mainnet, optimism, polygon],
						connectors: [
							coinbaseWallet({
								appName: 'onchainkit',
							}),
						],
						transports: {
							[arbitrum.id]: http(),
							[base.id]: http(),
							[mainnet.id]: http(),
							[optimism.id]: http(),
							[polygon.id]: http(),
						},
					})}
				>
					{children}
				</WagmiProvider>
			</OnchainKitProvider>
		</QueryClientProvider>
	);
}
