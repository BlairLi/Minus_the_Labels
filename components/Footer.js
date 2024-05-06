const Footer = () => {
    return (
        <footer className="footer p-0">
            <div className="content has-text-centered">
                <div className="columns is-centered  mt-1">
                    <a className="column has-text-right" href="mailto:example@example.com">
                        <img src="/img/email.svg" alt="email" style={{ width: "4rem", height: "7rem" }} />
                    </a>
                    <a className="column has-text-left" href="tel:+1234567890">
                        <img src="/img/phone.svg" alt="phone" style={{ width: "4rem", height: "6rem" }} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
