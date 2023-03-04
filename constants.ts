import {
  PreSaleVesting_ABI,
  PreSaleVesting_Address,
} from './config/Mainnet/PreSaleVesting';
import { USDT_ABI, USDT_ContractAddress } from './config/Mainnet/USDT';
import {
  YPredictPreSale_ABI,
  YPredictPreSale_address,
} from './config/Mainnet/YPredictPreSale';
import Web3 from 'web3';

export const STEPS_STATUS = {
  step_1: { status: 'blocked' },
  step_2: { status: 'blocked' },
  step_3: { status: 'blocked' },
};

export const MATIC_NETWORK_INFO = {
  chainId: '0x89',
  rpcUrls: ['https://polygon-rpc.com/'],
  chainName: 'Polygon Mainnet',
  nativeCurrency: {
    name: 'MATIC',
    symbol: 'MATIC',
    decimals: 18,
  },
  blockExplorerUrls: ['https://polygonscan.com/'],
};

const rpcURL = 'https://polygon-rpc.com/';

export const getWeb3 = (provider?: any) => {
  return new Web3(Web3.givenProvider || rpcURL);
};

export const createUSDTContract = (web3?: any) => {
  if (!web3) {
    web3 = getWeb3();
  }
  return new web3.eth.Contract(USDT_ABI, USDT_ContractAddress);
};

export const createPreSaleVestingContract = (web3?: any) => {
  if (!web3) {
    web3 = getWeb3();
  }
  return new web3.eth.Contract(PreSaleVesting_ABI, PreSaleVesting_Address);
};

export const createYPredictPreSaleContract = (web3?: any) => {
  if (!web3) {
    web3 = getWeb3();
  }
  return new web3.eth.Contract(YPredictPreSale_ABI, YPredictPreSale_address);
};

export const GAS_LIMIT = 3000000;
export const MAX_FEE_PER_GAS = 31000000000;
export const USDT_PRICE_FOR_TOKEN = '37500';
export const MIN_AMOUNT_TO_INVEST = '100000';
// 3 if MIN_AMOUNT_TO_INVEST = "100000"
// 27 if MIN_AMOUNT_TO_INVEST = "1000000"
// 267 if MIN_AMOUNT_TO_INVEST = "10000000"
// 2667 if MIN_AMOUNT_TO_INVEST = "100000000"
export const MIN_TOKEN_AMOUNT = 3;
export const DEFAULT_DECIMALS = 18;
export const USDT_CONTRACT_DECIMALS = 6;

export const aggregatorV3InterfaceABI = [
  {
    inputs: [],
    name: 'decimals',
    outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'description',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint80', name: '_roundId', type: 'uint80' }],
    name: 'getRoundData',
    outputs: [
      { internalType: 'uint80', name: 'roundId', type: 'uint80' },
      { internalType: 'int256', name: 'answer', type: 'int256' },
      { internalType: 'uint256', name: 'startedAt', type: 'uint256' },
      { internalType: 'uint256', name: 'updatedAt', type: 'uint256' },
      { internalType: 'uint80', name: 'answeredInRound', type: 'uint80' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'latestRoundData',
    outputs: [
      { internalType: 'uint80', name: 'roundId', type: 'uint80' },
      { internalType: 'int256', name: 'answer', type: 'int256' },
      { internalType: 'uint256', name: 'startedAt', type: 'uint256' },
      { internalType: 'uint256', name: 'updatedAt', type: 'uint256' },
      { internalType: 'uint80', name: 'answeredInRound', type: 'uint80' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'version',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
];

export const priceFeedContract = () => {
  const web3 = getWeb3();
  return new web3.eth.Contract(
    //@ts-ignore
    aggregatorV3InterfaceABI,
    '0xAB594600376Ec9fD91F8e885dADF0CE036862dE0'
  );
};

export const MIN_USD = 1;
