import React, { useContext } from 'react'
import { FriendContext } from '../../context/FriendContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CallList from '../../components/listed/CallList';
import TextList from '../../components/listed/TextList';
import VideoList from '../../components/listed/VideoList';

const Timeline = () => {

   const { callList,smsList,videoList} = useContext(FriendContext);
      console.log(callList,smsList,videoList, "friendContext")
  
  return (
      <div className='container mx-auto'>

       <Tabs>
          <TabList>
            <Tab>Call</Tab>
            <Tab>Text</Tab>
            <Tab>Video</Tab>
          </TabList>

          <TabPanel>
            <CallList/>
          </TabPanel>

          <TabPanel>
            <TextList/>
          </TabPanel>
          
          <TabPanel>
            <VideoList/>
          </TabPanel>
        </Tabs>

      
      </div>
  )
}
export default Timeline;