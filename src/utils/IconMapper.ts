const mapIcon = (icon: string): string => {
    let newIconName: string = "";
    
    switch (icon) {
        case "01d":
        case "01n":
            newIconName = "☀️";
            break;
        case "02d":
        case "02n":
            newIconName = "⛅️";
            break;
        default:
            console.log(`Do not have mapping for icon ${icon}`);
            break;
    }

    return newIconName;
}

export default mapIcon;