import IconButtons from "../../IconButtons/IconButtons";
import "./card.scss";
export default function Card() {
  return (
    <div className="mt-10 card flex flex-col gp-10">
      <div className="flex align-center gp-5">
        <div className="card__icon blue">
          <IconButtons
            btnType="icon"
            fullRounded={false}
            icon={<i className="bx  bx-gift"></i>}
          />
        </div>
        <div className="fw-600 blue">Note</div>
        <div>To-do</div>
      </div>
      <div>
        Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat.
        In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem
        cupidatat.
      </div>
      <div>1 Association(s)</div>
      <div className="flex justify-space-btw">
        <div className="flex align-center gp-5">
          <IconButtons
            btnType="icon"
            fullRounded={false}
            icon={<i className="bx  bx-gift"></i>}
          />
          <div className="fw-400">John Doe</div>
        </div>
        <div className="flex">
          <div className="flex align-center gp-5">
            <IconButtons
              btnType="icon"
              fullRounded={false}
              icon={<i className="bx  bx-timer"></i>}
            />
            <div>Jul 12, 2023, 11:54 am</div>
          </div>
        </div>
      </div>
    </div>
  );
}
