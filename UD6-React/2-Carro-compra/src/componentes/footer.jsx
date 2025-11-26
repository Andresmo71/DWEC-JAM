
const Footer = ({ total, productos }) => {
  return (
    <footer>
      <div className="container">
        {productos.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <p>Total: {total} €</p>
    </footer>
  );
};

export default Footer;
