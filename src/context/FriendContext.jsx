import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendContext = createContext();

const FriendProvider = ({ children }) => {

    const [callList, setCallList] = useState ([]);
    const [smsList, setSmsList] = useState ([]);
    const [videoList, setVideoList] = useState ([]);

    const handleCall= (currentFriend) => {
      //step 1 : store friend id 
      //step 2 : where to store 
      //step 3 : array or collection 
      //step 4 : if the friend is allready exist then show a alert or toast 
      //step 5 : if not then add the book in the array or collection
      

      const isExistFriend = callList.find(friend =>friend.id  ===currentFriend.id)
      if(isExistFriend) {
        toast.error("The Call is already exist",{
        position:'top-center'
        })
      } else {
        setCallList([...callList,currentFriend])
        toast.success(`${currentFriend.name} is added to Call List`,{
        position:'top-center'
        })
      }


      console.log(currentFriend, callList,"friend")

      };

     const handleSms= (currentFriend) => {
      //step 1 : store friend id 
      //step 2 : where to store 
      //step 3 : array or collection 
      //step 4 : if the friend is allready exist then show a alert or toast 
      //step 5 : if not then add the book in the array or collection
      
      const isExixtInCallList =callList.find(
        (friend) => friend.id === currentFriend.id,
      );


      const isExistFriend = smsList.find(friend =>friend.id  ===currentFriend.id)
      if(isExistFriend) {
        toast.error("The Text is already exist",{
        position:'top-center'
        })
      } else {
       setSmsList([...smsList,currentFriend])
        toast.success(`${currentFriend.name} is added to Text List`,{
        position:'top-center'
        })
      }


      console.log(currentFriend, smsList,"friend")

      };


       const handleVideo= (currentFriend) => {
      //step 1 : store friend id 
      //step 2 : where to store 
      //step 3 : array or collection 
      //step 4 : if the friend is allready exist then show a alert or toast 
      //step 5 : if not then add the book in the array or collection
      
      const isExixtInCallList =[...callList, ...smsList].find(
        (friend) => friend.id === currentFriend.id,
      );

      const isExistFriend = videoList.find(friend =>friend.id  ===currentFriend.id)
      if(isExistFriend) {
        toast.error("The Text is already exist",{
        position:'top-center'
        })
      } else {
       setVideoList([...videoList,currentFriend])
        toast.success(`${currentFriend.name} is added to Text List`,{
        position:'top-center'
        })
      }


      console.log(currentFriend, videoList,"friend")

      };




  const data = {
    callList, 
    setCallList,
    handleCall,
    smsList,
    setSmsList,
    handleSms,
    videoList,
    setVideoList,
    handleVideo,

  };

  return <FriendContext.Provider value = {data}>
      {children}
    </FriendContext.Provider>
};

export default FriendProvider;