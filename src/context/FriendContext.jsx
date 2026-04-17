import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendContext = createContext();

const FriendProvider = ({ children }) => {

    const [callList, setCallList] = useState ([]);
    const [textList, setTextList] = useState ([]);
    const [videoList, setVideoList] = useState ([]);

    const handleCall= (currentFriend) => {


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

     const handleText= (currentFriend) => {

      const isExixtInCallList =callList.find(
        (friend) => friend.id === currentFriend.id,
      );


      const isExistFriend = textList.find(friend =>friend.id  ===currentFriend.id)
      if(isExistFriend) {
        toast.error("The Text is already exist",{
        position:'top-center'
        })
      } else {
       setTextList([...textList,currentFriend])
        toast.success(`${currentFriend.name} is added to Text List`,{
        position:'top-center'
        })
      }

      console.log(currentFriend, textList,"friend")

      };

       const handleVideo= (currentFriend) => {

      const isExixtInCallList =[...callList, ...textList].find(
        (friend) => friend.id === currentFriend.id,
      );

      const isExistFriend = videoList.find(friend =>friend.id  ===currentFriend.id)
      if(isExistFriend) {
        toast.error("The Video is already exist",{
        position:'top-center'
        })
      } else {
       setVideoList([...videoList,currentFriend])
        toast.success(`${currentFriend.name} is added to Video List`,{
        position:'top-center'
        })
      }

      console.log(currentFriend, videoList,"friend")

      };


  const data = {
    callList, 
    setCallList,
    handleCall,
    textList,
    setTextList,
    handleText,
    videoList,
    setVideoList,
    handleVideo,

  };

  return <FriendContext.Provider value = {data}>
      {children}
    </FriendContext.Provider>
};

export default FriendProvider;