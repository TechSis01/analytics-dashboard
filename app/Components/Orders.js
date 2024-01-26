import Card from "./Card"
import averageSales from '../../public/averagesales.png'
import totalincome from '../../public/totalincome.png'
import totalrefund from '../../public/totalrefund.png'
import totalorder from '../../public/totalorder.png'
import redchart from '../../public/redchart.png'
import greenchart from '../../public/greenchart.png'
import percentred from '../../public/percentred.png'
import percentgreen from '../../public/percentgreen.png'
const Orders = () => {
  return (
    <div className="grid grid-cols-1 mobile:grid-cols-2 gap-5 justify-items-center m-3">
      <Card title= 'Total Order' number='350' source={totalorder} alt= 'total orders 350' graph={greenchart} trend={percentgreen}/>
      <Card title ='Total Refund' number = '270' source = {totalrefund} alt = 'total refund 270' graph={redchart} trend={percentred}/>
      <Card title ='Average Sales' number = '1567' source = {averageSales} alt = 'Average Sales 1567' graph={redchart} trend={percentred}/>
      <Card title = 'Total Income' number = '$350.000' source = {totalincome} alt='Total Income' graph={greenchart} trend={percentgreen}/>
    </div>
  )
}

export default Orders