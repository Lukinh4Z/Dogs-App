import React from 'react'
import { UserPost } from './endpoints/UserPost'
import { TokenPost } from './endpoints/TokenPost';

export const Api: React.FC = () => {
  return (
    //essa página serve apenas como teste da API.
    <div>
      <h2>USER POST</h2>
      <UserPost />
      <h2>TOKEN POST</h2>
      <TokenPost />
    </div>
  )
}