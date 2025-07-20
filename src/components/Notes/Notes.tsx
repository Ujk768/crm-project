import React from "react";
import { useNotes } from "./useNotes";
import "./notes.scss";
import IconButtons from "../IconButtons/IconButtons";
import Card from "./Card/Card";

export default function Notes() {
  const { selectedTile, setSelectedTile } = useNotes();
  return (
    <div className="notes">
      <div className="notes__icons flex justify-space-btw mt-10">
        <IconButtons
          btnType="icon"
          fullRounded={true}
          icon={<i className="bx  bx-gift"></i>}
        />
        <IconButtons
          btnType="icon"
          fullRounded={true}
          icon={<i className="bx  bx-envelope"></i>}
        />
        <IconButtons
          btnType="icon"
          fullRounded={true}
          icon={<i className="bx  bx-bell"></i>}
        />
        <IconButtons
          btnType="icon"
          fullRounded={true}
          icon={<i className="bx  bx-bell"></i>}
        />
        <IconButtons
          btnType="icon"
          fullRounded={true}
          icon={<i className="bx  bx-bell"></i>}
        />
      </div>
      <div className="flex notes__titles  w-100 mt-10  gp-10 align-center fw-600">
        {["All", "Notes & Calls", "Tasks", "Meeting", "Files"].map((item) => (
          <div
            onClick={() => setSelectedTile(item)}
            className={
              item === selectedTile
                ? "active flex align-center tiles justify-center"
                : "tiles flex justify-center align-center"
            }
          >
            {item}
          </div>
        ))}
      </div>
      {selectedTile === "All" ? (
        <div>
          <Card />
          <Card />
          <Card />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
