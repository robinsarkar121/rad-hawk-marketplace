function ContactSeller() {
  return (
    <main
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {/* Contact Seller Card */}
      <div
        style={{
          backgroundColor: "#fff",
          width: "300px",
          borderRadius: "20px",
          padding: "20px",
          boxShadow: "0 8px 20px rgba(255,0,0,0.25)",
        }}
      >
        <h1
          style={{
            color: "red",
            textAlign: "center",
            fontSize: "24px",
            marginBottom: "20px",
          }}
        >
          Message Seller
        </h1>

        {/* Seller Profile */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "red",
              color: "white",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            S
          </div>

          <h3
            style={{
              color: "black",
              marginTop: "10px",
              marginBottom: "5px",
            }}
          >
            John
          </h3>

          <p
            style={{
              color: "gray",
              fontSize: "14px",
              margin: 0,
            }}
          >
            Active today
          </p>
        </div>

        <textarea
          defaultValue="Hi, is this still available?"
          rows="3"
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            resize: "none",
            boxSizing: "border-box",
            marginBottom: "15px",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Send Message
        </button>
      </div>

      {/* Meeting Request Card */}
      <div
        style={{
          backgroundColor: "#fff",
          width: "300px",
          borderRadius: "20px",
          padding: "20px",
          boxShadow: "0 8px 20px rgba(255,0,0,0.25)",
        }}
      >
        <h2
          style={{
            color: "red",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Request Meeting
        </h2>

        <input
          type="text"
          placeholder="Meeting Location"
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            boxSizing: "border-box",
            marginBottom: "15px",
          }}
        />

        <input
          type="date"
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            boxSizing: "border-box",
            marginBottom: "15px",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Request Meeting
        </button>
      </div>
    </main>
  );
}

export default ContactSeller;