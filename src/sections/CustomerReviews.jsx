import { reviews } from "../constants";
import { CustomerCard } from "../components";

const CustomerReviews = () => {
    return (
        <section id="customers" className="max-container">
            <h3 className="text-4xl font-bold text-center font-palanquin">
                What Our <span className="text-coral-red">Customers</span> Say?" 
            </h3>
            <p className="max-w-lg m-auto mt-4 text-center info-text">
                Here genuine stories from our satisfied customers about their exceptional experinces with us.
            </p>
            <div className="flex items-center flex-1 mt-24 justify-evenly max-lg:flex-col gap-14">
                {reviews.map(review => (
                    <CustomerCard key={review.customerName} {...review} />
                ))}
            </div>
        </section>
    )
}

export default CustomerReviews  