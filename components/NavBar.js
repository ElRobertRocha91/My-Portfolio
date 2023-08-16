import Link from "next/link";

const NavBar = () => (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <Link href="/">
                <div class="navbar-brand" >My Portfolio</div>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link href="/about">
                            <div class="nav-link" >About</div>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link href="/services">
                            <div class="nav-link" >Services</div>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link href="/blog">
                            <div class="nav-link" >Blog</div>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link href="/more">
                            <div class="nav-link" >More</div>
                        </Link>
                    </li>
                </ul>
                <span class="navbar-text">
                    Contact
                </span>
            </div>
        </div>
    </nav>
)


export default NavBar;