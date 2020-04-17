import React, { useState } from "react";
import "./checkAll.styles.scss";

const SelectOptions = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectData, setSelectData] = useState(data);

  const handleCheckedAll = () => {
    const changedSelectData = selectData.options.map((item) => ({
      ...item,
      isChecked: !selectData.isCheckedAll,
    }));
    setSelectData({
      ...selectData,
      isCheckedAll: !selectData.isCheckedAll,
      options: [...changedSelectData],
    });
  };

  const handleCheck = (e, id) => {
    const { options } = selectData;
    let copySelectData = {
      ...selectData,
      options: [...options],
    };
    options.forEach((item, index) => {
      if (item.id === id) {
        copySelectData.options[index].isChecked = !copySelectData.options[index]
          .isChecked;
      }
    });

    setSelectData({
      ...selectData,
      isCheckedAll: options.every((item) => item.isChecked),
      options: [...options],
    });
  };

  return (
    <article className="container">
      <h2>{selectData.title}</h2>
      <section className="select-list">
        <span
          className="select-type"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <label
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {isOpen && (
              <input
                type="checkbox"
                className="select-inputs"
                name="selectAll"
                checked={selectData.isCheckedAll}
                onChange={handleCheckedAll}
              />
            )}
            <span>{selectData.initialValue}</span>
          </label>
          <span>{isOpen ? <>&#9650;</> : <>&#9660;</>}</span>
        </span>
        <section className={`${isOpen ? "visible" : "hidden"}`}>
          {selectData.options.map((option, index) => (
            <label key={index}>
              <input
                type="checkbox"
                checked={option.isChecked}
                value={option.value}
                onChange={(e) => {
                  handleCheck(e, option.id);
                }}
              />
              <span className="drop-items">{option.value}</span>
            </label>
          ))}
        </section>
      </section>
    </article>
  );
};

export default SelectOptions;
