/* eslint-disable react/button-has-type */
// eslint-disable-next-line unicorn/filename-case
import React, {useEffect} from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

const TimeLeft = ({
    breakLength,
    sessionLength,
    timerLabel,
    setTimerLabel,
    timeLeft,
    setTimeLeft,
}) => {
    useEffect(() => {
        // if timeLeft is zero
        if (timeLeft === 0) {
            // change session to break or break to session
            if (timerLabel === "Session") {
                setTimerLabel("Break");
                setTimeLeft(breakLength);
            } else if (timerLabel === "Break") {
                setTimerLabel("Session");
                setTimeLeft(sessionLength);
            }
        }
    }, [breakLength, timerLabel, sessionLength, timeLeft]);

    const formattedTimeLeft = moment
        .duration(timeLeft, "s")
        .format("mm:ss", {trim: false});

    return (
        <div className={"div--timer"}>
            <span className={"timer"}>{formattedTimeLeft}</span>
        </div>
    );
};

export default TimeLeft;

//il faut bloquer les boutons quand isStarted est true (remonter la fonction)
//ajouter la musique
//faire le style
