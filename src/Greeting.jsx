const Greeting = () => {
    const userType = "admin" 
    switch (userType) {
      case "admin":
        return <h1>Welcome Admin!</h1>;
      case "user":
        return <h1>Welcome User!</h1>;
      default:
        return <h1>Please sign up.</h1>;
    }
  };
  export default Greeting