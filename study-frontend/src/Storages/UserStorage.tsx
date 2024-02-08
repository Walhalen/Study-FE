import { create } from 'zustand';
import { MeDto, UserDto } from '../Types/UserIntrfaces';
import { Tag } from '../Types/TagInterfaces';

type Store = {
    me: MeDto,
    setMe: (myUser: MeDto) => void;
} 


const useUserStore = create<Store>((set) => ({
    me: { 
        username: "",
        email: "",
        rating: 0,
        tags: [],
        favorites: [],
        description: "" 
    },
    setMe: (myUser : MeDto) => set((state) => { 
        return { ...state,me: myUser }
    }
    ),
}));
  
export default useUserStore;
  