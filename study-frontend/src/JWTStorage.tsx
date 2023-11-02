import { create } from 'zustand';
import jwtDecode from 'jwt-decode';

type Store = {

  isAuthenticated: boolean;
  setAuthenticated: (authenticated: boolean) => void;
  
};

const useJWTStore = create<Store>((set) => ({
  isAuthenticated: false,
  setAuthenticated: (authenticated : boolean) => set((state) => { 
    // console.log(state.isAuthenticated)
    return { isAuthenticated: authenticated }}),
}));

export default useJWTStore;



