import { useState } from "react";
import { Button } from "../ui/button";


function HoverButton({ name, onClick, children, onHovered, ...props }) {

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
        if (onHovered) {
            onHovered(true);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (onHovered) {
            onHovered(false);
        }
    };

    return (
        <Button
            variant={isHovered ? "primary" : "ghost"}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {children}

        </Button>
    )
}

export default HoverButton;
