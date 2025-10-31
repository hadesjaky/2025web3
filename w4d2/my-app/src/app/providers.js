'use client'
import {
  RainbowKitProvider,
  getDefaultConfig,
  connectorsForWallets,
  darkTheme, lightTheme, midnightTheme
} from '@rainbow-me/rainbowkit'
import { injectedWallet, phantomWallet, metaMaskWallet, okxWallet, trustWallet, walletConnectWallet} from '@rainbow-me/rainbowkit/wallets'
import { WagmiProvider ,createConfig} from 'wagmi'
import {mainnet, arbitrum, sepolia} from 'wagmi/chains'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import '@rainbow-me/rainbowkit/styles.css'


// 关键：使用 connectorsForWallets 并包含 injectedWallet
const connectors = connectorsForWallets(
  [
    {
      groupName: '推荐',
      wallets: [
        // injectedWallet, // 自动检测
        metaMaskWallet,
        okxWallet,
        phantomWallet,
      ],
    },
    {
      groupName: '更多钱包',
      wallets: [
        trustWallet,
        walletConnectWallet,
      ],
    },
  ],
  {
    appName: '我的 DApp',
    projectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // 从 cloud.walletconnect.com 获取
  }
)
// const config = getDefaultConfig({
//     appName: 'My RainbowKit App',
//     projectId: 'YOUR_PROJECT_ID',
//     chains: [sepolia],
//     ssr: true, 
// })  
const config = createConfig({
  connectors,
  chains: [mainnet, arbitrum, sepolia],

})


export function Providers({ children }) {
    const [queryClient] = useState(() => new QueryClient())
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme({
        accentColor: '#7b3fe4', // 主色调
        accentColorForeground: 'white', // 主色调文字颜色
        borderRadius: 'large', // 'none' | 'small' | 'medium' | 'large'
        fontStack: 'system', // 'system' | 'rounded'
        overlayBlur: 'small', // 'none' | 'small' | 'large'
      })} 
        showRecentTransactions={true}
        coolMode>
          <div className="min-h-screen flex flex-col">
            <main className="flex-1">
              {children}
            </main>
          </div>
        </RainbowKitProvider >
      </QueryClientProvider>
    </WagmiProvider>
  )
}
