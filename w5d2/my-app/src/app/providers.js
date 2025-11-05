'use client'

import {http,WagmiProvider ,createConfig} from 'wagmi'
import {mainnet, arbitrum, sepolia} from 'wagmi/chains'
import { coinbaseWallet, metaMask } from "wagmi/connectors";

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { useState } from 'react'

// const sepoliaConfig = USE_CUSTOM_RPC ? {
//   ...sepolia,
//   rpcUrls: {
//     default: { http: [process.env.NEXT_PUBLIC_RPC_URL] },
//     public: { http: [process.env.NEXT_PUBLIC_RPC_URL] },
//   }
// } : sepolia

export const config = createConfig({
  chains: [sepolia],
  connectors: [
    metaMask({ extensionOnly: true }),
    coinbaseWallet(),
  ],
  transports: {
    [sepolia.id]: http(process.env.NEXT_PUBLIC_RPC_URL),
    // [arbitrum.id]: http(),
  },
})

// const config = createConfig({
//   connectors,
//   chains: [mainnet, arbitrum, sepolia],

// })


export function Providers({ children }) {
    const [queryClient] = useState(() => new QueryClient())
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
