import React, {useState, useEffect} from "react";
import Break from "./components/Break";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";
import moment from "moment";
import "./scss/style.scss";

function App() {
    const [sessionLength, setSessionLength] = useState(60 * 25);
    const [breakLength, setBreakLength] = useState(300);
    const [IntervalId, setIntervalId] = useState(null);
    const [currentSessionType, setCurrentSessionType] = useState("Session"); // 'Session' or 'Break'
    const [timeLeft, setTimeLeft] = useState(sessionLength);

    useEffect(() => {
        setTimeLeft(sessionLength);
    }, [sessionLength]);

    const formattedTitleTimeLeft = moment
        .duration(timeLeft, "s")
        .format("mm:ss", {trim: false});

    useEffect(() => {
        document.title = `${formattedTitleTimeLeft} | ${currentSessionType} - Pomodoro App`;
    }, [formattedTitleTimeLeft]);

    const decrementBreakLength = () => {
        const newBreakLength = breakLength - 60;

        if (newBreakLength < 60) {
            setBreakLength(60);
        } else {
            setBreakLength(newBreakLength);
        }
    };

    const incrementBreakLength = () => {
        if (breakLength >= 60 * 59) {
            setBreakLength(60 * 59);
        } else {
            setBreakLength(breakLength + 60);
        }
    };

    const decrementSessionLength = () => {
        const newSessionLength = sessionLength - 60;

        if (newSessionLength < 60) {
            setSessionLength(60);
        } else {
            setSessionLength(newSessionLength);
        }
    };

    const incrementSessionLength = () => {
        if (sessionLength >= 60 * 59) {
            setSessionLength(60 * 59);
        } else {
            setSessionLength(sessionLength + 60);
        }
    };

    const isStarted = IntervalId !== null;
    const handleStartStopClick = () => {
        if (isStarted) {
            //stop decrementation
            clearInterval(IntervalId);
            setIntervalId(null);
        } else {
            //decrement time left by one every second (1000ms)
            const newIntervalId = setInterval(() => {
                setTimeLeft(previousTimeLeft => previousTimeLeft - 1);
            }, 1000);
            setIntervalId(newIntervalId);
        }
    };

    const handleResetButtonClick = () => {
        clearInterval(IntervalId);
        setIntervalId(null);
        setCurrentSessionType("Session");
        setSessionLength(60 * 25);
        setBreakLength(300);
        setTimeLeft(25 * 60);
    };

    return (
        <article className={"container"}>
            <section className={"section__container"}>
                <div className={"shape shape--start"}>
                    <button
                        className={"shape shape--start button button--start"}
                        onClick={handleStartStopClick}
                    />
                    <div className={"back back--start"} />
                    <div className={"text text--start"}>
                        <div className={"letter-box letter-box--10"}>
                            <span className={"letter"}>
                                {isStarted ? "P" : "S"}
                            </span>
                        </div>
                        <div
                            className={
                                "letter-box letter-box--8-5 letter-box--backWhite"
                            }>
                            <span className={"letter"}>
                                {isStarted ? "A" : "T"}
                            </span>
                        </div>
                        <div className={"letter-box letter-box--7"}>
                            <span className={"letter"}>
                                {isStarted ? "U" : "A"}
                            </span>
                        </div>
                        <div className={"letter-box letter-box--5-5"}>
                            <span className={"letter"}>
                                {isStarted ? "S" : "R"}
                            </span>
                        </div>
                        <div
                            className={
                                "letter-box letter-box--4 letter-box--backWhite"
                            }>
                            <span className={"letter--rotate"}>
                                {isStarted ? "E" : "T"}
                            </span>
                        </div>
                    </div>
                </div>

                <Break
                    breakLength={breakLength}
                    decrementBreakLength={decrementBreakLength}
                    incrementBreakLength={incrementBreakLength}
                    isStarted={isStarted}
                />
            </section>

            <section className={"container--timer"}>
                <TimeLeft
                    breakLength={breakLength}
                    timerLabel={currentSessionType}
                    setTimerLabel={setCurrentSessionType}
                    sessionLength={sessionLength}
                    timeLeft={timeLeft}
                    setTimeLeft={setTimeLeft}
                />
            </section>

            <section className={"section__container"}>
                <Session
                    sessionLength={sessionLength}
                    decrementSessionLength={decrementSessionLength}
                    incrementSessionLength={incrementSessionLength}
                    isStarted={isStarted}
                />

                <div className={"shape shape--reset"}>
                    <button
                        className={"shape shape--reset button button--reset"}
                        onClick={handleResetButtonClick}
                    />
                    <div className={"text text--reset"}>
                        <div
                            className={
                                "letter-box letter-box--4 letter-box--backWhite"
                            }>
                            <span className={"letter"}>{"R"}</span>
                        </div>
                        <div className={"letter-box letter-box--5-5"}>
                            <span className={"letter"}>{"E"}</span>
                        </div>
                        <div
                            className={
                                "letter-box letter-box--7 letter-box--backWhite"
                            }>
                            <span className={"letter--rotateInverse"}>
                                {"S"}
                            </span>
                        </div>
                        <div className={"letter-box letter-box--8-5"}>
                            <span className={"letter"}>{"E"}</span>
                        </div>
                        <div className={"letter-box letter-box--10"}>
                            <span className={"letter--rotate"}>{"T"}</span>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}

export default App;
