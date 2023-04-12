import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Headers from './components/Headers'
import Box from './components/Box'
import SelectedServices from './components/SelectedServices'
import InfoInput from './components/InfoInput'
import TermCondtion from './components/TermCondtion'
import Payment from './components/payment'
import Bottom from './components/Bottom'
export default function Home() {
  return (
  <>
<div className=''>
     <Headers/>
     <Box/>
    <SelectedServices/>
    <InfoInput/>
    <Payment/>
    <TermCondtion/>
    <Bottom/>
  </div>
  </>
  )
}
