import "../Support.css";
import supportHawk from "../../assets/images/support_page_hawk.png"

function Support() {
  return (
    <main className="support-page">
      <section className="support-header">
        <h1>Support Center</h1>
        <p>
          Need help with a listing, account issue, or marketplace concern? We're
          here to help.
        </p>
      </section>

       <div className="support-grid">
          <section className="support-card faq-card">
            <h2>Frequently Asked Questions</h2>
            
            <div className="faq-item">
              <h3>How do I create a listing?</h3>
              <p>
                Navigate to the marketplace and select the option to create a new
                listing. Fill in the item details and submit.
              </p>
        </div>

        <div className="faq-item">
          <h3>How do I edit or remove a listing?</h3>
          <p>
            Visit your account dashboard and select the listing you would like
            to update or delete.
          </p>
        </div>

        <div className="faq-item">
          <h3>How do I report a user?</h3>
          <p>
            If you encounter suspicious activity, please contact support and
            provide details about the incident.
          </p>
        </div>

        <div className="faq-item">
          <h3>How can I stay safe when meeting buyers or sellers?</h3>
          <p>
            Review our Safety page for tips on secure transactions and meeting
            locations.
          </p>
        </div>
        </section>

        <section className="support-card contact-card">
          <img src={supportHawk}
           alt="red hawk"
           className="contact-card-bg-image"/>

          <div className="contact-card-overlay"></div>

          <div className="contact-card-content">
            <h2>Contact Support</h2>
            <form className="support-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="Enter a subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="6"
                placeholder="Describe your issue..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit Request
            </button>
          </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Support;