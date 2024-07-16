import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { server } from '../main'
import Loader from './Loader'
import { Button, Container, HStack,  Radio, RadioGroup } from '@chakra-ui/react'
import ErrorComponent from './ErrorComponent'
import CoinCard from './CoinCard'

function Coins() {
  const apiKey=import.meta.env.VITE_COINGECKO_API_KEY
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [currency, setCurrency] = useState("inr")
  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$"

  const changePage = (pageNo) => {
    setPage(pageNo)
    setLoading(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const btns = new Array(132).fill(1)

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}&x_cg_demo_api_key=${apiKey}`)
        setCoins(data)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }
    fetchCoins()
  }, [currency, page])

  if (error) return <ErrorComponent message={"Error while fetching Coins"} />

  return (<Container maxW={"container.xl"}>
    {loading ? <Loader /> :
      <>
        <RadioGroup value={currency} onChange={setCurrency} p={"6"} paddingBottom={"2"}>
          <HStack spacing={"4"}>
            <Radio value={"inr"}>INR</Radio>
            <Radio value={"usd"}>USD</Radio>
            <Radio value={"eur"}>EUR</Radio>
          </HStack>
        </RadioGroup>
        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
          {coins.map((i) => (
            <CoinCard key={i.id} id={i.id} name={i.name} img={i.image} symbol={i.symbol} price={i.current_price} currencySymbol={currencySymbol} />
          ))}
        </HStack>
        <HStack w={"full"} overflowX={"auto"} p={"8"}>
          {btns.map((item, index) => (
            <Button key={index} bgColor={"blackAlpha.900"} color={"white"} onClick={() => changePage(index + 1)}>{index + 1}</Button>
          ))}
        </HStack>
      </>}
  </Container>
  )
}



export default Coins

