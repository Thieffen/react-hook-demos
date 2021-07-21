import { useState, useEffect } from "react";

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());

  // will run "immediately" when page is loaded.
  // you don't know precisely when
  // to have control use "useLayoutEffect" hook instead
  //
  // then this useEffect hook will be run every time the
  // component is rendered.
  //
  // in practice, the timer will set a new value for the 'time'
  // variable after 1sec. This 'time' variable is managed by React
  // via the 'useState' hook. As a consequence, when the value is
  // modified, it triggers a new rendering of the component
  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  });

  // Addind an empty array of dependencies would make useEffect to be
  // triggered only at the beginning.
  //
  // useEffect(() => {
  //  const timer = setTimeout(() => setTime(new Date()), 1000);
  //  return () => clearTimeout(timer);
  // }, []);

  // Add the 'time' and 'setTime' variables as a dependencies
  // lead back to the expected behaviour
  //
  // useEffect(() => {
  //  const timer = setTimeout(() => setTime(new Date()), 1000);
  //  return () => clearTimeout(timer);
  // }, [time, setTime]);

  return <h1>useEffect Example: {time.toLocaleTimeString()}</h1>;
};

export default EffectComponent;
