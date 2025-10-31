'use client'
import { useState } from 'react'
import { useAccount, useConnect, useSignMessage, useDisconnect } from 'wagmi'

export default function WagmiDemo() {

  const { address, isConnected } = useAccount()
  const { connect, connectors, error, isPending } = useConnect()
  const { disconnect } = useDisconnect()


  const { data: signature, signMessage } = useSignMessage()

  const [status, setStatus] = useState('')
  const messageToSign = 'Hello from wagmi!'

  const handleSignMessage = () => {
    if (!isConnected) {
      setStatus('Please connect your wallet first.')
      return
    }
    setStatus('Please sign the message in your wallet.')
    signMessage({ message: messageToSign })
  }

  const buttonStyle = {
    padding: '10px 15px',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    margin: '10px 5px'
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Wagmi连接钱包 Signature Demo</h1>
      
      {isConnected ? (
        <div>
          <p>Connected Address: {address}</p>
          <button onClick={handleSignMessage} style={buttonStyle}>
            Sign Message
          </button>
          <button onClick={() => disconnect()} style={buttonStyle}>
            Disconnect
          </button>
        </div>
      ) : (
        <button onClick={() => connect()} style={buttonStyle}>
          Connect Wallet
        </button>
      )}

      <p>Status: {status}</p>

      {signature && (
        <div>
          <p>Message Signed: {messageToSign}</p>
          <p>Signature: {signature}</p>
        </div>
      )}
    </div>
  )
}
