# Sponsify 🚀
### Transparent Campaigns. Verified Results. Guaranteed Payments.

Sponsify is a blockchain-powered influencer marketing marketplace designed to make brand–creator collaborations more transparent, accountable, and secure.

It connects brands looking to run creator campaigns with influencers seeking sponsorship opportunities. By combining campaign management with smart-contract-based escrow, Sponsify aims to reduce payment disputes, improve trust, and bring accountability to the creator economy.

---

## 💡 The Problem

Influencer marketing is growing rapidly, but collaborations still face several challenges:

- **Payment uncertainty:** Creators may complete campaigns without receiving payments on time.
- **Lack of transparency:** Brands and creators often lack a shared, verifiable record of campaign milestones.
- **Trust issues:** Both parties face uncertainty around deliverables, approvals, and payment commitments.
- **Fragmented workflows:** Campaign discovery, applications, communication, submissions, and payments often happen across different platforms.

## ✨ Our Solution

Sponsify brings the campaign lifecycle into one platform, with smart-contract escrow designed to make payments more transparent and accountable.

### Core Features

| Feature | Description |
|---|---|
| Brand Dashboard | Create campaigns and manage collaborations. |
| Creator Marketplace | Discover sponsorship opportunities. |
| Campaign Applications | Allow creators to apply to relevant campaigns. |
| Smart Contract Escrow | Securely hold campaign funds on the blockchain. |
| Deliverable Submission | Let creators submit campaign work for review. |
| Milestone-Based Payments | Release escrowed funds after the required approval. |
| Payment Tracking | View payment and transaction status. |
| Campaign Analytics | Track campaign activity and performance. |

## 🔄 How Sponsify Works

1. **Create a Campaign:** A brand publishes a campaign with its requirements, budget, and deliverables.
2. **Apply:** Creators discover the campaign and submit applications.
3. **Select:** The brand reviews applications and selects a creator.
4. **Fund Escrow:** The brand deposits the agreed campaign amount into a smart contract.
5. **Submit Deliverables:** The creator completes the work and submits the deliverables.
6. **Review and Approve:** The brand reviews the submission and approves the milestone.
7. **Release Payment:** The smart contract releases the escrowed funds to the creator.

## 🔐 The Proof-to-Pay Protocol

Sponsify's central idea is its **Proof-to-Pay Protocol**: connecting campaign milestones with blockchain-based payment execution.

Instead of relying entirely on informal payment promises, the platform uses a smart-contract escrow workflow to establish a verifiable record of funding and payment release.

The blockchain records relevant transactions and contract events. Campaign deliverable quality and social media engagement still require appropriate off-chain review or verification; they are not automatically proven by the blockchain.

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| Frontend | React, Vite, Tailwind CSS |
| Routing | React Router |
| Backend | Node.js, Express.js |
| Database | Supabase / PostgreSQL |
| Smart Contracts | Solidity |
| Development Environment | Hardhat |
| Blockchain Network | Polygon Amoy Testnet |
| Wallet Integration | MetaMask |
| Decentralized Storage | IPFS / Pinata (planned) |

*Some integrations are planned and may change as development progresses.*

## 🏗️ Project Architecture

```text
                 SPONSIFY
                    |
          +---------+---------+
          |                   |
      BRAND USER          CREATOR USER
          |                   |
          +---------+---------+
                    |
              REACT FRONTEND
                    |
             BACKEND API
                    |
          +---------+---------+
          |                   |
       DATABASE          SMART CONTRACT
          |                   |
     Campaigns,          Escrow & Payment
     Applications,       Transactions
     Deliverables             |
                         POLYGON AMOY
```

## 📁 Project Structure

```text
sponsify/
│
├── frontend/
│   ├── public/
│   │   └── stitch/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── brand/
│   │   │   ├── creator/
│   │   │   └── common/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   │   ├── brand/
│   │   │   ├── creator/
│   │   │   └── public/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── contracts/             # Smart contracts (planned)
├── backend/               # Backend API (planned)
├── README.md
└── .gitignore
```

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js (LTS recommended)
- npm
- Git
- MetaMask browser extension (for wallet integration)
- A Polygon Amoy testnet wallet (for blockchain testing)

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/sponsify.git
cd sponsify
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173/
```

### 4. Build for Production

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 🔗 Blockchain Workflow

The planned smart-contract workflow includes:

- Campaign escrow creation.
- Brand deposits into escrow.
- Recording campaign funding transactions.
- Creator deliverable milestone submission.
- Brand approval of completed milestones.
- Secure release of escrowed funds.
- On-chain transaction tracking.

All blockchain functionality will initially be tested on the Polygon Amoy testnet. Testnet tokens have no real monetary value.


## 🔮 Future Possibilities

- Decentralized creator reputation profiles.
- Verifiable campaign completion records.
- Automated milestone-based payment workflows.
- IPFS-based deliverable storage.
- More advanced campaign analytics.
- Multi-chain support.

## 👥 Team

Built by a two-member team for **HERHACK 2026**.

We are exploring how blockchain technology can improve trust, transparency, and accountability in the creator economy.

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push your branch.
5. Open a Pull Request describing your contribution.

## ⚠️ Disclaimer

Sponsify is an experimental hackathon project. Smart contracts and payment workflows are under development. The initial implementation is intended for testnet demonstration and should not be used to hold real funds.

## 📄 License

This project is currently developed as a hackathon prototype. A license will be added before public reuse and distribution.

---

**Sponsify — Building a more transparent creator economy, one collaboration at a time.**
