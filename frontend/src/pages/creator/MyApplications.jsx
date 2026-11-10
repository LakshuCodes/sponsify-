import { Link } from "react-router-dom";

export default function Page() {
  return (
    <main style={{minHeight:"100vh",padding:"48px",background:"#f8f7fc",fontFamily:"Arial,sans-serif"}}>
      <h1 style={{color:"#8174E8"}}>My Applications</h1>
      <p>Track the campaigns you have applied to.</p>
      <Link to="/creator/dashboard">Back to Dashboard</Link>
    </main>
  );
}
