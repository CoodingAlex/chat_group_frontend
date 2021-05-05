import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import {
  ChannelsContainer,
  AllChannelsHeader,
  Channel,
} from '../assets/styles/components/Sidebar';
import Modal from './Modal';
function memoized(prevProps, nextProps) {
  return true;
}
const AllChannelsSidebar = ({ setAllChannelsMode }) => {
  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [isModal, setIsModal] = useState(false);
  const { chats, setCurrentChat, joinChat, availableRooms } = useContext(
    AppContext
  );
  return (
    <div>
      {isModal && (
        <Modal
          setIsModal={setIsModal}
          setAreaValue={setDescriptionValue}
          setInputValue={setTitleValue}
          inputValue={titleValue}
          areaValue={descriptionValue}
          buttonClick={() => {
            joinChat(titleValue, descriptionValue);
            setIsModal(false);
          }}
        />
      )}
      <AllChannelsHeader>
        <h3>Channels</h3>
        <button onClick={() => setIsModal(true)}>Add</button>
      </AllChannelsHeader>
      <ChannelsContainer>
        {chats?.map((chat) => (
          <Channel
            onClick={() => {
              setCurrentChat(chat.name);
              setAllChannelsMode(false);
            }}
          >
            {chat.name}
          </Channel>
        ))}
        <h3>Available</h3>
        {availableRooms.map((room) => {
          return (
            <p
              onClick={() => {
                joinChat(room.name);
              }}
            >
              {room.name}
            </p>
          );
        })}
      </ChannelsContainer>
    </div>
  );
};

const MemoizedAllChannelsSidebar = React.memo(AllChannelsSidebar, memoized);

export default MemoizedAllChannelsSidebar;
