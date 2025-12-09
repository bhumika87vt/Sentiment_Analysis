import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const pageCenter = {
    minHeight: 'calc(100vh - 70px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const cardStyle = {
    background: 'rgba(15,23,42,0.94)',
    borderRadius: '18px',
    padding: '24px',
    boxShadow: '0 18px 45px rgba(15,23,42,0.9)',
    border: '1px solid rgba(148,163,184,0.45)',
    maxWidth: '420px',
    width: '100%'
  };

  const titleStyle = {
    margin: '0 0 4px',
    fontSize: '24px',
    color: '#e5e7eb'
  };

  const subtitleStyle = {
    margin: '0 0 18px',
    color: '#9ca3af',
    fontSize: '14px'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  };

  const labelStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    fontSize: '13px',
    color: '#e5e7eb'
  };

  const inputStyle = {
    borderRadius: '10px',
    border: '1px solid rgba(148,163,184,0.6)',
    padding: '9px 10px',
    fontSize: '14px',
    background: 'rgba(15,23,42,0.95)',
    color: '#f9fafb'
  };

  const btnStyle = {
    marginTop: '8px',
    borderRadius: '999px',
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: 500,
    border: 'none',
    cursor: 'pointer',
    background: 'linear-gradient(135deg, #6366f1, #22c55e)',
    color: '#f9fafb',
    width: '100%'
  };

  const alertStyle = {
    padding: '8px 10px',
    borderRadius: '10px',
    fontSize: '13px',
    background: 'rgba(248,113,113,0.1)',
    border: '1px solid rgba(248,113,113,0.6)',
    color: '#fecaca',
    marginBottom: '8px'
  };

  // Redirect if already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
    if (isLoggedIn) {
      navigate("/user-input");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/api/adminlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save login state
        localStorage.setItem("isAdminLoggedIn", "true");
        // Redirect to user input page
        navigate("/user-input");
      } else {
        setMessage(data.message || "Invalid credentials");
      }
    } catch (error) {
      setMessage("Error connecting to server");
    }
    setLoading(false);
  };

  return (
    <main style={pageCenter}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>Admin Login</h2>
        <p style={subtitleStyle}>
          Sign in to upload data and view detailed sentiment analysis.
        </p>

        {message && <div style={alertStyle}>{message}</div>}

        <form style={formStyle} onSubmit={handleSubmit}>
          <label style={labelStyle}>
            Email
            <input
              style={inputStyle}
              type="email"
              value={email}
              placeholder="admin@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label style={labelStyle}>
            Password
            <input
              style={inputStyle}
              type="password"
              value={password}
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <button style={btnStyle} type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default AdminLogin;
