import { 
    ETH_CHAIN_ID,
    OPTIMISM_CHAIN_ID, 
    ARBITRUM_CHAIN_ID, 
    BASE_CHAIN_ID, 
    POLYGON_CHAIN_ID, 
    AURORA_CHAIN_ID, 
    BSC_CHAIN_ID, 
    FANTOM_CHAIN_ID, 
    AVALANCHE_CHAIN_ID, 
    MOONRIVER_CHAIN_ID,
    MOONBEAM_CHAIN_ID,
    METIS_CHAIN_ID,
    DFK_CHAIN_ID,
    CANTO_CHAIN_ID,
    CRONOS_CHAIN_ID,
    DOGECHAIN_CHAIN_ID,
    KLAYTN_CHAIN_ID,
    BOBA_CHAIN_ID,
} from "./chain-ids"

  export const CHAIN_TO_ROUTER: { [chainId: number]: string } = {
    [ETH_CHAIN_ID]: '0x7e7a0e201fd38d3adaa9523da6c109a07118c96a',
    [BSC_CHAIN_ID]: '0x7e7a0e201fd38d3adaa9523da6c109a07118c96a',
    [OPTIMISM_CHAIN_ID]: '0x7e7a0e201fd38d3adaa9523da6c109a07118c96a',
    [POLYGON_CHAIN_ID]: '0x7e7a0e201fd38d3adaa9523da6c109a07118c96a',
    [BOBA_CHAIN_ID]: '0x7e7a0e201fd38d3adaa9523da6c109a07118c96a',
    [CANTO_CHAIN_ID]: '0x7e7a0e201fd38d3adaa9523da6c109a07118c96a',
    [CRONOS_CHAIN_ID]: '0x7e7a0e201fd38d3adaa9523da6c109a07118c96a',
    [ARBITRUM_CHAIN_ID]: '0x7e7a0e201fd38d3adaa9523da6c109a07118c96a',
    [MOONRIVER_CHAIN_ID]: '0x7e7a0e201fd38d3adaa9523da6c109a07118c96a',
    [BASE_CHAIN_ID]: '0x7e7a0e201fd38d3adaa9523da6c109a07118c96a',
    [AVALANCHE_CHAIN_ID]: '0x7e7a0e201fd38d3adaa9523da6c109a07118c96a',
    [DFK_CHAIN_ID]: '0x7e7a0e201fd38d3adaa9523da6c109a07118c96a',
    [DOGECHAIN_CHAIN_ID]: '0x7e7a0e201fd38d3adaa9523da6c109a07118c96a',
    [FANTOM_CHAIN_ID]: '0x7e7a0e201fd38d3adaa9523da6c109a07118c96a',
    [KLAYTN_CHAIN_ID]: '0x7e7a0e201fd38d3adaa9523da6c109a07118c96a',
    [METIS_CHAIN_ID]: '0x7e7a0e201fd38d3adaa9523da6c109a07118c96a',
    [MOONBEAM_CHAIN_ID]: '0x7e7a0e201fd38d3adaa9523da6c109a07118c96a',
    [AURORA_CHAIN_ID]: '0x7e7a0e201fd38d3adaa9523da6c109a07118c96a'
  } as const

  export const SynapseCCTPContract: Record< any, string> = {
    [ETH_CHAIN_ID]: '0xfB2Bfc368a7edfD51aa2cbEC513ad50edEa74E84',
    [OPTIMISM_CHAIN_ID]: '0x5e69c336661dde70404e3345BA61F9c01DdB4C36',
    [ARBITRUM_CHAIN_ID]: '0xfB2Bfc368a7edfD51aa2cbEC513ad50edEa74E84',
    [BASE_CHAIN_ID]: '0xfB2Bfc368a7edfD51aa2cbEC513ad50edEa74E84',
    [AVALANCHE_CHAIN_ID]: '0xfB2Bfc368a7edfD51aa2cbEC513ad50edEa74E84',
  }

  export const SYNAPSE_CCTP_ROUTER: Record< any, string> = {
    [ETH_CHAIN_ID]: '0xd359bc471554504f683fbd4f6e36848612349ddf',
    [OPTIMISM_CHAIN_ID]: '0xd359bc471554504f683fbd4f6e36848612349ddf',
    [ARBITRUM_CHAIN_ID]: '0xd359bc471554504f683fbd4f6e36848612349ddf',
    [BASE_CHAIN_ID]: '0xd359bc471554504f683fbd4f6e36848612349ddf',
    [AVALANCHE_CHAIN_ID]: '0xd359bc471554504f683fbd4f6e36848612349ddf',
  }

  export function getContractAddress(chainId: any): `0x${string}` | undefined {
    const address = SynapseCCTPContract[chainId];
    if (address && address.startsWith('0x')) {
      return address as `0x${string}`;
    }
    return undefined;
}

// export const CHAIN_TO_CONTRACT: { [chainId: number]: string } = {
//     [ETH_CHAIN_ID]: '0x2796317b0fF8538F253012862c06787Adfb8cEb6',
//     [BSC_CHAIN_ID]: '0xd123f70AE324d34A9E76b67a27bf77593bA8749f',
//     [OPTIMISM_CHAIN_ID]: '0xAf41a65F786339e7911F4acDAD6BD49426F2Dc6b',
//     [POLYGON_CHAIN_ID]: '0x8F5BBB2BB8c2Ee94639E55d5F41de9b4839C1280',
//     [BOBA_CHAIN_ID]: '0x432036208d2717394d2614d6697c46DF3Ed69540',
//     [CANTO_CHAIN_ID]: '0xDde5BEC4815E1CeCf336fb973Ca578e8D83606E0',
//     [CRONOS_CHAIN_ID]: '0xE27BFf97CE92C3e1Ff7AA9f86781FDd6D48F5eE9',
//     [ARBITRUM_CHAIN_ID]: '0x6F4e8eBa4D337f874Ab57478AcC2Cb5BACdc19c9',
//     [MOONRIVER_CHAIN_ID]: '0xaeD5b25BE1c3163c907a471082640450F928DDFE',
//     [BASE_CHAIN_ID]: '0xf07d1C752fAb503E47FEF309bf14fbDD3E867089',
//     [AVALANCHE_CHAIN_ID]: '0xC05e61d0E7a63D27546389B7aD62FdFf5A91aACE',
//     [DFK_CHAIN_ID]: '0xE05c976d3f045D0E6E7A6f61083d98A15603cF6A',
//     [DOGECHAIN_CHAIN_ID]: '0x9508BF380c1e6f751D97604732eF1Bae6673f299',
//     [FANTOM_CHAIN_ID]: '0xAf41a65F786339e7911F4acDAD6BD49426F2Dc6b',
//     [KLAYTN_CHAIN_ID]: '0xAf41a65F786339e7911F4acDAD6BD49426F2Dc6b',
//     [METIS_CHAIN_ID]: '0x06Fea8513FF03a0d3f61324da709D4cf06F42A5c',
//     [MOONBEAM_CHAIN_ID]: '0x84A420459cd31C3c34583F67E0f0fB191067D32f',
//     [AURORA_CHAIN_ID]: '0xaeD5b25BE1c3163c907a471082640450F928DDFE'
//   } as const