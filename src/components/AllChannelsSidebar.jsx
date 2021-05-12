import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import {
  ChannelsContainer,
  AllChannelsHeader,
  Channel,
  ChannelContainer,
  AddChannelIcon,
  AddChannelIconContainer,
} from '../assets/styles/components/Sidebar';
import Modal from './Modal';
import ChatIcon from './ChatIcon';
function memoized(prevProps, nextProps) {
  return true;
}
const AllChannelsSidebar = ({ setAllChannelsMode }) => {
  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [isModal, setIsModal] = useState(false);
  const { chats, setCurrentChat, joinChat, availableRooms } =
    useContext(AppContext);
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
        <AddChannelIconContainer onClick={() => setIsModal(true)}>
          <AddChannelIcon className="fas fa-plus"></AddChannelIcon>
        </AddChannelIconContainer>
      </AllChannelsHeader>
      <ChannelsContainer>
        {chats?.map((chat) => (
          <ChannelContainer
            onClick={() => {
              setCurrentChat(chat.name);
              setAllChannelsMode(false);
            }}
          >
            <ChatIcon name={chat.name} />
            <Channel>{chat.name}</Channel>
          </ChannelContainer>
        ))}
        <h3>Available</h3>
        {availableRooms.map((chat) => {
          return (
            <ChannelContainer
              onClick={() => {
                joinChat(chat.name);
              }}
            >
              <ChatIcon name={chat.name} />
              <Channel>{chat.name}</Channel>
            </ChannelContainer>
          );
        })}
      </ChannelsContainer>
    </div>
  );
};

const MemoizedAllChannelsSidebar = React.memo(AllChannelsSidebar, memoized);

export default MemoizedAllChannelsSidebar;
