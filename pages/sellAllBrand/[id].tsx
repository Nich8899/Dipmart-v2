import { useRouter } from 'next/router'
import React from 'react'

const SellAllBrand = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>sellAllBrand {id}</div>
  )
}

export default SellAllBrand