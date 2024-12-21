import { z } from "zod";

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			[key: string]: string;
		}
	}

	interface ETF {
		name: string;
		"24hour_change": string;
		volume: string;
		marketCap: number;
		logo: string;
	}

	interface Pool {
		attributes: {
			base_token_price_usd: string;
			fdv_usd: string;
			market_cap_usd: string | null;
			volume_usd: {
				h24: string;
			};
			reserve_in_usd: string;
		};
	}

	interface NetworkType {
		id: string;
		attributes: {
			name: string;
		};
	}

	interface TopPoolType {
		id: string;
		attributes: {
			name: string;
			address: string;
			base_token_price_usd: string;
			fdv_usd: string;
			price_change_percentage: {
				h24: string;
			};
			volume_usd: {
				h24: string;
			};
			reserve_in_usd: string;
		};
	}

	interface TokenType {
		attributes: {
			address: string;
			name: string;
			symbol: string;
			gt_score: number;
			websites: string[];
		};
		relationships: {
			network: {
				data: {
					id: string;
				};
			};
		};
	}

	interface MergedBuyAndSellType {
		attributes: {
			kind: string;
			block_timestamp: string;
			price_from_in_usd: string;
			from_token_amount: string;
			volume_in_usd: string;
			tx_from_address: string;
			tx_hash: string;
		};
	}

	interface BuySellTransactionType {
		Block: {
			Time: string;
		};
	}

	interface PageParams {
		params: {
			slug: string[];
		};
	}

	interface TableProps {
		children: React.ReactNode;
	}

	interface TableProps {
		children: React.ReactNode;
	}

	interface TableBodyProps {
		children: React.ReactNode;
	}

	interface TableDataProps {
		children: React.ReactNode;
	}

	interface TableHeadProps {
		children: React.ReactNode;
	}

	interface TableHeadingProps {
		children: React.ReactNode;
	}

	interface TableRowProps {
		children: React.ReactNode;
	}

	interface Loading {
		loading: boolean;
		setLoading: (loading: boolean) => void;
	}

	interface Search {
		query: string;
		setQuery: (query: string) => void;
	}

	interface Block {
		network: string;
		existing: boolean;
		finalized: boolean;
		number: string;
		confirmations: string;
		timestamp: string;
		transactionCount: string;
		difficulty: string;
		size: string;
		gasUsed: string;
		gasLimit: string;
		gasBaseFee: string;
		hash: string;
		parent: string;
		state: string;
		nonce: string;
		transactions: BlockTransaction[];
	}

	interface TX {
		network: string;
		status: string;
		hash: string;
		blockNumber: string;
		blockConfirmations: string;
		timestamp: string;
		timestampFull: string;
		from: string;
		to: string;
		value: string;
		valueUSD: number;
		fee: string;
		feeUSD: number;
		gasPrice: string;
		gasLimit: string;
		index: string;
		input: string;
		data: string;
		chain: string;
		logs: Log[];
	}

	interface Wallet {
		network: string;
		existing: boolean;
		wallet: string;
		value: string;
		balance: string;
		transactions: string;
		firstExternalTransaction: string;
		lastExternalTransaction: string;
		externalTransactions: AssetTransfersWithMetadataResponse;
		tokenTransfers: AssetTransfersWithMetadataResponse;
		nftTransfers: AssetTransfersWithMetadataResponse;
	}

	interface Contract {
		network: string;
		existing: boolean;
		contract: string;
		value: string;
		balance: string;
		transactions: string;
		firstExternalTransaction: string;
		lastExternalTransaction: string;
		externalTransactions: AssetTransfersWithMetadataResponse;
		tokenTransfers: AssetTransfersWithMetadataResponse;
		nftTransfers: AssetTransfersWithMetadataResponse;
	}

	interface Contract {
		network: string;
	}

	interface Token {
		network: string;
	}

	interface BlockTransaction {
		hash: string;
		method: string;
		age: Date;
		from: string;
		to: string;
		value: string;
	}

	interface Result {
		network: string;
		type: string;
	}
}
