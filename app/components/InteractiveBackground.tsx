"use client";

import { useEffect } from "react";

export default function InteractiveBackground() {
    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
            document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    return null;
}
