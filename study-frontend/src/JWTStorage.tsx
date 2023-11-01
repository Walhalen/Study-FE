import { create } from 'zustand';
import jwtDecode from 'jwt-decode';

type Store = {
  jwt: string;
  isAuthenticated: boolean;
  setAuthenticated: (authenticated: boolean) => void;
  setJWT: (newJwt: string) => void;
};

const useJWTStore = create<Store>((set) => ({
  jwt: '',
  isAuthenticated: false,
  setAuthenticated: (authenticated : boolean) => set((state) => { 
    // console.log(state.isAuthenticated)
    return { isAuthenticated: authenticated }}),
  setJWT: (newJwt: string) => set((state) => ({ jwt: newJwt })),
}));

export default useJWTStore;



