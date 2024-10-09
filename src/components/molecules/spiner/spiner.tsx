import React, { FC, memo, useEffect, useRef, useState } from "react";
import "./style.scss";
interface SpinerProps {
  spinerList: Array<string>;
  type: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}
const Spiner: FC<SpinerProps> = ({ spinerList, value, type, setValue }) => {
  const spinerContainerRef = useRef<any>(null);
  const spinerRef = useRef<any>(null);
  const [valueSpiner,setValueSpiner] = useState(value)
  useEffect(() => {
    spinerContainerRef.current.scrollTop = 57*value;
    const items = spinerRef.current.querySelectorAll("li");
      items[0].style.height = "36px"
      items[items.length -1].style.height = "36px"
      items[value+1].style.fontSize = "32px"
      items[value+1].style.fontWeight = "bold";
    spinerContainerRef.current.addEventListener("scroll", () => {
      const scrollTop = spinerContainerRef.current.scrollTop;
      const middleIndex = Math.round(scrollTop / 60); // Tính toán mục ở giữa

      const items = spinerRef.current.querySelectorAll("li");
      items.forEach((item: HTMLLIElement, index: number) => {
        if (index === middleIndex + 1) {
            setValue(index)
          item.style.fontSize = "32px"; // Đậm hơn
          item.style.fontWeight = "bold";
        } else {
          item.style.fontSize = "24px"; // Bình thường
          item.style.fontWeight = "normal";
        }
      });
    });
  }, []);
  return (
    <div ref={spinerContainerRef} className={`spinner-container-${type}`}>
      <ul ref={spinerRef} className="spinner" id="spinner">
        {spinerList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default memo (Spiner);
