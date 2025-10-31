'use client'
import { useState } from 'react'
import { 
  createWalletClient, 
  custom
} from 'viem'
import { sepolia } from 'viem/chains'

export default function ViemDemo() {
  const [address, setAddress] = useState('')
  const [signature, setSignature] = useState('')
  const [status, setStatus] = useState('')
  const messageToSign = 'Hello from viem!'

  const signMessageWithMetaMask = async () => {
    setStatus('Connecting to MetaMask...')
    if (!window.ethereum) {
      setStatus('MetaMask is not installed.')
      return
    }

    try {
      const client = createWalletClient({
        chain: sepolia,
        transport: custom(window.ethereum)
      })

      const [connectedAddress] = await client.requestAddresses()
      setAddress(connectedAddress)
      // console.log('Connected Address:', connectedAddress)
      setStatus('Address connected. Please sign the message.')

      const signedMessage = await client.signMessage({
        account: connectedAddress,
        message: messageToSign
      })

      setSignature(signedMessage)
      // console.log('Signature:', signedMessage)
      setStatus('Message signed successfully!')
    } catch (error) {
      // console.error('Error signing message:', error)
      setStatus(`Error: ${error.message}`)
    }
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
    margin: '10px 0'
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Viem的 MetaMask Signature Demo</h1>
      <button onClick={signMessageWithMetaMask} style={buttonStyle}>
        Sign Message with MetaMask
      </button>
      <p>Status: {status}</p>
      {address && <p>Connected Address: {address}</p>}
      {signature && (
        <div>
          <p>Message Signed: {messageToSign}</p>
          <p>Signature: {signature}</p>
        </div>
      )}
    </div>
  )
}
