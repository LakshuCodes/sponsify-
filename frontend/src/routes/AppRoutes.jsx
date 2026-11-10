
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Public pages
import Home from "../pages/public/Home";
import Login from "../pages/public/Login";
import Signup from "../pages/public/Signup";

// Brand pages
import BrandDashboard from "../pages/brand/BrandDashboard";
import CreateCampaign from "../pages/brand/CreateCampaign";
import MyCampaigns from "../pages/brand/MyCampaigns";
import DiscoverCreators from "../pages/brand/DiscoverCreators";
import Applications from "../pages/brand/Applications";
import Payments from "../pages/brand/Payments";
import BrandAnalytics from "../pages/brand/BrandAnalytics";

// Creator pages
import CreatorDashboard from "../pages/creator/CreatorDashboard";
import Marketplace from "../pages/creator/Marketplace";
import CampaignDetails from "../pages/creator/CampaignDetails";
import MyApplications from "../pages/creator/MyApplications";
import Collaborations from "../pages/creator/Collaborations";
import Deliverables from "../pages/creator/Deliverables";
import Earnings from "../pages/creator/Earnings";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Brand */}
        <Route path="/brand/dashboard" element={<BrandDashboard />} />
        <Route path="/brand/create-campaign" element={<CreateCampaign />} />
        <Route path="/brand/campaigns" element={<MyCampaigns />} />
        <Route path="/brand/creators" element={<DiscoverCreators />} />
        <Route path="/brand/applications" element={<Applications />} />
        <Route path="/brand/payments" element={<Payments />} />
        <Route path="/brand/analytics" element={<BrandAnalytics />} />

        {/* Creator */}
        <Route path="/creator/dashboard" element={<CreatorDashboard />} />
        <Route path="/creator/marketplace" element={<Marketplace />} />
        <Route path="/creator/campaign/:id" element={<CampaignDetails />} />
        <Route path="/creator/applications" element={<MyApplications />} />
        <Route path="/creator/collaborations" element={<Collaborations />} />
        <Route path="/creator/deliverables" element={<Deliverables />} />
        <Route path="/creator/earnings" element={<Earnings />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
