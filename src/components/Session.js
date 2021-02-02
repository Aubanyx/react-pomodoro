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

const Session = ({
    sessionLength,
    decrementSessionLength,
    incrementSessionLength,
    // isStarted,
}) => {
    const sessionLengthInMinutes = moment
        .duration(sessionLength, "s")
        .minutes();

    return (
        <div className={"shape shape--session"}>
            <button
                className={"button button--session--plus"}
                onClick={incrementSessionLength}
            />
            <button
                className={"button button--session--moins"}
                onClick={decrementSessionLength}
            />
            <div className={"ellipse ellipse--session"} id={"session-length"}>
                {sessionLengthInMinutes}
            </div>
            <div className={"text text--session"}>
                <div
                    className={
                        "letter-box letter-box--10 letter-box--backWhite"
                    }>
                    <span className={"letter"}>{"S"}</span>
                </div>
                <div className={"letter-box letter-box--8-5"}>
                    <span className={"letter"}>{"E"}</span>
                </div>
                <div className={"letter-box letter-box--7"}>
                    <span className={"letter--rotateInverse"}>{"S"}</span>
                </div>
                <div className={"letter-box letter-box--5-5"}>
                    <span className={"letter--rotate"}>{"S"}</span>
                </div>
                <div className={"letter-box letter-box--4"}>
                    <span className={"letter"}>{"I"}</span>
                </div>

                <div className={"letter-box letter-box--2-5"}>
                    <span className={"letter"}>{"O"}</span>
                </div>

                <div className={"letter-box letter-box--1-7"}>
                    <span className={"letter"}>{"N"}</span>
                </div>
            </div>
        </div>
    );
};

export default Session;
