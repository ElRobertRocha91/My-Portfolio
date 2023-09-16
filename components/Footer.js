import Link from "next/link";

const Footer = () => (
    <div className="custom-bg-black text-light text-center">
        <div className="container">
            <h3>My Portfolio</h3>
            <div className="custom-footer-links d-flex justify-content-between">
                <ul className="list-inline flex-fill">
                    <li className="list-inline-item">
                        <Link href="/about" className="link text-light">About</Link>
                    </li>
                    <li>
                        <Link href="/blog" className="link text-light">Blog</Link>
                    </li>
                    <li>
                        <Link href="/services" className="link text-light">Services</Link>
                    </li>
                    <li>
                        <Link href="/more" className="link text-light">More</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="container p-4">
            <h6>@copyright, All Rights Reserverd Roberto Rocha</h6>
            <p>2023 - {new Date().getFullYear()}</p>
        </div>
    </div>
)
 export default Footer;