import "../../../Styles/biggerCardStyle.css";
import { useRef, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPopup, setPopupType } from "../../../features/popups/popupSlice";
import milestoneTrophy from "../../../Assets/Images/milestoneTrophy.svg";

const BiggerCard = ({ formData }) => {
  const dispatch = useDispatch();
  const { popup } = useSelector((state) => state.popups);
  const formDataLinks = [...formData.link];
  const popupRef = useRef();
  useEffect(() => {
    let handler = (event) => {
      if (
        popupRef.current != null &&
        !popupRef.current.contains(event.target)
      ) {
        dispatch(setPopup(!popup));
        dispatch(setPopupType(""));
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [popupRef]);

  const escFunction = useCallback(
    (event) => {
      if (event.key === "Escape") {
        dispatch(setPopup(!popup));
        dispatch(setPopupType(""));
      }
    },
    [popup]
  );
  const handleClosedPopup = useCallback(() => {
    dispatch(setPopup(!popup));
    dispatch(setPopupType(""));
  });
  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    <div className="school-bigger-card--container flex-ccc">
      <div ref={popupRef} className="realtime-school-card-bigger">
        <div className="bigger-school-card--main">
          <div
            className="close-bigger-card flex-ccc"
            onClick={() => handleClosedPopup()}
          >
            <div className="close-bigger-card-container">X</div>
          </div>
          {/* card header */}
          <div className="bigger-school-card--header clr-big-card-primary">
            {/* card school name */}
            {formData.schoolName ? (
              <p className="cared-label__value bigger-card--school-name">
                {" "}
                {formData.schoolName}
              </p>
            ) : (
              <p className="card--label bigger-card--school-name">
                School Name&nbsp;
              </p>
            )}
            {/* card school email */}
          </div>
          {/* school level */}
          {formData.schoolLevel ? (
            <div className="card-label">
              <p className="cared-label__value big-card--subtitle">
                {" "}
                {formData.schoolLevel}
              </p>{" "}
            </div>
          ) : (
            <p className="card-label big-card--subtitle">School Level </p>
          )}
          {/* card school city */}
          {formData.schoolCity ? (
            <div className="card-label">
              <p className="big-card--address__label big-card--address">
                Address&nbsp;
              </p>{" "}
              <p className="big-card--address"> {formData.schoolSubcity}</p>{" "}
              <p className="big-card--address">, {formData.schoolCity}</p>
              {""}
            </div>
          ) : (
            <p className="big-card--address__label big-card--address">
              Address{" "}
            </p>
          )}
          {/* card school phone */}
          {formData.schoolPhone ? (
            <div className="card-label">
              <p className="big-card--address__label big-card--address">
                Phone&nbsp;
              </p>{" "}
              <p className="big-card--address"> {formData.schoolPhone}</p>{" "}
            </div>
          ) : (
            <p className="big-card--address__label big-card--address">Phone </p>
          )}
          {/* school email */}
          {formData.schoolEmail ? (
            <div className="card-label">
              <p className="big-card--address__label big-card--address">
                E-mail&nbsp;
              </p>{" "}
              <p className="big-card--address"> {formData.schoolEmail}</p>{" "}
            </div>
          ) : (
            <p className="big-card--address__label big-card--address">
              E-mail{" "}
            </p>
          )}
          {/* School social media */}
          <section>
            {formDataLinks.map((value, index) => (
              <div key={index} className="inline-block">
                <div className="card-label">
                  <p className="big-card--address__label big-card--address">
                    {value.link}
                  </p>
                  &nbsp;
                  <p className=" big-card--address">{value.url}</p>
                </div>
                {Object.values(value).map((v, i) => (
                  <p className=" big-card--address" key={i}>
                    {/* {v}&nbsp; */}
                  </p>
                ))}
              </div>
            ))}
          </section>
        </div>
        <div className="big-card--body">
          Our school {formData.schoolName ? <>{formData.schoolCity}</> : <></>}{" "}
          is located at Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Aspernatur distinctio ipsam nesciunt eos quia sunt accusamus,
          architecto alias quas ab praesentium saepe harum, cum esse aut! Quas
          quos sequi voluptate quaerat, dicta illo, ea quasi voluptates error
          tempore provident eaque.
          {formData.schoolCity ? <>{formData.schoolCity} </> : <></>}
        </div>
        <div className=" flex-start">
          <img className="big-card--bullet-svg" src={milestoneTrophy} />
          <div className="big-card--description">
            <h4 className="big-card--bullet-label">Achievements</h4>
            <h4 className="big-card--bullet-text">
              <ul className="big-card--list big-card--body">
                <li>Achievement 1</li>
                <li>Achievement 2</li>
                <li>Achievement 3</li>
              </ul>
            </h4>
          </div>
        </div>
        <div className="big-card-bullet-section flex-start">
          <img className="big-card--bullet-svg" src={milestoneTrophy} />
          <div className="big-card--description">
            <p className="big-card--bullet-label">Semesters</p>
            <p className="big-card--bullet-text">
              <ul className="big-card--list big-card--body">
                <li>Semester I</li>
                <li>Semester 2</li>
                {/* <li>Achievement 3</li> */}
              </ul>
            </p>
          </div>
        </div>
        <div className="big-card--body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          asperiores, atque labore ut voluptatibus mollitia vero ratione
          accusantium blanditiis quam eveniet est praesentium excepturi!
          Mollitia asperiores laborum id ex aperiam a quod amet cumque
          aspernatur et quam molestiae nemo sed, reiciendis, vitae magni autem
          dolorum corrupti culpa porro sint ipsa saepe possimus! In est voluptas
          earum totam consequatur tenetur pariatur enim fuga, eos sequi, sint
          nobis. Harum incidunt id rerum a perferendis qui accusamus consectetur
          esse, aliquam commodi vitae ab dicta. Alias ea ipsa ipsam accusantium
          maxime quos, aperiam sint dignissimos non suscipit deserunt
          consectetur vel. Non, voluptatibus? Fugit culpa delectus in
          necessitatibus assumenda nisi deleniti soluta eligendi animi, iste,
          natus quo ad. Error laudantium officiis sed! Eaque deserunt magni
          maiores magnam impedit eligendi tempore repudiandae maxime numquam,
          consequuntur dignissimos quod non suscipit praesentium voluptatem
          aliquam amet? Ullam, illo eum omnis perferendis praesentium quaerat
          aspernatur, earum ipsam suscipit voluptate, a minima fuga. Nulla
          numquam labore eaque excepturi fugiat repudiandae doloribus dolores
          tenetur laborum quidem, laboriosam vitae, aliquam temporibus et est
          distinctio, vero atque eum suscipit voluptatibus possimus sed soluta.
          Omnis laborum ducimus nostrum voluptas nihil accusantium, rem
          perferendis consequuntur doloremque animi qui praesentium facilis cum?
          Maxime laboriosam doloribus, rerum ea architecto maiores a eius
          excepturi aut officiis quidem tempore ex harum expedita vitae impedit
          adipisci aliquid doloremque accusantium unde quasi ratione. At alias a
    
          iusto! Aliquid excepturi cum vero. Ut vel libero dolorum numquam velit
          magni fugit placeat inventore ipsum necessitatibus voluptas, quam sint
          at laboriosam? Numquam nobis, aperiam mollitia reiciendis modi
          accusantium minima recusandae dignissimos distinctio quidem sunt
          expedita sed atque tempora ex at veritatis obcaecati blanditiis! Eaque
          dolorum ad hic! Eaque et soluta tenetur veniam provident eos! Aperiam,
          deleniti amet! Distinctio autem, error saepe consequuntur incidunt
          veniam. Totam illum provident temporibus quae quidem adipisci
          consequatur neque magni tenetur maiores! Atque, ea mollitia inventore
          nihil voluptatem unde excepturi tempore ipsam reprehenderit.
        </div>
      </div>
    </div>
  );
};

export default BiggerCard;
