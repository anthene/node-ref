import { createContext } from "react"

type AppContextType = [number, (maxClickCount: number) => void]

const defaultAppContextValue: AppContextType = [0, () => { }]

export default createContext<AppContextType>(defaultAppContextValue)