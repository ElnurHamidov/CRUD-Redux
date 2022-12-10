import { AiFillFacebook, AiOutlineWhatsApp, AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";



export default function Footer(){


    return(
        <div className="footer" >
            <footer className="text-center text-white" style={{backgroundColor: "rgba(0, 0, 0, .7)", color: "#fff"}}>

            <div className="container pt-4">
                <section className="mb-4">
                <a
                    target="_blank"  rel="noopener noreferrer"
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://www.facebook.com/elnur.gamidov.54"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-facebook-f"><AiFillFacebook style={{color: "#fff"}} className="icon"/></i
                ></a>

                <a
                    target="_blank"  rel="noopener noreferrer"
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://wa.me/+994708221706"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-google"><AiOutlineWhatsApp style={{color: "#fff"}} className="icon"/></i
                ></a>

                <a
                    target="_blank"  rel="noopener noreferrer"
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://www.instagram.com/gamidovelnur"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-instagram"><AiFillInstagram style={{color: "#fff"}} className="icon"/></i
                ></a>

                <a
                    target="_blank"  rel="noopener noreferrer"
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://www.linkedin.com/in/elnur-hamidov-685737216/"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-linkedin"><AiFillLinkedin style={{color: "#fff"}} className="icon"/></i
                ></a>
                <a
                    target="_blank"  rel="noopener noreferrer"
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://github.com/ElnurHamidov"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-github"><AiFillGithub style={{color: "#fff"}} className="icon"/></i
                ></a>
                </section>
            </div>
            <div className="text-center text-light p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                <p>Contacts</p>
            </div>
</footer>
        </div>
    );
}