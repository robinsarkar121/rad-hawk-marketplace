import "../Safety.css";

function Safety() {
  return (
    <main className="safety-page">
      <section className="safety-hero">
  <div className="hero-overlay"></div>

  <div className="hero-content">
    <h1>Marketplace Safety</h1>
    <p>
      Our college marketplace is designed to help students buy, sell, and
      exchange items safely within the campus community.
    </p>
  </div>
</section>

      <section className="safety-section">
        <h2>Meet in Safe Public Places</h2>
        <p>
          Always meet on campus or in a public area with other people nearby.
          Avoid meeting in isolated locations, parking lots, or private rooms.
        </p>
      </section>

      <section className="safety-section">
        <h2>Verify the Item Before Paying</h2>
        <p>
          Check the item carefully before completing the transaction. Make sure
          it matches the listing description and photos.
        </p>
      </section>

      <section className="safety-section">
        <h2>Use Safe Payment Methods</h2>
        <p>
          Avoid sending money before seeing the item. Use payment methods you
          trust and keep a record of the transaction.
        </p>
      </section>

      <section className="safety-section">
        <h2>Protect Your Personal Information</h2>
        <p>
          Do not share passwords, banking information, student ID numbers, or
          other sensitive details with buyers or sellers.
        </p>
      </section>

      <section className="safety-section">
        <h2>Report Suspicious Activity</h2>
        <p>
          If a listing, message, or user seems suspicious, report it to the
          marketplace team or campus staff immediately.
        </p>
      </section>

      <section className="safety-warning">
        <h2>Important Reminder</h2>
        <p>
          If something feels unsafe or too good to be true, pause the
          transaction. Your safety comes first.
        </p>
      </section>
    </main>
  );
}

export default Safety;