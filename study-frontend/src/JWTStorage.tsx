import {create} from 'zustand'

const useJWTStore = create((set) => ({
    jwt: "",
    isAuthenticated: false,
    setAuthenticated: () => set((state: any) => ({isAthenticated: !state.isAthenticated})),
    setJWT: (newJwt : string) => set((state: any) => ({jwt : newJwt}))
}))


export default useJWTStore;