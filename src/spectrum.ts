import { useEffect } from "react";

// The average UI designer:
export function useSpectrum() {
    useEffect(() => {
        const classesToAdd = ['spectrum', 'spectrum--medium', 'spectrum--dark'];

        classesToAdd.forEach(className => {
            document.body.classList.add(className);
        });

        // Cleanup the classes from body tag upon unload.
        return () => {
            classesToAdd.forEach(className => {
                document.body.classList.remove(className);
            });
        };
    }, []);
}
  
export function getPlayButtonState() {}