import React, { useState } from "react";

// PUBLIC_INTERFACE
function QuickNoteContainer() {
  /**
   * Main container for QuickNote with frosted glass effect,
   * light/dark theming, and an accessible 'Add new note' button.
   */
  const [theme, setTheme] = useState("dark");

  const isDark = theme === "dark";

  // Glass/frosted background, dynamically adapts to theme
  const containerStyle = {
    minHeight: "100vh",
    background: isDark
      ? "linear-gradient(135deg, #131313 0%, #252525 100%)"
      : "linear-gradient(135deg, #f2f2f2 0%, #e5e9f1 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background 0.3s",
  };

  const glassStyle = {
    background: isDark
      ? "rgba(30, 33, 40, 0.65)"
      : "rgba(255, 255, 255, 0.60)",
    borderRadius: "24px",
    boxShadow:
      "0 8px 32px 0 rgba(31, 38, 135, 0.19), 0 1.5px 6px 0 rgba(0,0,0,0.12)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    border: isDark
      ? "1.5px solid rgba(255, 255, 255, 0.08)"
      : "1.5px solid rgba(21, 67, 121, 0.09)",
    width: "min(98vw, 420px)",
    minHeight: "420px",
    maxWidth: "420px",
    padding: "32px 24px 24px 24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const headStyle = {
    marginBottom: "2.5rem",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };

  const titleStyle = {
    fontSize: "2.2rem",
    fontWeight: 700,
    letterSpacing: "-1px",
    color: isDark ? "#fff" : "#222236",
    margin: 0,
    userSelect: "none",
  };

  const themeToggleBtn = {
    appearance: "none",
    background: isDark ? "#272727" : "#f4f2f8",
    border: "none",
    borderRadius: "999px",
    color: isDark ? "#FFD95B" : "#333",
    padding: "6px 14px",
    fontSize: "1.06rem",
    cursor: "pointer",
    fontWeight: 500,
    outline: "none",
    boxShadow: isDark
      ? "0 1px 4px rgba(31,38,135,.12)"
      : "0 0.5px 2px rgba(21,67,121,.05)"
  };

  const addBtn = {
    background: isDark ? "#E87A41" : "#1976D2",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: 600,
    padding: "12px 0",
    cursor: "pointer",
    fontSize: "1.13rem",
    width: "100%",
    marginTop: "8px",
    marginBottom: "0.5rem",
    transition: "background 0.19s",
    letterSpacing: "0.02em",
    boxShadow: isDark
      ? "0 1.5px 6px rgba(30,33,40,.16)"
      : "0 1.5px 6px rgba(25,118,210, .10)"
  };

  // Placeholder: sample info for minimal UI starting point
  return (
    <div style={containerStyle}>
      <section style={glassStyle} aria-label="Quick Note Main Container">
        <div style={headStyle}>
          <h1 style={titleStyle}>QuickNote</h1>
          <button
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            style={themeToggleBtn}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            title={`Switch to ${isDark ? "light" : "dark"} theme`}
            type="button"
          >
            {isDark ? "🌞" : "🌙"}
          </button>
        </div>
        <button
          style={addBtn}
          aria-label="Add new note"
          type="button"
          // Placeholder onClick: to be implemented (e.g. open note dialog)
          onClick={() => { /* Future: open new note dialog */ }}
        >
          + Add new note
        </button>
        <div
          style={{
            marginTop: "2.3rem",
            width: "100%",
            textAlign: "center",
            color: isDark ? "#eaeaea" : "#393960",
            opacity: 0.7,
            fontSize: "1.09rem",
            letterSpacing: 0,
            fontWeight: 400,
          }}
        >
          {/* Placeholder, will be replaced by notes list in next iterations */}
          <div>Your notes will appear here.</div>
        </div>
      </section>
    </div>
  );
}

export default QuickNoteContainer;
