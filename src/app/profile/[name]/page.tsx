import React from 'react'

interface IProps{
    params:{
        name:string
    },
    searchParams:{}
}
const Profile = ({params:{name}}:IProps) => {
    console.log(name )                                                                                                                                                                                                                                                                                  
  return (
    <div className='bg-yellow-300'>
        <h1 className='text-orange-700'>Profile: {name.toUpperCase()}</h1>
    </div>
  )
}



export default Profile