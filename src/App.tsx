import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaArrowDown, FaRegClock, FaCheckCircle } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi'; // For the money icon on balance card
import Header from './components/Header';
import DashboardCard from './components/DashboardCard';
import SettingsPage from './components/SettingsPage';
import HelpPage from './components/HelpPage';
import SearchReportsPage from './components/SearchReportsPage';
import './styles/App.css';

// Mock data based on the image and your original content interpretation
const dashboardData = {
  outgoing: 1872.75,
  incoming: 890.50,
  tapOn: 780.50,
  reserved: 85.50,
  balance: 6421.50,
  cardNumber: '**** **** **** 3667',
  user: {
    name: 'Joel Boudreau',
    role: 'Verified Account',
    income: '9k',
    expenses: '4k',
    points: 98,
    avatar: 'adriano.jpg', // Re-purposing one of your images as a profile picture
  },
  accountOverviewData: [
    { label: 'Jan', value: 18 },
    { label: 'Feb', value: 30 },
    { label: 'Mar', value: 22 },
    { label: 'Apr', value: 45 },
    { label: 'May', value: 38 },
    { label: 'Jun', value: 55 },
    { label: 'Jul', value: 62 },
    { label: 'Aug', value: 48 },
  ],
  myExpenses: [
    { month: 'Jan', amount: 30 },
    { month: 'Feb', amount: 45 },
    { month: 'Mar', amount: 25, active: true }, // Active for the red bar
    { month: 'Apr', amount: 55 },
    { month: 'May', amount: 40 },
    { month: 'Jun', amount: 60 },
    { month: 'Jul', amount: 35 },
    { month: 'Aug', amount: 50 },
    { month: 'Sep', amount: 48 },
    { month: 'Oct', amount: 65 },
    { month: 'Nov', amount: 52 },
    { month: 'Dec', amount: 70 },
  ],
  earningsChartData: [
    { day: 'Mon', value: 20 },
    { day: 'Tue', value: 35 },
    { day: 'Wed', value: 30 },
    { day: 'Thu', value: 45 },
    { day: 'Fri', value: 40 },
    { day: 'Sat', value: 55 },
    { day: 'Sun', value: 50 },
  ],
  earningsAmount: 894.39,
  activities: [
    { name: 'Netflix Subscription', progress: 75, icon: '🍿' }, // Using emojis for simplicity, could be images
    { name: 'Football League Fees', progress: 60, icon: '⚽' },
    { name: 'Manga Collection', progress: 90, icon: '📚' },
  ]
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'light' ? 'light' : 'dark'; // Default to dark if no saved theme
  });

const [activePage, setActivePage] = useState<'dashboard' | 'settings' | 'help' | 'search-reports'>('dashboard'); // Par défaut : dashboard

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // Helper for drawing SVG path for the earnings chart
  const getPathData = (data: typeof dashboardData.earningsChartData, width: number, height: number) => {
    const maxVal = Math.max(...data.map(d => d.value));
    const minVal = Math.min(...data.map(d => d.value));
    const yRatio = height / (maxVal - minVal + 10); // Add buffer for min/max
    const xStep = width / (data.length - 1);

    let path = `M0,${height - (data[0].value - minVal) * yRatio}`;
    data.forEach((point, i) => {
      path += ` L${i * xStep},${height - (point.value - minVal) * yRatio}`;
    });
    return path;
  };

  const getAreaPathData = (data: typeof dashboardData.earningsChartData, width: number, height: number) => {
    const path = getPathData(data, width, height);
    // Close the path to form an area
    return `${path} L${width},${height} L0,${height} Z`;
  };

  return (
    <div className="container">
      <Header theme={theme}
        toggleTheme={toggleTheme}
        setActivePage={setActivePage} // Passez le setter d'état
        activePage={activePage}  />

      <main className={`main-content-area ${activePage === 'dashboard' ? 'dashboard-layout' : 'full-width-layout'}`}>
        {activePage === 'dashboard' ? (
          <>
        <section className="dashboard-left">
          <div className="overview-section">
            <div className="overview-header">
              <h2>Main Dashboard</h2>
              <div className="overview-tabs">
                <button className="active">Overview</button>
                <button>Account</button>
                <button>Services</button>
                <button>Payments</button>
              </div>
            </div>

            <div className="overview-cards-grid">
              <DashboardCard className="small-stat">
                <div className="stat-icon outgoing"><FaArrowUp /></div>
                <div className="stat-value outgoing">${dashboardData.outgoing.toFixed(2)}</div>
                <div className="stat-label">Outgoing</div>
              </DashboardCard>
              <DashboardCard className="small-stat">
                <div className="stat-icon incoming"><FaArrowDown /></div>
                <div className="stat-value incoming">${dashboardData.incoming.toFixed(2)}</div>
                <div className="stat-label">Incoming</div>
              </DashboardCard>
              <DashboardCard className="small-stat">
                <div className="stat-icon"><FaRegClock /></div>
                <div className="stat-value">${dashboardData.tapOn.toFixed(2)}</div>
                <div className="stat-label">Tap on</div>
              </DashboardCard>
              <DashboardCard className="small-stat">
                <div className="stat-icon reserved"><FaRegClock /></div> {/* Assuming reserved also uses a clock icon or similar */}
                <div className="stat-value">${dashboardData.reserved.toFixed(2)}</div>
                <div className="stat-label">Reserved</div>
              </DashboardCard>
            </div>
          </div>

          <DashboardCard title="Account Overview" className="transactions-card">
            <div className="transactions-chart-container">
              <div className="bar-chart">
                {dashboardData.accountOverviewData.map((data, index) => (
                  <div className="bar-chart-row" key={index}>
                    <span className="bar-chart-label">{data.label}</span>
                    <div className="bar-container">
                      <div className="bar-fill" style={{ width: `${data.value}%` }}>
                        <span className="bar-value">{data.value}k</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </DashboardCard>

          <DashboardCard title="My Expenses" className="expenses-chart-card">
            <div className="expenses-header">
              <h3>My Expenses</h3>
              <select>
                <option>Week</option>
                <option>Month</option>
                <option>Year</option>
              </select>
            </div>
            <div className="expenses-chart-inner">
              <div className="expenses-chart-area">
                {dashboardData.myExpenses.map((data, index) => (
                  <div
                    key={index}
                    className={`expenses-chart-bar ${data.active ? 'active' : ''}`}
                    style={{ height: `${data.amount * 2}px` }} /* Scale height for visualization */
                  >
                    <span className="amount">${data.amount}</span>
                  </div>
                ))}
              </div>
              <div className="expenses-chart-labels">
                {dashboardData.myExpenses.map((data, index) => (
                  <span key={index}>{data.month}</span>
                ))}
              </div>
            </div>
          </DashboardCard>

        </section>

        <aside className="dashboard-right">
          <DashboardCard className="right-column-user-card">
            <div className="avatar-large">
              {dashboardData.user.avatar ? (
                // Nouvelle ligne corrigée :
                <img src={`/${dashboardData.user.avatar}`} alt="User Avatar" />
              ) : (
                dashboardData.user.name.charAt(0)
              )}
            </div>
            <h2>{dashboardData.user.name}</h2>
            <div className="verified-account">
              <FaCheckCircle />
              <span>{dashboardData.user.role}</span>
            </div>
            <div className="user-stats">
              <div className="user-stat-item">
                <span className="value income">${dashboardData.user.income}</span>
                <span className="label">Income</span>
              </div>
              <div className="user-stat-item">
                <span className="value expenses">${dashboardData.user.expenses}</span>
                <span className="label">Expenses</span>
              </div>
              <div className="user-stat-item">
                <span className="value points">{dashboardData.user.points}</span>
                <span className="label">Points</span>
              </div>
            </div>
          </DashboardCard>

          <div className="balance-card">
            <div className="balance-header">
              <GiReceiveMoney />
              <span>Balance</span>
              <button className="text-primary" style={{ background: 'none', border: 'none', color: 'inherit', fontSize: '1.5em' }}>...</button> {/* Placeholder for more options */}
            </div>
            <div className="balance-amount">${dashboardData.balance.toFixed(2)}</div>
            <div className="card-number">{dashboardData.cardNumber}</div>
          </div>

          <DashboardCard title="Earnings" className="earnings-chart-card">
            <h3>Earnings</h3>
            <div className="earnings-chart-wrapper">
              <svg width="100%" height="100%" viewBox={`0 0 ${280} ${150}`}>
                {/* Background Grid Lines (Optional - simplified for direct image match) */}
                {/* This could be more complex with actual grid lines for better data visualization */}

                {/* Area Fill */}
                <path
                  d={getAreaPathData(dashboardData.earningsChartData, 280, 150)}
                  className="earnings-chart-fill"
                />
                {/* Line */}
                <path
                  d={getPathData(dashboardData.earningsChartData, 280, 150)}
                  className="earnings-chart-line"
                />
              </svg>
            </div>
            <div className="earnings-x-axis-labels">
              {dashboardData.earningsChartData.map((data, index) => (
                <span key={index}>{data.day}</span>
              ))}
            </div>
            {/* The actual earnings amount displayed below the chart */}
            <h2 style={{ fontSize: '1.8em', fontWeight: 600, color: 'var(--text-color)', marginTop: '15px' }}>${dashboardData.earningsAmount.toFixed(2)}</h2>
          </DashboardCard>

          <DashboardCard title="Analytics" className="progress-card">
            {dashboardData.activities.map((activity, index) => (
              <div className="progress-item" key={index}>
                <div className="progress-icon">
                  {activity.icon}
                </div>
                <div className="progress-details">
                  <h4>{activity.name}</h4>
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${activity.progress}%` }}
                    ></div>
                  </div>
                  <div className="progress-percentage">{activity.progress}%</div>
                </div>
              </div>
            ))}
          </DashboardCard>

        </aside>
        </>
        ) : activePage === 'settings' ? (
          <SettingsPage theme={theme} toggleTheme={toggleTheme} />
        ) : activePage === 'help' ? (
          <HelpPage />
        ) : (
          <SearchReportsPage />
        )}
      </main>
    </div>
  );
};

export default App;