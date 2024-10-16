let CurrentTime = () => {
  let time=new Date();
  const options={timeZone:"America/New_York",hour12:"false",hour:"numeric",minute:"numeric",second:"numeric"}
  return (
    // <p>This is the current time:- {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
    <p>This is the current time in New York:- {time.toLocaleDateString()} - {time.toLocaleTimeString("en-US",options)}</p>
  );
};

export default CurrentTime;
