import { type Address, zeroAddress as ETH_ADDRESS } from 'viem'
import { Chains } from './utils'

const ethereumTokenAddresses: Address[] = [
  ETH_ADDRESS, // ETH
  '0x6B175474E89094C44Da98b954EedeAC495271d0F', // DAI
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // USDC
  '0xdAC17F958D2ee523a2206206994597C13D831ec7', // USDT
  '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', // WBTC
  '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
  '0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6', // LINK
  '0x8505b9d2254A7Ae468c0E9dd10Ccea3A837aef5c', // COMP
  '0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72', // ENS
  '0x6810e776880C02933D47DB1b9fc05908e5386b96', // GNO
  '0x6De037ef9aD2725EB40118Bb1702EBb27e4Aeb24', // RNDR
  '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', // UNI
]

const optimismTokenAddresses: Address[] = [
  ETH_ADDRESS, // ETH
  '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', // DAI
  '0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db', // VELO
  '0xFf733b2A3557a7ed6697007ab5D11B79FdD1b76B', // ACX
  '0xFdb794692724153d1488CcdBE0C56c252596735F', // LIDO
  '0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6', // LINK
  '0x4200000000000000000000000000000000000042', // OP
  '0x9e1028F5F1D5eDE59748FFceE5532509976840E0', // PERP
  '0x6fd9d7AD17242c41f7131d257212c54A0e816691', // UNI
  '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85', // USDC
  '0x7F5c764cBc14f9669B88837ca1490cCa17c31607', // USDCE
  '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58', // USDT
  '0x68f180fcCe6836688e9084f035309E29Bf0A2095', // WBTC
  '0x4200000000000000000000000000000000000006', // WETH
]

const binanceSmartChainTokenAddresses: Address[] = [
  '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', // DAI
  '0xBf5140A22578168FD562DCcF235E5D43A02ce9B1', // UNI
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', // USDC
  '0x55d398326f99059fF775485246999027B3197955', // USDT
  '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', // WBNB
  '0x2170Ed0880ac9A755fd29B2688956BD959F933F8', // WETH
]

const polygonTokenAddresses: Address[] = [
  '0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3', // BAL
  '0x8505b9d2254A7Ae468c0E9dd10Ccea3A837aef5c', // COMP
  '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063', // DAI
  '0xC3C7d422809852031b44ab29EEC9F1EfF2A58756', // LIDO
  '0x831753DD7087CaC61aB5644b308642cc1c33Dc13', // QUICK
  '0xb33EaAd8d922B1083446DC23f610c2567fB5180f', // UNI
  '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359', // USDC
  '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', // USDCE
  '0xc2132D05D31c914a87C6611C10748AEb04B58e8F', // USDT
  '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6', // WBTC
  '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619', // WETH
  '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', // WMATIC
]

const baseTokenAddresses: Address[] = [
  ETH_ADDRESS, // ETH
  '0x4158734D47Fc9692176B5085E0F52ee0Da5d47F1', // BAL
  '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22', // cbETH
  '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb', // DAI
  '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA', // USDbC
  '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', // USDC
  '0x4200000000000000000000000000000000000006', // WETH
]

const arbitrumTokenAddresses: Address[] = [
  ETH_ADDRESS, // ETH
  '0x912CE59144191C1204E64559FE8253a0e49E6548', // ARB
  '0x23ee2343B892b1BB63503a4FAbc840E0e2C6810f', // AXL
  '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', // DAI
  '0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F', // FRAX
  '0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a', // GMX
  '0x539bdE0d7Dbd336b79148AA742883198BBF60342', // MAGIC
  '0x088cd8f5eF3652623c22D48b1605DCfE860Cd704', // VELA
  '0x3d9907F9a368ad0a51Be60f7Da3b97cf940982D8', // GRAIL
  '0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0', // UNI
  '0xaf88d065e77c8cC2239327C5EDb3A432268e5831', // USDC
  '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', // USDCE
  '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', // USDT
  '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f', // WBTC
  '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', // WETH
]

const avalancheTokenAddresses: Address[] = [
  '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70', // DAI
  '0x62edc0692BD897D2295872a9FFCac5425011c661', // GMX
  '0x5947BB275c521040051D82396192181b413227A3', // LINK
  '0x8eBAf22B6F053dFFeaf46f4Dd9eFA95D89ba8580', // UNI
  '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E', // USDC
  '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7', // USDT
  '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', // WAVAX
  '0x50b7545627a5162F82A992c33b87aDc75187B218', // WBTC
  '0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB', // WETH
]

export const CHAIN_TO_TOKENS: { [chainId: number]: Address[] | undefined } = {
  [Chains.ETHEREUM]: ethereumTokenAddresses,
  [Chains.OPTIMISM]: optimismTokenAddresses,
  [Chains.ARBITRUM_ONE]: arbitrumTokenAddresses,
  [Chains.POLYGON_POS]: polygonTokenAddresses,
  [Chains.BASE]: baseTokenAddresses,
  [Chains.BINANCE_SMART_CHAIN]: binanceSmartChainTokenAddresses,
  [Chains.AVALANCHE]: avalancheTokenAddresses,
}
