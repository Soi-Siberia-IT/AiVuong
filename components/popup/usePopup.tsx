"use client";
import { useState } from "react";
import PopUp from "../popup";

const UsePopup = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <>
            {isOpen && <PopUp onClose={handleClose} />}
        </>
    )
}

export default UsePopup;
