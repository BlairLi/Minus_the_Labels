const Footer = () => {
    return (
        <footer className="footer p-0">
            <div className="content has-text-centered">
                <div className="columns is-centered">
                    <a className="column" href="mailto:example@example.com">
                        <img src="/img/email.svg" alt="email" style={{ width: "4rem", height: "7rem" }} />
                    </a>
                    <a className="column" href="tel:+1234567890">
                        <img src="/img/phone.svg" alt="phone" style={{ width: "3rem", height: "4rem" }} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
