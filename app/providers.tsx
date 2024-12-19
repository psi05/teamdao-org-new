'use client';

import { OnchainKitProvider } from '@coinbase/onchainkit';
import {
	connectorsForWallets,
	darkTheme,
	RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import {
	coinbaseWallet,
	metaMaskWallet,
	rainbowWallet,
	walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import {
	cookieStorage,
	createConfig,
	createStorage,
	http,
	WagmiProvider,
} from 'wagmi';
import { arbitrum, base, mainnet, optimism, polygon } from 'wagmi/chains';

const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			<OnchainKitProvider
				apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
				chain={base}
				config={{
					wallet: {
						display: 'modal',
					},
				}}
			>
				<WagmiProvider
					config={createConfig({
						ssr: true,
						chains: [arbitrum, base, mainnet, optimism, polygon],
						storage: createStorage({
							storage: cookieStorage,
						}),
						transports: {
							[arbitrum.id]: http(),
							[base.id]: http(),
							[mainnet.id]: http(),
							[optimism.id]: http(),
							[polygon.id]: http(),
						},
						connectors: connectorsForWallets(
							[
								{
									groupName: 'Recommended',
									wallets: [rainbowWallet, walletConnectWallet],
								},
								{
									groupName: 'Other Wallets',
									wallets: [rainbowWallet, metaMaskWallet, coinbaseWallet],
								},
							],
							{
								appName: 'T.E.A.M DAO',
								projectId: process.env.NEXT_PUBLIC_RAINBOWKIT_PROJECT_ID,
							}
						),
					})}
				>
					<RainbowKitProvider modalSize='compact' theme={darkTheme()}>
						{children}
					</RainbowKitProvider>
				</WagmiProvider>
			</OnchainKitProvider>
		</QueryClientProvider>
	);
}
