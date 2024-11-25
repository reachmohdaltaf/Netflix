import Netflix from '../assets/Netflix.svg'
const Header = () => {
  return (
    <div className=" px-32 pt-5 shadow-sm absolute z-10">
      <img  src={Netflix} alt="logo" className='h-10'/>
    </div>
  )
}

export default Header
