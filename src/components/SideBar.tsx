import "@spectrum-css/sidenav";

const placeholder_items = ["nuh uh"];

export default function () {
    return (
        <nav style={{
            marginTop: '50px',
            width: '200px',
            height: '100%',
            overflow: 'hidden',
            position: 'fixed',
            bottom: 0,
            display: 'flex',
            top: "5%",
            flexDirection: 'column'
        }}>
            <div>
                <div style={{ flex: 1, overflow: 'auto' }}>
                    <ul className="spectrum-SideNav">
                        <li className="spectrum-SideNav-item">
                            <a href="#" className="spectrum-SideNav-itemLink" aria-current="page">
                                <span className="spectrum-SideNav-link-text">Home</span>
                            </a>
                        </li>
                        <li className="spectrum-SideNav-item">
                            <a href="#" className="spectrum-SideNav-itemLink" aria-current="page">
                                <span className="spectrum-SideNav-link-text">Mods</span>
                            </a>
                        </li>
                        <li className="spectrum-SideNav-item">
                            <a href="#" className="spectrum-SideNav-itemLink" aria-current="page">
                                <span className="spectrum-SideNav-link-text">Settings</span>
                            </a>
                        </li>
                        <li>
                            <h2 className="spectrum-SideNav-heading" id="nav-heading-1">Versions</h2>
                            <ul className="spectrum-SideNav" aria-labelledby="nav-heading-1">
                                {placeholder_items.map((item) => {
                                    return (
                                        <li className="spectrum-SideNav-item">
                                            <a href="#" className="spectrum-SideNav-itemLink">
                                                <span className="spectrum-SideNav-link-text">{item}</span>
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}