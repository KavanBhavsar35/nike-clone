import { star } from "../assets/icons"

const CustomerCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={imgURL} alt="profile" className="rounded-full object-cover w-[120px] h-[120px]" />
      <p className="max-w-sm mt-6 text-center info-text">{feedback}</p>
      <div className="flex items-center justify-center mt-3 gap-2.5">
        <img src={star} alt="star" width={24} height={24} className="object-contain m-0"/>
        <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
      </div>
      <h3 className="text-3xl font-bold font-palanquin">{customerName}</h3>
    </div>
  )
}

export default CustomerCard