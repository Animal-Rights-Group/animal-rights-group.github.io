function Footer() {
  return (
    <footer className="bg-primary text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Animal Advocacy Archive. Alle Rechte
          vorbehalten.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
