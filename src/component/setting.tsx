import { type } from "os";
import React, { useRef, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import styled from "styled-components";

interface SettingType {
  type?: true | false;
}
export const Setting: React.FC<SettingType> = () => {
  const [active, setActive] = useState(true);

  const audioRef = useRef<any>(null);

  const LineActive = () => {
    audioRef.current.pause();
    setActive(false);
    if (active === false) {
      setActive(!active);
      audioRef.current.play();
    }
  };

  return (
    <Parent>
      <audio ref={audioRef} autoPlay={true} loop id="playAudio">
        <source src="./audio/interstellar.mp3" />
      </audio>
      <SettingBox>
        <img
          src="../../image/icons8-setting-64.png"
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </SettingBox>
      <Sound onClick={LineActive}>
        <img
          src="../../image/icons8-sound-50.png"
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
        <Line type={active}></Line>
      </Sound>
    </Parent>
  );
};

const Parent = styled.div`
  width: 6.4rem;
  height: 2.7rem;
  position: absolute;
  right: 18px;
  bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SettingBox = styled.div`
  width: 43%;
  height: 100%;
  padding: 0.3rem;
`;

const Sound = styled.div`
  width: 43%;
  height: 100%;
  padding: 0.3rem;
  position: relative;
`;

const Line = styled.div<SettingType>`
  width: 2.8rem;
  height: 0.1rem;
  background-color: red;
  transform: rotate(126deg);
  position: absolute;
  top: 19px;
  right: 1.5px;
  display: ${(props) => (props.type == false ? "block" : "none")};
`;
