import { useRouter } from "next/router";
import BottomButton from "../src/components/BottomButton";
import React, { useState } from "react";
import Radio from "@/src/components/Radio";
import RadioGroup from "@/src/components/RadioGroup";

export default function deviceChoice() {
  const router = useRouter();
  const [selectedDevice, setSelectedDevice] = useState("");

  const goNextPage = () => {
    localStorage.setItem("selected_device", selectedDevice);
    router.push("/accessory-choice");
  };

  // const onCHangeHandler = (e) => {
  //   setSelectedDevice(e.target.value);
  // };
  return (
    <div className="container">
      <div className="wrapper">
        <h2 className="title">아이맥과 맥북 중 원하시는 장비를 선택해주세요</h2>
      </div>
      {/* <label>
        <input
          type="radio"
          id="device"
          name="device"
          value="iMac"
          onChange={onCHangeHandler}
        />
        iMac
      </label>
      <label>
        <input
          type="radio"
          id="device"
          name="device"
          value="MacBook"
          onChange={onCHangeHandler}
        />
        MacBook
      </label> */}
      <RadioGroup name="device" onChange={(state) => setSelectedDevice(state)}>
        <Radio id="iMac" name="device" value="iMac" label="iMac"></Radio>
        <Radio
          id="MacBook"
          name="device"
          value="MacBook"
          label="MacBook"
        ></Radio>
      </RadioGroup>
      <BottomButton onClick={goNextPage}>
        악세서리 선택 화면으로 넘어가기
      </BottomButton>
    </div>
  );
}
