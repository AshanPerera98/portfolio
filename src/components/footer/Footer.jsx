import "./Footer.css";

function Footer() {
  const date = new Date();
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          Crafted with code & coffee by <strong>Ashan Perera</strong> ©{" "}
          {date.getFullYear()}.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
