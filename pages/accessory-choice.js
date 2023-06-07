import { useRouter } from "next/router";
import BottomButton from "../src/components/BottomButton";
import React, { useState } from "react";
import Radio from "@/src/components/Radio";
import RadioGroup from "@/src/components/RadioGroup";
export default function accessoryChoice() {
  const router = useRouter();
  const [selectedAccessory, setSelectedAccessory] = useState("");

  const goNextPage = () => {
    localStorage.setItem("selected_accessory", selectedAccessory);
    router.push("/complete");
  };
  // const onCHangeHandler = (e) => {
  //   setSelectedAccessory(e.target.value);
  // };

  return (
    <div className="container">
      <div className="wrapper">
        <h2 className="title">
          모니터와 키보드 중 원하시는 장비를 선택해주세요
        </h2>
      </div>
      {/* <label>
        <input
          type="radio"
          id="accessory"
          name="accessory"
          value="monitor"
          onChange={onCHangeHandler}
        />
        Monitor
      </label>
      <label>
        <input
          type="radio"
          id="accessory"
          name="accessory"
          value="keyboard"
          onChange={onCHangeHandler}
        />
        keyboard
      </label> */}
      <RadioGroup
        name="accessory"
        onChange={(state) => setSelectedAccessory(state)}
      >
        <Radio
          id="monitor"
          name="accessory"
          value="monitor"
          label="monitor"
        ></Radio>
        <Radio
          id="keyboard"
          name="accessory"
          value="keyboard"
          label="keyboard"
        ></Radio>
      </RadioGroup>
      <BottomButton onClick={goNextPage}>완료화면으로 넘어가기</BottomButton>
    </div>
  );
}
