import { Link } from "react-router-dom";

export default function Page() {
  return (
    <main style={{minHeight:"100vh",padding:"48px",background:"#f8f7fc",fontFamily:"Arial,sans-serif"}}>
      <h1 style={{color:"#8174E8"}}>Create Campaign</h1>
      <p>Create and publish a new creator campaign.</p>
      <Link to="/brand/dashboard">Back to Dashboard</Link>
    </main>
  );
}
