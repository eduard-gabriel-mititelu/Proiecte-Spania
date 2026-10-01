import "./footer.css";

function Footer() {
    return (
        <footer className="site-footer">
        <div className="footer-inner">

        <section>
        <div className="brand">
            <div className="eu-flag" aria-hidden="true">
            <svg width="30" height="30" viewBox="0 0 30 30"><g fill="#ffcc00">
                <circle cx="15" cy="4" r="1.6"/><circle cx="20.5" cy="5.5" r="1.6"/><circle cx="24.5" cy="9.5" r="1.6"/>
                <circle cx="26" cy="15" r="1.6"/><circle cx="24.5" cy="20.5" r="1.6"/><circle cx="20.5" cy="24.5" r="1.6"/>
                <circle cx="15" cy="26" r="1.6"/><circle cx="9.5" cy="24.5" r="1.6"/><circle cx="5.5" cy="20.5" r="1.6"/>
                <circle cx="4" cy="15" r="1.6"/><circle cx="5.5" cy="9.5" r="1.6"/><circle cx="9.5" cy="5.5" r="1.6"/></g></svg>
            </div>
            <strong>Erasmus+ Proiect Spania</strong>
        </div>
        <p>Schimb de experiență, învățare interculturală și cooperare europeană pentru elevi și profesori, în parteneriat cu școli din Spania.</p>
        </section>

        <section class="contact">
        <h3>Contact</h3>
        <ul>
            <li>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Colegiul Național Pedagogic „Ștefan Odobleja”, Strada Crișan 48, 220014 Drobeta-Turnu Severin</span>
            </li>
            <li>
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
            <a href="mailto:col_ped_stodobleja@yahoo.com">col_ped_stodobleja@yahoo.com</a>
            </li>
            <li>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.200 2 19.800 19.800 0 0 1-8.600-3.100 19.500 19.500 0 0 1-6-6A19.800 19.800 0 0 1 2.100 4.200 2 2 0 0 1 4.100 2h3a2 2 0 0 1 2 1.700c.1 1 .4 1.900.7 2.800a2 2 0 0 1-.5 2.100L8.100 9.900a16 16 0 0 0 6 6l1.300-1.300a2 2 0 0 1 2.100-.4c.9.300 1.800.6 2.800.7a2 2 0 0 1 1.700 2z"/></svg>
            <a href="tel:0252331230">0252331230</a>
            </li>
        </ul>
        </section>
    </div>

    <div className="footer-bottom">
        <div className="footer-bottom-inner">
        <p>Cofinanțat de Uniunea Europeană. Opiniile exprimate aparțin exclusiv autorilor și nu reflectă neapărat poziția Uniunii Europene sau a Agenției Naționale. Nici Uniunea Europeană, nici autoritatea finanțatoare nu pot fi făcute responsabile pentru acestea.</p>
        <p>© <span id="year"></span> Proiect Erasmus+ · <span>Politica de confidențialitate</span></p>
        </div>
    </div>
    </footer>
    );
}

export default Footer;