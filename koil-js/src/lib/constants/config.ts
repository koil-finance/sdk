import { Network } from './network';
import { BalancerNetworkConfig } from '@/types';

export const balancerVault = '0xBA12222222228d8Ba445958a75a0704d566BF2C8';

export const BALANCER_NETWORK_CONFIG: Record<Network, BalancerNetworkConfig> = {
  [Network.FUSE]: {
    chainId: Network.FUSE, //1
    addresses: {
      contracts: {
        vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        multicall: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
        lidoRelayer: '0xdcdbf71A870cc60C6F9B621E28a7D3Ffd6Dd4965',
      },
      tokens: {
        wrappedNativeAsset: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        lbpRaisingTokens: [
          '0x6B175474E89094C44Da98b954EedeAC495271d0F',
          '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
          '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        ],
        stETH: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
        wstETH: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
      },
    },
    urls: {
      subgraph: 'https://api.thegraph.com/subgraphs/name/koil-finance/koil-v2',
    },
    pools: {
      bbausd: {
        id: '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb20000000000000000000000fe',
        address: '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb2',
      },
    },
  },
  [Network.FUSE_SPARK]: {
    chainId: Network.FUSE_SPARK, //5
    addresses: {
      contracts: {
        vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        multicall: '0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e',
      },
      tokens: {
        wrappedNativeAsset: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
      },
    },
    urls: {
      subgraph:
        'https://api.thegraph.com/subgraphs/name/koil-finance/koil-fuse-spark-v2',
    },
    pools: {},
  },
};

export const networkAddresses = (
  chainId: number
): BalancerNetworkConfig['addresses'] =>
  BALANCER_NETWORK_CONFIG[chainId as Network].addresses;
