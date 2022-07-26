import React from 'react'
import { UserPost } from './endpoints/UserPost'
import { TokenPost } from './endpoints/TokenPost';

export const Api = () => {
  return (
    <div>
      <h2>USER POST</h2>
      <UserPost />
      <h2>TOKEN POST</h2>
      <TokenPost />
    </div>
  )
}