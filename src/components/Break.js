// eslint-disable-next-line unicorn/filename-case
import moment from "moment";
import React from "react";

// const buttonPlusMinusStyle = {};
// const buttonPlusMinusStyleDisabledButton = {
//     backgroundColor: "#ffb3b3",
//     cursor: "not-allowed",
// };
// const buttonPlusMinusStyleDisabledButton2 = {
//     backgroundColor: "#cc0000",
//     cursor: "not-allowed",
// };
// const buttonPlusMinusStyleDisabledButton3 = {
//     backgroundColor: "#4d0000",
//     cursor: "not-allowed",
//     color: "white",
// };

const Break = ({
    breakLength,
    decrementBreakLength,
    incrementBreakLength,
    // isStarted,
}) => {
    const breakLengthInMinutes = moment.duration(breakLength, "s").minutes();

    return (
        <div className={"shape shape--break"}>
            <button
                className={"button button--break--plus"}
                onClick={incrementBreakLength}
            />
            <button
                className={"button button--break--moins"}
                onClick={decrementBreakLength}
            />
            <div className={"ellipse ellipse--break"} id={"break-length"}>
                {breakLengthInMinutes}
            </div>
            <div className={"text text--break"}>
                <div className={"letter-box letter-box--4"}>
                    <span className={"letter"}>{"B"}</span>
                </div>
                <div className={"letter-box letter-box--5-5"}>
                    <span className={"letter"}>{"R"}</span>
                </div>
                <div className={"letter-box letter-box--7"}>
                    <span className={"letter--rotateInverse"}>{"E"}</span>
                </div>
                <div className={"letter-box letter-box--8-5"}>
                    <span className={"letter--rotate"}>{"A"}</span>
                </div>
                <div
                    className={
                        "letter-box letter-box--10 letter-box--backWhite"
                    }>
                    <span className={"letter--rotate"}>{"K"}</span>
                </div>
            </div>
        </div>
    );
};

export default Break;
