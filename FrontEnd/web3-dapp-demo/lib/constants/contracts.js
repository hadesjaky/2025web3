export const CONTRACTS = {
    // ERC20 代币
    USDT: process.env.NEXT_PUBLIC_USDT_ADDRESS || '0x...',
    USDC: process.env.NEXT_PUBLIC_USDC_ADDRESS || '0x...',
  
    // DEX 合约
    SWAP_ROUTER: process.env.NEXT_PUBLIC_SWAP_ROUTER_ADDRESS || '0x...',
    POOL_FACTORY: process.env.NEXT_PUBLIC_POOL_FACTORY_ADDRESS || '0x...',
  
    // Farm 合约
    FARM: process.env.NEXT_PUBLIC_FARM_ADDRESS || '0x...',
    REWARD_TOKEN: process.env.NEXT_PUBLIC_REWARD_TOKEN_ADDRESS || '0x...',
  
    // LaunchPad 合约
    LAUNCHPAD: process.env.NEXT_PUBLIC_LAUNCHPAD_ADDRESS || '0x...',
  }