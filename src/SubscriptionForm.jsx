import "./SubscriptionForm.css"
function SubscriptionForm(){
return(
<>
<div className="mainDiv">
<h1>SUBSCRIBE</h1>
<h3>Sign up with your email address to receive news and updates</h3>
<form className="formAll" autoComplete="on">
  <input type="firstname" placeholder="First name" className="input-field"/>
  <input type="lastname" placeholder="Last name" className="input-field"/>
  <input type="email" placeholder="Email" className="input-field"/><br/>
  <button className="Subscribe">Subscribe</button>
  </form>
  </div>
</>
)
}
export default SubscriptionForm;