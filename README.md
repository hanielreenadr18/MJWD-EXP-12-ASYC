# Experiment 12 – Simulate an Asynchronous Operation

## Aim
To develop a React application that simulates an asynchronous operation using `useState()` and `setTimeout()`. The application displays a loading message while student information is being retrieved and displays the result after the simulated server response.

## Technologies Used
- React
- Vite
- JavaScript
- CSS
- Lucide React icons

## Application Features
- Professional student information dashboard.
- Fetch Student button to start the operation.
- Loading message, spinner, and progress indicator.
- Simulated 3-second server response using `setTimeout()`.
- Conditional rendering of the student profile.
- Request counter and clear-results option.
- Responsive layout.

## Student Data Used
| Field | Value |
|---|---|
| Student Name | Arun |
| Department | CSE |
| Full Department | Computer Science and Engineering |
| Academic Year | III Year |
| Status | Data Loaded Successfully |

> The application uses a simulated server response. It does not connect to a real backend API.

## Screenshots

### 1. Initial Dashboard
<img width="1851" height="816" alt="image" src="https://github.com/user-attachments/assets/1b078403-96ff-4b06-af5a-1105ae8929eb" />


### 2. Loading State
<img width="1884" height="857" alt="image" src="https://github.com/user-attachments/assets/d6bcb7db-c3ff-471f-b1ed-093e0504b02d" />


### 3. Student Profile After Data Retrieval

<img width="696" height="425" alt="image" src="https://github.com/user-attachments/assets/6e7f0488-f406-4b04-9e26-94efe77baa2f" />


## Folder Structure

```text
React_Async_Student_Professional_Experiment_12/
├── index.html
├── package.json
├── README.md
├── screenshots/
│   ├── 01-dashboard-initial.png
│   ├── 02-dashboard-loading.png
│   └── 03-student-profile-loaded.png
└── src/
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── main.jsx
```

## Installation and Execution

1. Open the project folder in VS Code.
2. Open the terminal in the project folder.
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the localhost URL displayed in the terminal.

## Algorithm
1. Create a React functional component.
2. Import `useState()` to manage loading status, student data, and request count.
3. When the Fetch Student button is clicked, set the loading state to `true`.
4. Clear any previously displayed student data.
5. Use `setTimeout()` to simulate a server response after 3000 milliseconds.
6. Store the student details in the state.
7. Set the loading state to `false`.
8. Use conditional rendering to display the fetched student profile.

## Program – Complete Source Code

### 1. `src/App.jsx`

```jsx
import { useState } from "react";
import {
  GraduationCap, Users, BookOpen, Clock3, CheckCircle2,
  RefreshCw, ArrowUpRight, Database, Activity, ShieldCheck
} from "lucide-react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [student, setStudent] = useState(null);
  const [requestCount, setRequestCount] = useState(0);

  const fetchStudent = () => {
    if (loading) return;
    setLoading(true);
    setStudent(null);
    setRequestCount((count) => count + 1);

    setTimeout(() => {
      setStudent({
        name: "Arun",
        department: "Computer Science and Engineering",
        shortDepartment: "CSE",
        year: "III Year",
        registerNumber: "STU-2026-001",
        status: "Data Loaded Successfully"
      });
      setLoading(false);
    }, 3000);
  };

  const resetData = () => {
    setStudent(null);
    setLoading(false);
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon"><GraduationCap size={25} /></div>
          <div><h2>Academia</h2><span>STUDENT PORTAL</span></div>
        </div>
        <div className="nav-label">WORKSPACE</div>
        <div className="nav-item active"><Activity size={18} /><span>Dashboard</span></div>
        <div className="nav-item"><Users size={18} /><span>Student Records</span></div>
        <div className="nav-item"><BookOpen size={18} /><span>Academics</span></div>
        <div className="sidebar-bottom">
          <div className="system-status"><span className="online-dot"></span>System Operational</div>
          <p>REACT LAB · EXPERIMENT 12</p>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="breadcrumb">Workspace / Dashboard</p>
            <h1>Student Data Management</h1>
          </div>
          <div className="admin-profile">
            <div className="admin-avatar">A</div>
            <div><strong>Administrator</strong><span>System User</span></div>
          </div>
        </header>

        <section className="welcome-section">
          <div>
            <span className="section-tag">ACADEMIC MANAGEMENT SYSTEM</span>
            <h2>Student Information</h2>
            <p>Retrieve and manage student records through an asynchronous data request.</p>
          </div>
          <div className="welcome-icon"><GraduationCap size={58} strokeWidth={1.2} /></div>
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon gold"><Users size={20} /></div>
            <div><span>REQUESTS MADE</span><h3>{requestCount.toString().padStart(2, "0")}</h3><p>Total fetch requests</p></div>
          </div>
          <div className="stat-card">
            <div className="stat-icon dark"><Database size={20} /></div>
            <div><span>DATA SOURCE</span><h3>Server</h3><p>Simulated API response</p></div>
          </div>
          <div className="stat-card">
            <div className="stat-icon light"><Clock3 size={20} /></div>
            <div><span>RESPONSE TIME</span><h3>3 Sec</h3><p>Simulated request delay</p></div>
          </div>
        </section>

        <section className="content-grid">
          <div className="fetch-card">
            <div className="card-heading">
              <div><span className="section-tag">DATA RETRIEVAL</span><h3>Fetch Student Record</h3></div>
              <div className="heading-icon"><RefreshCw size={20} /></div>
            </div>
            <p className="card-description">
              Initiate a request to retrieve student information. The system will process the request asynchronously.
            </p>
            <div className="request-info">
              <div><Database size={17} /><span>Source</span><strong>Student Server</strong></div>
              <div><Clock3 size={17} /><span>Delay</span><strong>3000 ms</strong></div>
            </div>
            <button className="fetch-button" onClick={fetchStudent} disabled={loading}>
              {loading ? <><RefreshCw className="spin" size={17} />Fetching Student Data</> : <>Fetch Student<ArrowUpRight size={18} /></>}
            </button>
            {loading && (
              <div className="loading-box" role="status" aria-live="polite">
                <div className="loading-top">
                  <div className="loading-spinner"></div>
                  <div><strong>Fetching student information...</strong><p>Waiting for server response</p></div>
                </div>
                <div className="progress-track"><div className="progress-bar"></div></div>
                <span className="loading-caption">PROCESSING REQUEST · PLEASE WAIT</span>
              </div>
            )}
            {student && !loading && (
              <div className="success-message" role="status">
                <CheckCircle2 size={18} />Student information retrieved successfully.
              </div>
            )}
            <div className="card-footer"><ShieldCheck size={15} />Secure data retrieval simulation</div>
          </div>

          <div className="result-card">
            <div className="result-header">
              <div><span className="section-tag">SERVER RESPONSE</span><h3>Student Profile</h3></div>
              <span className={`status-badge ${student ? "complete" : ""}`}>
                <span></span>{student ? "COMPLETED" : loading ? "PROCESSING" : "WAITING"}
              </span>
            </div>
            {!student && !loading ? (
              <div className="empty-state">
                <div className="empty-icon"><Users size={34} /></div>
                <h4>No Student Data</h4>
                <p>Click the Fetch Student button to retrieve the student profile.</p>
              </div>
            ) : loading ? (
              <div className="empty-state processing-state">
                <div className="loading-spinner large"></div>
                <h4>Processing Request</h4>
                <p>Student information is being retrieved...</p>
              </div>
            ) : (
              <div className="student-profile">
                <div className="profile-top">
                  <div className="student-avatar">A</div>
                  <div><h4>{student.name}</h4><span>{student.registerNumber}</span></div>
                </div>
                <div className="profile-details">
                  <div className="profile-row"><span>Student Name</span><strong>{student.name}</strong></div>
                  <div className="profile-row"><span>Department</span><strong>{student.shortDepartment}</strong></div>
                  <div className="profile-row"><span>Full Department</span><strong>{student.department}</strong></div>
                  <div className="profile-row"><span>Academic Year</span><strong>{student.year}</strong></div>
                </div>
                <div className="loaded-status"><CheckCircle2 size={17} /><span>{student.status}</span></div>
                <button className="reset-button" onClick={resetData}>Clear Results</button>
              </div>
            )}
          </div>
        </section>

        <footer className="footer">
          <span>ACADEMIA STUDENT PORTAL</span>
          <span>React · useState · setTimeout</span>
          <span>EXPERIMENT 12</span>
        </footer>
      </main>
    </div>
  );
}

export default App;

```

### 2. `src/App.css`

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap');
:root{font-family:'DM Sans',sans-serif;color:#28251f;background:#f4f1e9;font-synthesis:none;text-rendering:optimizeLegibility}
*{margin:0;padding:0;box-sizing:border-box}body{min-width:320px;min-height:100vh}button{font-family:inherit}
.dashboard{min-height:100vh;display:flex;background:#f4f1e9}
.sidebar{width:245px;min-height:100vh;background:#211f1b;color:#f7f2e8;padding:30px 20px;display:flex;flex-direction:column;flex-shrink:0}
.brand{display:flex;align-items:center;gap:12px;padding:0 8px;margin-bottom:65px}.brand-icon{width:43px;height:43px;border-radius:12px;display:grid;place-items:center;background:#c6a36a;color:#211f1b}.brand h2{font-family:'Playfair Display',serif;font-size:23px}.brand span{display:block;color:#a69c8d;font-size:9px;letter-spacing:1.7px;margin-top:3px}
.nav-label{color:#8c8477;font-size:9px;font-weight:700;letter-spacing:2px;padding:0 12px;margin-bottom:15px}.nav-item{display:flex;align-items:center;gap:13px;padding:14px 13px;margin-bottom:8px;border-radius:8px;color:#b9b1a5;font-size:12px}.nav-item.active{background:rgba(198,163,106,.15);color:#e1c18b;border-left:3px solid #c6a36a}
.sidebar-bottom{margin-top:auto}.system-status{display:flex;align-items:center;gap:9px;padding:13px;border:1px solid #403a31;border-radius:8px;font-size:10px;color:#d0c6b6}.online-dot,.status-badge span{width:7px;height:7px;background:#b99a65;border-radius:50%}.sidebar-bottom p{margin:18px 5px 0;color:#777065;font-size:8px;letter-spacing:1.3px}
.main-content{flex:1;min-width:0;max-width:1600px;margin:0 auto;padding:32px 42px 20px}.topbar{display:flex;align-items:center;justify-content:space-between;gap:20px;padding-bottom:26px;border-bottom:1px solid #e3ded3}.breadcrumb{color:#9a9183;font-size:10px;margin-bottom:8px}.topbar h1{font-size:21px;font-weight:700;letter-spacing:-.5px}
.admin-profile{display:flex;align-items:center;gap:11px}.admin-avatar{width:38px;height:38px;display:grid;place-items:center;background:#302c25;color:#e2c18b;border-radius:50%;font-weight:700}.admin-profile strong,.admin-profile span{display:block}.admin-profile strong{font-size:11px}.admin-profile span{color:#968d80;font-size:9px;margin-top:3px}
.welcome-section{margin-top:30px;padding:27px 32px;border-radius:13px;background:#e8dfcf;display:flex;justify-content:space-between;align-items:center}.section-tag{color:#a17d43;font-size:9px;font-weight:800;letter-spacing:1.7px}.welcome-section h2{font-family:'Playfair Display',serif;font-size:29px;margin:9px 0;color:#29251f}.welcome-section p{color:#797064;font-size:11px;line-height:1.7;max-width:450px}.welcome-icon{color:#ad8b58;padding:18px;border:1px solid rgba(173,139,88,.3);border-radius:50%}
.stats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:17px;margin:22px 0}.stat-card{background:#fffefa;border:1px solid #eae5da;border-radius:11px;padding:20px;display:flex;align-items:center;gap:15px}.stat-icon{width:42px;height:42px;display:grid;place-items:center;border-radius:10px}.stat-icon.gold{background:#f0e5d1;color:#9a713a}.stat-icon.dark{background:#29251f;color:#e0bd82}.stat-icon.light{background:#eae5da;color:#766a58}.stat-card span{color:#938a7c;font-size:8px;font-weight:800;letter-spacing:1px}.stat-card h3{margin:5px 0 3px;font-size:21px}.stat-card p{color:#a49b8d;font-size:9px}
.content-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:stretch}.fetch-card,.result-card{min-width:0;background:#fffefa;border:1px solid #eae5da;border-radius:12px;padding:25px}.card-heading,.result-header{display:flex;justify-content:space-between;align-items:center;gap:12px}.card-heading h3,.result-header h3{margin-top:7px;font-size:17px}.heading-icon{width:39px;height:39px;display:grid;place-items:center;border-radius:10px;background:#eee6d8;color:#9b7846}.card-description{color:#918879;font-size:11px;line-height:1.8;margin:17px 0 20px}
.request-info{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:20px}.request-info div{display:grid;grid-template-columns:18px 1fr;gap:4px 8px;align-items:center;padding:12px;background:#f6f3ed;border-radius:7px;color:#9d7d4e}.request-info span{color:#958b7c;font-size:9px}.request-info strong{grid-column:2;color:#373229;font-size:10px}
.fetch-button{width:100%;padding:14px 18px;display:flex;align-items:center;justify-content:center;gap:12px;border:0;border-radius:7px;background:#29251f;color:#e6c58f;font-size:11px;font-weight:700;cursor:pointer;transition:background .2s,transform .2s}.fetch-button:hover:not(:disabled){background:#42392c;transform:translateY(-1px)}.fetch-button:disabled{opacity:.75;cursor:wait}.card-footer{display:flex;align-items:center;gap:7px;margin-top:20px;color:#9d9486;font-size:9px}
.loading-box{margin-top:17px;padding:15px;background:#f6f2e9;border:1px solid #e8ddc9;border-radius:8px}.loading-top{display:flex;align-items:center;gap:12px}.loading-top strong{font-size:10px}.loading-top p{color:#978c7c;font-size:9px;margin-top:4px}.loading-spinner{width:23px;height:23px;flex-shrink:0;border:2px solid #e4d7c0;border-top-color:#a17d43;border-radius:50%;animation:spin .8s linear infinite}.loading-spinner.large{width:36px;height:36px}.spin{animation:spin .8s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}
.progress-track{height:5px;margin-top:16px;overflow:hidden;border-radius:20px;background:#e5dccd}.progress-bar{width:35%;height:100%;border-radius:20px;background:#b18c54;animation:progress 3s ease-in-out forwards}@keyframes progress{from{width:0%}to{width:100%}}.loading-caption{display:block;margin-top:10px;color:#a3947e;font-size:7px;font-weight:700;letter-spacing:1.2px}.success-message{display:flex;align-items:center;gap:8px;margin-top:16px;padding:12px;border-radius:7px;background:#f0e9dc;color:#80643d;font-size:10px}
.status-badge{display:flex;align-items:center;gap:7px;padding:7px 10px;border-radius:30px;background:#f0ede7;color:#928a7e;font-size:8px;font-weight:800;letter-spacing:.5px}.status-badge.complete{background:#eee6d7;color:#8c6b3e}
.empty-state{min-height:290px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.empty-icon{width:67px;height:67px;display:grid;place-items:center;border-radius:50%;background:#f2ede4;color:#b39a73}.empty-state h4{margin-top:17px;font-size:14px}.empty-state p{max-width:230px;margin-top:8px;color:#a49a8c;font-size:10px;line-height:1.7}.processing-state .loading-spinner{margin-bottom:3px}
.student-profile{margin-top:22px}.profile-top{display:flex;align-items:center;gap:13px;padding-bottom:20px;border-bottom:1px solid #eee9df}.student-avatar{width:48px;height:48px;display:grid;place-items:center;border-radius:12px;background:#29251f;color:#e2c18b;font:600 22px 'Playfair Display',serif}.profile-top h4{font-size:15px}.profile-top span{display:block;margin-top:5px;color:#9a9081;font-size:9px}.profile-details{padding:8px 0}.profile-row{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;padding:12px 0;border-bottom:1px solid #f0ece5;font-size:10px}.profile-row span{color:#9a9184}.profile-row strong{color:#39342c;text-align:right;max-width:58%}.loaded-status{display:flex;align-items:center;gap:9px;padding:12px;margin-top:9px;border-radius:7px;background:#eee7d9;color:#80643d;font-size:10px;font-weight:700}.reset-button{width:100%;padding:10px;margin-top:12px;border:1px solid #ded5c5;border-radius:6px;background:transparent;color:#77664d;font-size:10px;font-weight:600;cursor:pointer}.reset-button:hover{background:#f5f0e7}
.footer{display:flex;justify-content:space-between;gap:15px;margin-top:28px;padding-top:16px;border-top:1px solid #e3ded3;color:#a59b8d;font-size:8px;letter-spacing:.8px}
@media(max-width:1050px){.sidebar{width:205px}.main-content{padding:28px 24px}.stats-grid{gap:10px}.stat-card{padding:14px}.content-grid{grid-template-columns:1fr}}
@media(max-width:700px){.dashboard{display:block}.sidebar{width:100%;min-height:auto;padding:15px 18px}.brand{margin-bottom:15px}.nav-label,.sidebar-bottom,.nav-item{display:none}.main-content{padding:20px 15px}.topbar{align-items:flex-start}.topbar h1{font-size:17px}.admin-profile{gap:7px}.admin-profile strong{font-size:9px}.admin-profile span{font-size:8px}.welcome-section{padding:22px 19px}.welcome-section h2{font-size:24px}.welcome-icon{padding:10px}.welcome-icon svg{width:38px}.stats-grid{grid-template-columns:1fr}.stat-card{padding:16px}.footer{flex-wrap:wrap;line-height:1.7}}
@media(max-width:380px){.admin-profile>div:last-child{display:none}.welcome-icon{display:none}.fetch-card,.result-card{padding:17px}.request-info{grid-template-columns:1fr}}

```

### 3. `src/main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

### 4. `src/index.css`

```css
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; min-width: 320px; }

```

### 5. `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#211f1b" />
    <title>Academia | Student Data Management</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

### 6. `package.json`

```json
{
  "name": "react-async-student-professional",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@vitejs/plugin-react": "latest",
    "vite": "latest",
    "react": "latest",
    "react-dom": "latest",
    "lucide-react": "latest"
  },
  "devDependencies": {}
}

```

## Observation
When the Fetch Student button is clicked, the loading state is enabled and the application displays a loading indicator. The `setTimeout()` callback executes after 3 seconds, updates the student data, and changes the loading state. React then re-renders the interface to show the student profile.

## Result
The asynchronous operation was successfully simulated in React using `useState()` and `setTimeout()`. The application displays the loading state and then presents the retrieved student information dynamically.
