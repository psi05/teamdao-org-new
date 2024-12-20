'use client';

import BlockscoutTokenInfo from '@/libraries/Blockscout/Info/tokenInfo';
import DexData from '@/libraries/Dex/dexPairs';
import { navItems } from '@/sources/navbarItems';
import NavbarItems from './NavbarItems';

export default function Navbar() {
	const { dexPairs, dexPairsLoading } = DexData();
	const { BSTokenInfo, BSTokenInfoLoading } = BlockscoutTokenInfo();

	const priceData =
		!dexPairsLoading && dexPairs?.pairs?.[0]?.priceUsd
			? parseFloat(dexPairs.pairs[0].priceUsd).toFixed(2)
			: '0.00';

	const holdersData =
		!BSTokenInfoLoading && BSTokenInfo?.token?.holders
			? BSTokenInfo.token.holders
			: 0;

	const marketCap =
		!dexPairsLoading && dexPairs?.pairs?.[0]?.marketCap
			? dexPairs.pairs[0].marketCap
			: '0';

	const vol24 =
		!dexPairsLoading && dexPairs?.pairs?.[0]?.volume?.h24
			? Math.floor(dexPairs.pairs[0].volume.h24)
			: '0';

	const navbarItems = [...(navItems as any)];

	return (
		<NavbarItems
			navbarItems={navbarItems}
			priceData={priceData}
			holdersData={holdersData}
			marketCap={marketCap}
			vol24={vol24}
		/>
	);
}
