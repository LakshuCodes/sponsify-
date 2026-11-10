import { Link } from "react-router-dom";

export default function Page() {
  return (
    <main style={{minHeight:"100vh",padding:"48px",background:"#f8f7fc",fontFamily:"Arial,sans-serif"}}>
      <h1 style={{color:"#8174E8"}}>Creator Marketplace</h1>
      <p>Discover campaigns and find brand collaborations.</p>
      <Link to="/creator/dashboard">Back to Dashboard</Link>
    </main>
  );
}
