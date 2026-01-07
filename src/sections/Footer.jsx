import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images/"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
    return (
        <footer className="bg-black max-container" id="footer">
            <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
                <div className="flex flex-col items-start">
                    <a href="/"><img src={footerLogo} alt="logo" width={150} height={46} /></a>
                    <p className="mt-6 text-base leading-7 text-white-400 sm:max-w-sm font-montserrat">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
                    <div className="flex items-center gap-5 mt-8 ">
                        {
                            socialMedia.map((link) => (
                                <a key={link.label} href={link.href} className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
                                    <img src={link.src} alt={link.alt} width={24} height={24} />
                                </a>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-wrap justify-between flex-1 gap-20 lg:gap-10">
                    {footerLinks.map(linkSection =>(
                        <div key={linkSection}>
                            <h4 className="mb-6 text-2xl font-medium leading-normal text-white font-montserrat">{linkSection.title}</h4>
                            <ul>
                                {linkSection.links.map(link => (
                                    <li className="mt-3 text-base leading-normal cursor-pointer text-white-400 hover:text-slate-gray font-montserrat" key={link.name}>
                                        <a href={link.link}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div> 
                    ))}
                </div>
            </div>
            <div className="flex justify-between mt-24 text-white max-sm:flex-col max-sm:items-center">
                <div className="flex items-center justify-start flex-1 gap-2 cursor-pointer font-montserrat">
                    <img src={copyrightSign} alt="copyright sign" height={20} width={20} className="m-0 rounded-full" />
                    <p>Copyright {new Date().getFullYear()}. All rights reserved.</p>
                </div>
                <p className="cursor-pointer font-montserrat">Terms & Condition</p>
            </div>
        </footer>
    )
}

export default Footer