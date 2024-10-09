import search from '../../../assets/search.svg'
export interface IconCProps {
    fill?: string;
}
const IconC = ({fill} : IconCProps) => {
  return (
    <div><object data={search} style={{color:fill,backgroundColor:"currentColor"}}/> <img src='/src/assets/search.svg' /></div>
  )
}

export default IconC