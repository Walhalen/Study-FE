import { create } from 'zustand';
import { UserDto } from '../Types/UserIntrfaces';
import { Tag } from '../Types/TagInterfaces';

type Store = {
    me: UserDto,
    setMe: (myUser: UserDto) => void;
} 


const useUserStore = create<Store>((set) => ({
    me: { 
        username: "",
        email: "",
        rating: 0,
        tags: [],
        description: "" 
    },
    setMe: (myUser : UserDto) => set((state) => { 
        console.log("Hellooo it's mee: ha ha ha : " + myUser)
        return { ...state,me: myUser }
    }
    ),
}));
  
export default useUserStore;
  