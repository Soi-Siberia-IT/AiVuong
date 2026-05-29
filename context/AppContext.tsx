"use client"

import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react"

type AppContextType = {
    isMusicOpen: boolean
    setIsMusicOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AppContext = createContext<AppContextType | null>(null)

export function AppProvider({
    children,
}: {
    children: ReactNode
}) {

    const [isMusicOpen, setIsMusicOpen] = useState(false)

    return (
        <AppContext.Provider
            value={{
                isMusicOpen,
                setIsMusicOpen,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {

    const context = useContext(AppContext)

    if (!context) {
        throw new Error("useAppContext phải nằm trong AppProvider")
    }

    return context
}