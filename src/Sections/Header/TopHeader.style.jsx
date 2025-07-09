// TopHeader.style.jsx

const styles = {
  topHeaderWrapper: {
    paddingBottom: "200px",
  },
  topHeader: {
    backgroundColor: "white",
    borderBottom: "1px solid #d1d5db", // Tailwind gray-300
    fontSize: "0.875rem", // Tailwind text-sm
    padding: "0.5rem 1rem", // Tailwind py-2 px-4
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "0.5rem",
  },
  button: {
    border: "1px solid #d1d5db",
    padding: "0.25rem 0.5rem",
    cursor: "pointer",
    backgroundColor: "white",
    transition: "background-color 0.2s ease",
  },
};

export default styles;
