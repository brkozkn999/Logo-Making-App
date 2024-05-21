import React from 'react'
import { Button } from './ui/button'
import { Download } from 'lucide-react'

export default function Header() {
  return (
    <div className='p-4 shadow-md border flex justify-between items-center'>
      <img src='/logo.svg'/>
      <Button className='flex gap-2 items-center'><Download className='h-4 w-4'/>Download</Button>
    </div>
  )
}
