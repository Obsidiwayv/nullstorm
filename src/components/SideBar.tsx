const placeholder_items = ["nuh uh"];

const SidebarDivStyle: React.CSSProperties = {
    width: "150px", // Adjust the width as needed
    height: "90vh", // Adjust the height as needed
    maxHeight: "100vh",
    overflowY: "auto",
    position: "fixed",
    left: "20px", // Distance from the left edge
    top: "50%", // Align vertically in the middle
    transform: "translateY(-50%)", // Center vertically
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px", // Adjust the border radius as needed
};

export default function () {
    return (
        <div style={SidebarDivStyle} className="nav">
            <h1>h</h1>
        </div>
    );
}