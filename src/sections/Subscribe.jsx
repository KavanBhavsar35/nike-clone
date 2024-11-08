import { Button } from "../components"

const Subscribe = () => {
  return (
    <section id="subscribe" className="flex items-center justify-between gap-10 max-container max-lg:flex-col">
      <h3 className="text-4xl font-bold font-palanquin leading-[68px] lg:max-w-lg">Sign Up for
        <span className="text-coral-red"> Updates</span> & Newsletter
      </h3>
      <div className="w-full   flex max-sm:flex-col flex-row gap-5 items-center rounded-full sm:border sm:border-slate-gray p-0.5">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex items-center max-sm:justify-end max-sm:w-full">
          <Button label="Sign Up" fullWidth /></div>
      </div>
    </section>
  )
}

export default Subscribe