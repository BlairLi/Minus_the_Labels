const Footer = () => {
    return (
        <footer className="footer p-0">
            <div className="content has-text-centered">
                <div className="columns is-centered  mt-1">
                    <a className="column has-text-right" href="mailto:example@example.com">
                        <svg data-name="1-Email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{ width: "4rem", height: "7rem" }}>
                            <path d="M29 4H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.72 2L16 14.77 3.72 6zM30 25a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23z" />
                        </svg>
                    </a>
                    <a className="column has-text-left" href="tel:+1234567890">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.314 28.323" style={{ enableBackground: "new 0 0 28.314 28.323", width: "4rem", height: "7rem" }}>
                            <path d="m27.728 20.384-4.242-4.242a1.982 1.982 0 0 0-1.413-.586h-.002c-.534 0-1.036.209-1.413.586L17.83 18.97l-8.485-8.485 2.828-2.828c.78-.78.78-2.05-.001-2.83L7.929.585A1.986 1.986 0 0 0 6.516 0h-.001C5.98 0 5.478.209 5.101.587L.858 4.83C.729 4.958-.389 6.168.142 8.827c.626 3.129 3.246 7.019 7.787 11.56 6.499 6.499 10.598 7.937 12.953 7.937 1.63 0 2.426-.689 2.604-.867l4.242-4.242c.378-.378.587-.881.586-1.416 0-.534-.208-1.037-.586-1.415zm-5.656 5.658c-.028.028-3.409 2.249-12.729-7.07C-.178 9.452 2.276 6.243 2.272 6.244L6.515 2l4.243 4.244-3.535 3.535a.999.999 0 0 0 0 1.414l9.899 9.899a.999.999 0 0 0 1.414 0l3.535-3.536 4.243 4.244-4.242 4.242z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
