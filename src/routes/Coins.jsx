import React, { useState } from 'react'
import styled from 'styled-components'


const Frame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

const Coin = styled.div`
    text-align: center;
    width: 100px;
    height: 30px;
    border-radius: 10px;
    background-color: ${(props) => (props.selected ? '#f99374' : 'white')};
    color: ${(props) => (props.selected ? 'white' : '#ff997a')};
    font-weight: 600;
    margin: 10px 0px;
    cursor: pointer;
`

export default function Coins() {

  const [selectedCoinId, setSelectedCoinId] = useState(null);

  const coins = [
    {
      "id": "btc-bitcoin",
      "name": "Bitcoin",
      "symbol": "BTC",
      "rank": 1,
      "is_new": false,
      "is_active": true,
      "type": "coin"
    },
    {
      "id": "eth-ethereum",
      "name": "Ethereum",
      "symbol": "ETH",
      "rank": 2,
      "is_new": false,
      "is_active": true,
      "type": "coin"
    },
    {
      "id": "usdt-tether",
      "name": "Tether",
      "symbol": "USDT",
      "rank": 3,
      "is_new": false,
      "is_active": true,
      "type": "token"
    }
  ]

  const handleCoinClick = (id) => {
    setSelectedCoinId(id);
  };

  return (
    <Frame>
      <Title>Coins</Title>
      {coins.map((coin) => <Coin key={coin.id}
          selected={selectedCoinId === coin.id}
          onClick={() => handleCoinClick(coin.id)}>{coin.name}</Coin>)}
    </Frame>

  )
}
