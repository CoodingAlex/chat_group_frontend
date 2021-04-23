import React from 'react';
import { MessageWrapper, ImageContainer, InfoContainer, TimeStamp, Name } from '../assets/styles/components/Message'

function memoized(prevProps, nextProps) {
    //A Message will never change!!
    if(prevProps.chat !== nextProps.chat) {
        return false
    }
    return true
}
const Message = ({ name, message, timestamp, photo }) => {
    console.log(name)
  return (
    <MessageWrapper >
      <ImageContainer><img src={photo} alt=""/></ImageContainer>
      <div>
        <InfoContainer>
            <Name>{name}</Name>
            <TimeStamp>{timestamp}</TimeStamp>
        </InfoContainer>
        <p>{message}</p>
      </div>
    </MessageWrapper>
  );
}

const MemoizedMessage = React.memo(Message, memoized)
export default MemoizedMessage;
