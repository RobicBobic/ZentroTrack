import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { TrendingUp, Shield, Zap, Maximize2, Monitor, ChevronDown, ChevronUp, X, Menu, Bell, Wallet, BarChart3, Settings } from 'lucide-react';
import './zentro-track.css';

const ZentroTrack = () => {
  const [activeTab, setActiveTab] = useState('30d');
  const [openFaq, setOpenFaq] = useState(null);
  const [leaderboardFilter, setLeaderboardFilter] = useState('all');
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sample data for portfolio chart
  const portfolioData = [
    { date: 'May 26', value: 3200 },
    { date: 'May 27', value: 3800 },
    { date: 'May 28', value: 9400 },
    { date: 'May 29', value: 3800 },
    { date: 'May 30', value: 4200 },
    { date: 'May 31', value: 12800 },
    { date: 'Jun 01', value: 15863 },
  ];

  const leaderboardData = [
    { rank: 1, name: 'Alice', wallet: '0x7a3...4f9b', realized: '+87.9%', winRate: '75.0%', trades: 34, pnl: '$2,650' },
    { rank: 2, name: 'Bob', wallet: '0x9c2...8d1a', realized: '+76.3%', winRate: '68.8%', trades: 121, pnl: '$1,980' },
    { rank: 3, name: 'Carol', wallet: '0x4d8...2c3e', realized: '+69.7%', winRate: '72.2%', trades: 54, pnl: '$3,220' },
    { rank: 4, name: 'David', wallet: '0x1f5...7b9c', realized: '+65.8%', winRate: '65.9%', trades: 128, pnl: '$850' },
    { rank: 5, name: 'Emma', wallet: '0x8a4...3e2d', realized: '+62.8%', winRate: '70.5%', trades: 43, pnl: '$4,610' },
  ];

  const faqs = [
    { 
      question: 'What is Zentro Track?', 
      answer: 'Zentro Track is a comprehensive wallet analysis platform that helps you track and analyze cryptocurrency wallets across multiple chains.' 
    },
    { 
      question: 'Which wallets are supported?', 
      answer: 'We support all major blockchain wallets including MetaMask, Phantom, and hardware wallets across Ethereum, Solana, BSC, and more.' 
    },
    { 
      question: 'Are there costs for using Zentro Track?', 
      answer: 'Zentro Track offers a free tier with basic features. Premium features are available through our subscription plans.' 
    },
    { 
      question: 'How secure is my wallet data?', 
      answer: 'We use read-only access and never store your private keys. Your data is encrypted and we follow industry-leading security practices.' 
    },
    { 
      question: 'Can I track multiple wallets?', 
      answer: 'Yes! You can track unlimited wallets across different blockchain networks with our platform.' 
    },
  ];

  const features = [
    {
      icon: <TrendingUp size={32} />,
      title: 'Real-Time Analytics',
      description: 'Track your portfolio performance with live updates and detailed analytics across all your wallets.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Secure & Private',
      description: 'Your data is encrypted and secure. We never store your private keys or request sensitive information.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Lightning Fast',
      description: 'Get instant insights with our optimized infrastructure that processes millions of transactions per second.'
    },
    {
      icon: <Maximize2 size={32} />,
      title: 'Multi-Chain Support',
      description: 'Track wallets across Ethereum, Solana, BSC, Polygon, and 20+ other blockchain networks.'
    },
    {
      icon: <Monitor size={32} />,
      title: 'Beautiful Dashboard',
      description: 'Enjoy a sleek, intuitive interface designed for both beginners and professional traders.'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Advanced Metrics',
      description: 'Access detailed metrics including win rate, realized PnL, trade history, and performance trends.'
    },
  ];

  const holdingsData = [
    { token: 'ETH', amount: '12.5', value: '$24,250', change: '+5.2%', positive: true },
    { token: 'SOL', amount: '450', value: '$18,900', change: '+12.8%', positive: true },
    { token: 'USDC', amount: '5,000', value: '$5,000', change: '0.0%', positive: true },
    { token: 'MATIC', amount: '8,200', value: '$6,560', change: '-2.1%', positive: false },
  ];

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-brand">
            <img src="/logo.png" alt="Zentro Track" className="logo-image" />
            <span className="logo-text">Zentro Track</span>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links desktop-nav">
            <a href="#home" className="nav-link active">Home</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#dashboard" className="nav-link">Dashboard</a>
            <a href="#leaderboard" className="nav-link">Leaderboard</a>
            <a href="#faq" className="nav-link">FAQ</a>
          </div>

          <div className="nav-actions desktop-nav">
            <button className="btn-secondary">Sign In</button>
            <button className="btn-primary" onClick={() => setShowWalletModal(true)}>
              <Wallet size={18} />
              Connect Wallet
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#home" className="mobile-nav-link">Home</a>
            <a href="#features" className="mobile-nav-link">Features</a>
            <a href="#dashboard" className="mobile-nav-link">Dashboard</a>
            <a href="#leaderboard" className="mobile-nav-link">Leaderboard</a>
            <a href="#faq" className="mobile-nav-link">FAQ</a>
            <div className="mobile-nav-actions">
              <button className="btn-secondary full-width">Sign In</button>
              <button className="btn-primary full-width" onClick={() => setShowWalletModal(true)}>
                Connect Wallet
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            <span className="badge-text">🚀 Track Your Crypto Portfolio</span>
          </div>
          <h1 className="hero-title animate-fade-in-up">
            Analyze Your Wallet
            <span className="gradient-text"> Performance</span>
          </h1>
          <p className="hero-description animate-fade-in-up delay-1">
            Track, analyze, and optimize your cryptocurrency portfolio with real-time insights
            across multiple blockchain networks. Join thousands of traders making smarter decisions.
          </p>
          <div className="hero-buttons animate-fade-in-up delay-2">
            <button className="btn-primary-large" onClick={() => setShowWalletModal(true)}>
              Get Started Free
            </button>
            <button className="btn-outline-large">
              View Demo
            </button>
          </div>
          <div className="hero-stats animate-fade-in-up delay-3">
            <div className="stat-item">
              <div className="stat-value">$2.5B+</div>
              <div className="stat-label">Volume Tracked</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">50K+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">25+</div>
              <div className="stat-label">Chains Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <div className="section-header">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-description">
            Everything you need to track and analyze your cryptocurrency portfolio
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className={`feature-card animate-fade-in-up delay-${index % 3}`}>
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="dashboard-section" id="dashboard">
        <div className="section-header">
          <h2 className="section-title">Your Wallet Dashboard</h2>
          <p className="section-description">
            Get a complete overview of your portfolio performance
          </p>
        </div>

        <div className="dashboard-container">
          {/* Wallet Overview Card */}
          <div className="dashboard-card">
            <div className="card-header">
              <div>
                <h3 className="card-title">Wallet Overview</h3>
                <p className="wallet-address">0x742d...35a9</p>
              </div>
              <button className="icon-button">
                <Settings size={20} />
              </button>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-header">
                  <span className="stat-title">Total Value</span>
                  <TrendingUp size={16} className="text-green" />
                </div>
                <div className="stat-value-large">$54,713</div>
                <div className="stat-change positive">+12.5% ($6,095)</div>
              </div>

              <div className="stat-card">
                <div className="stat-header">
                  <span className="stat-title">Tokens Held</span>
                </div>
                <div className="stat-value-large">24</div>
                <div className="stat-change neutral">Across 5 chains</div>
              </div>

              <div className="stat-card">
                <div className="stat-header">
                  <span className="stat-title">24h Change</span>
                </div>
                <div className="stat-value-large">+$1,243</div>
                <div className="stat-change positive">+2.32%</div>
              </div>

              <div className="stat-card">
                <div className="stat-header">
                  <span className="stat-title">Win Rate</span>
                </div>
                <div className="stat-value-large">68.5%</div>
                <div className="stat-change positive">+5.2% vs avg</div>
              </div>
            </div>

            {/* Chart Section */}
            <div className="chart-container">
              <div className="chart-header">
                <h4 className="chart-title">Portfolio Performance</h4>
                <div className="tab-buttons">
                  {['24h', '7d', '30d', '1y'].map((tab) => (
                    <button
                      key={tab}
                      className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={portfolioData}>
                    <XAxis 
                      dataKey="date" 
                      stroke="#6b7280" 
                      style={{ fontSize: '12px' }}
                    />
                    <YAxis 
                      stroke="#6b7280" 
                      style={{ fontSize: '12px' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#a855f7" 
                      strokeWidth={3}
                      dot={{ fill: '#a855f7', r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Holdings Table */}
            <div className="holdings-container">
              <h4 className="holdings-title">Top Holdings</h4>
              <div className="holdings-table">
                <div className="table-header">
                  <span>Token</span>
                  <span>Amount</span>
                  <span>Value</span>
                  <span>24h Change</span>
                </div>
                {holdingsData.map((holding, index) => (
                  <div key={index} className="table-row">
                    <span className="token-name">{holding.token}</span>
                    <span>{holding.amount}</span>
                    <span>{holding.value}</span>
                    <span className={holding.positive ? 'change-positive' : 'change-negative'}>
                      {holding.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="leaderboard-section" id="leaderboard">
        <div className="section-header">
          <h2 className="section-title">Top Traders Leaderboard</h2>
          <p className="section-description">
            See how you rank against the best traders in the community
          </p>
        </div>

        <div className="leaderboard-container">
          <div className="leaderboard-filters">
            {['all', '24h', '7d', '30d'].map((filter) => (
              <button
                key={filter}
                className={`filter-button ${leaderboardFilter === filter ? 'active' : ''}`}
                onClick={() => setLeaderboardFilter(filter)}
              >
                {filter === 'all' ? 'All Time' : filter.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="leaderboard-table">
            <div className="table-header-row">
              <span>Rank</span>
              <span>Trader</span>
              <span>Wallet</span>
              <span>Realized PnL</span>
              <span>Win Rate</span>
              <span>Trades</span>
              <span>Total PnL</span>
            </div>

            {leaderboardData.map((trader) => (
              <div key={trader.rank} className={`leaderboard-row ${trader.rank <= 3 ? 'top-rank' : ''}`}>
                <span className="rank-badge">
                  {trader.rank <= 3 ? (
                    <span className={`medal rank-${trader.rank}`}>#{trader.rank}</span>
                  ) : (
                    `#${trader.rank}`
                  )}
                </span>
                <span className="trader-name">{trader.name}</span>
                <span className="wallet-address-small">{trader.wallet}</span>
                <span className="text-green">{trader.realized}</span>
                <span>{trader.winRate}</span>
                <span>{trader.trades}</span>
                <span className="pnl-value">{trader.pnl}</span>
              </div>
            ))}
          </div>

          <div className="leaderboard-footer">
            <button className="btn-outline">View Full Leaderboard</button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-description">
            Get started in three simple steps
          </p>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3 className="step-title">Connect Your Wallet</h3>
            <p className="step-description">
              Connect your Web3 wallet securely using WalletConnect or directly with MetaMask, Phantom, or other supported wallets.
            </p>
            <div className="step-action">
              <button className="btn-primary" onClick={() => setShowWalletModal(true)}>
                <span>Connect Wallet</span>
              </button>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3 className="step-title">Add Wallets to Track</h3>
            <p className="step-description">
              Add any wallet addresses you want to monitor. Track your own wallets or follow top traders.
            </p>
            <div className="step-action">
              <input
                type="text"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                placeholder="0xYOUR...ADDRESS"
                className="wallet-input"
              />
              <button 
                className="btn-primary full-width"
                onClick={() => {
                  if (walletAddress.trim()) {
                    alert(`Wallet ${walletAddress} has been added!`);
                    setWalletAddress('');
                  }
                }}
              >
                Add Wallet
              </button>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3 className="step-title">Track & Analyze</h3>
            <p className="step-description">
              Monitor your portfolio in real-time with detailed analytics, performance metrics, and actionable insights.
            </p>
            <div className="step-features">
              <div className="feature-item">
                <BarChart3 size={20} />
                <span>Real-time Analytics</span>
              </div>
              <div className="feature-item">
                <TrendingUp size={20} />
                <span>Performance Tracking</span>
              </div>
              <div className="feature-item">
                <Bell size={20} />
                <span>Smart Alerts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">
            Everything you need to know about Zentro Track
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span>{faq.question}</span>
                {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openFaq === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Track Your Portfolio?</h2>
          <p className="cta-description">
            Join thousands of traders who trust Zentro Track for their portfolio management
          </p>
          <button className="btn-primary-large" onClick={() => setShowWalletModal(true)}>
            Get Started Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/logo.png" alt="Zentro Track" className="logo-image" />
            <span className="logo-text">Zentro Track</span>
          </div>
          <p className="footer-text">
            © 2024 Zentro Track. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Wallet Connect Modal */}
      {showWalletModal && (
        <div className="modal-overlay" onClick={() => setShowWalletModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Connect Wallet</h3>
              <button className="modal-close" onClick={() => setShowWalletModal(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="modal-body">
              <button className="wallet-option">
                <Wallet size={24} />
                <span>MetaMask</span>
              </button>
              <button className="wallet-option">
                <Wallet size={24} />
                <span>Phantom</span>
              </button>
              <button className="wallet-option">
                <Wallet size={24} />
                <span>WalletConnect</span>
              </button>
              <button className="wallet-option">
                <Wallet size={24} />
                <span>Coinbase Wallet</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ZentroTrack;