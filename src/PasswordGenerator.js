import React, { useState } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");

  // Function to generate random password
  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let newPassword = "";
    for (let i = 0; i < 8; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
  };

  // Function to copy password
  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      alert("Password copied to clipboard!");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Password Generator 🔑</h2>
      <button style={styles.button} onClick={generatePassword}>
        Generate Password
      </button>
      {password && (
        <div style={styles.resultBox}>
          <p style={styles.password}>{password}</p>
          <button style={styles.copyBtn} onClick={copyToClipboard}>
            Copy
          </button>
        </div>
      )}
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    marginTop: "50px",
  },
  button: {
    padding: "10px 20px",
    margin: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
  resultBox: {
    marginTop: "20px",
  },
  password: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  copyBtn: {
    padding: "5px 15px",
    fontSize: "14px",
    cursor: "pointer",
  },
};
