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
