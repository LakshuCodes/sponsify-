import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div style={{minHeight:"100vh",display:"grid",placeItems:"center",background:"#f8f7fc",fontFamily:"Arial,sans-serif"}}>
      <div style={{background:"white",padding:"40px",borderRadius:"16px",width:"min(380px,85%)",boxShadow:"0 8px 30px #0000000d"}}>
        <h1 style={{color:"#8174E8"}}>Sponsify</h1>
        <h2>Create your account</h2>
        <p>Join the creator marketing marketplace.</p>
        <form onSubmit={(e)=>{e.preventDefault();alert("Registration will be connected to the backend soon.");}}>
          <label>Full name</label>
          <input required placeholder="Your name" style={{display:"block",width:"100%",padding:"12px",margin:"8px 0 16px",boxSizing:"border-box"}} />
          <label>Email</label>
          <input type="email" required placeholder="Enter your email" style={{display:"block",width:"100%",padding:"12px",margin:"8px 0 16px",boxSizing:"border-box"}} />
          <label>Password</label>
          <input type="password" required minLength="6" placeholder="Create a password" style={{display:"block",width:"100%",padding:"12px",margin:"8px 0 20px",boxSizing:"border-box"}} />
          <button type="submit" style={{width:"100%",padding:"13px",background:"#8174E8",color:"white",border:0,borderRadius:"8px",cursor:"pointer"}}>Create Account</button>
        </form>
        <p>Already have an account? <Link to="/login">Sign in</Link></p>
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
}
