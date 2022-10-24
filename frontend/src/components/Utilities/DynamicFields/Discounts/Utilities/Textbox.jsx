import { useRef } from "react";
import DeleteButton from "../../../Buttons/DeleteButton";
import RemoveButton from "../../../Buttons/RemoveButton";
import RemoveButtonSmall from "../../../Buttons/RemoveButtonSmall";
import RemoveLinksButton from "../../../Buttons/RemoveLinksButton";
const Textbox = (props) => {
  return (
    <>
      {/* <div className="field-group-containera"> */}
      <div
        className={!props.hasTopLevelContainer ? "" : "field-group-container"}
      >
        <section className="flex-cr input__group inputs">
          <div className="flex-cs">
            <label htmlFor={props.id}>
              <p>{props.label}</p>
              <div className="mb-1 inputs input--small">
                <input
                  name={props.name}
                  type={props.type}
                  value={props.value}
                  placeholder={props.placeholder}
                  id={props.id}
                  tabIndex={1}
                  label={props.label}
                  onChange={props.onChange}
                  onFocus={props.onFocus}
                />
              </div>
            </label>

            {props.gradeBase && (
              <div className="-mt-4">
                <RemoveButtonSmall />{" "}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Textbox;
