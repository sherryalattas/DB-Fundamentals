// DB FUNDAMENTALS HUB KKPG - Main React Application (Production Grade)
const { useState, useEffect, useRef } = React;

function App() {
  // Global App States
  const [currentUser, setCurrentUser] = useState(() => {
    return AppStore.get('current_user', {
      id: "STM2026001",
      name: "Ahmad Zaki Bin Rosli",
      role: "student", // 'student' or 'teacher'
      class: "STM1A",
      programme: "Sijil Teknologi Maklumat",
      institution: "Kolej Komuniti Pasir Gudang",
      xp: 420,
      confidence: "Sederhana",
      unlockedBadges: ["b1", "b3"]
    });
  });

  const [activeTab, setActiveTab] = useState('landing');
  const [activeModuleId, setActiveModuleId] = useState('mod-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Persistence Sync
  useEffect(() => {
    AppStore.set('current_user', currentUser);
  }, [currentUser]);

  // Toast Helper
  const showToast = (msg, type = 'info') => {
    setToastMessage({ msg, type });
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Add XP Helper
  const addXP = (amount, reason) => {
    setCurrentUser(prev => {
      const newXP = prev.xp + amount;
      showToast(`+${amount} XP! (${reason})`, 'success');
      if (window.confetti) {
        window.confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
      }
      return { ...prev, xp: newXP };
    });
  };

  // Role Switcher
  const toggleRole = () => {
    const nextRole = currentUser.role === 'student' ? 'teacher' : 'student';
    setCurrentUser(prev => ({
      ...prev,
      role: nextRole,
      name: nextRole === 'teacher' ? 'En. Razak Bin Mohd (Pensyarah)' : 'Ahmad Zaki Bin Rosli'
    }));
    setActiveTab(nextRole === 'teacher' ? 'teacher-dashboard' : 'student-dashboard');
    showToast(`Peranan ditukar kepada: ${nextRole === 'teacher' ? 'PENSYARAH / ADMIN' : 'PELAJAR'}`);
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans selection:bg-electric-500 selection:text-white">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 transition-all transform animate-bounce">
          <div className={`px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border ${
            toastMessage.type === 'success' ? 'bg-emerald-900/90 border-emerald-500 text-emerald-200' :
            toastMessage.type === 'warning' ? 'bg-amber-900/90 border-amber-500 text-amber-200' :
            'bg-electric-900/90 border-electric-500 text-electric-200'
          }`}>
            <span className="font-semibold text-xs">{toastMessage.msg}</span>
          </div>
        </div>
      )}

      {/* Top Navbar */}
      <header className="bg-navy-900/80 backdrop-blur-md border-b border-navy-800 sticky top-0 z-40 px-4 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('landing')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-electric-600 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg glow-electric">
            DB
          </div>
          <div>
            <h1 className="font-heading font-extrabold text-base lg:text-lg text-white tracking-wide flex items-center gap-2">
              DB FUNDAMENTALS HUB
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-electric-500/20 text-electric-400 font-mono border border-electric-500/30">KKPG</span>
            </h1>
            <p className="text-[10px] text-slate-400 font-medium">Belajar • Bina • Query • Semak</p>
          </div>
        </div>

        {/* Global Navigation Controls */}
        <div className="flex items-center gap-3">
          {/* Quick Search Button */}
          <button 
            onClick={() => setShowSearchModal(true)}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-800/80 border border-navy-700 text-slate-400 text-xs hover:text-white transition"
          >
            <span>Cari modul, SQL command, ralat...</span>
            <kbd className="bg-navy-950 px-1.5 py-0.5 rounded text-[10px] text-slate-500 border border-navy-700">Ctrl + K</kbd>
          </button>

          {/* XP Pill */}
          {currentUser.role === 'student' && (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold font-mono">
              <span>⚡ {currentUser.xp} XP</span>
            </div>
          )}

          {/* Role Switcher */}
          <button 
            onClick={toggleRole}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition ${
              currentUser.role === 'teacher' 
                ? 'bg-purple-900/40 border-purple-500/50 text-purple-300 hover:bg-purple-800/50' 
                : 'bg-electric-900/40 border-electric-500/50 text-electric-300 hover:bg-electric-800/50'
            }`}
          >
            <span>Peranan: {currentUser.role === 'teacher' ? 'PENSYARAH' : 'PELAJAR'}</span>
            <span className="text-[10px] opacity-75">(Tukar)</span>
          </button>

          {/* User Avatar */}
          <div className="flex items-center gap-2 pl-2 border-l border-navy-800">
            <div className="w-8 h-8 rounded-full bg-navy-700 flex items-center justify-center text-xs font-bold text-electric-400 border border-navy-600">
              {currentUser.name.charAt(0)}
            </div>
            <div className="hidden sm:block text-left text-xs">
              <div className="font-semibold text-slate-200 leading-none">{currentUser.name.split(' ')[0]}</div>
              <div className="text-[10px] text-slate-400">{currentUser.class}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container Layout */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Left Sidebar Navigation */}
        <aside className="w-full md:w-64 bg-navy-900/60 border-r border-navy-800/80 p-4 flex flex-col gap-5 shrink-0 overflow-y-auto max-h-screen">
          {currentUser.role === 'student' ? (
            <>
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">Pembelajaran Utama</div>
                <nav className="space-y-1">
                  <SidebarLink active={activeTab === 'student-dashboard'} onClick={() => setActiveTab('student-dashboard')} label="Dashboard Pelajar" />
                  <SidebarLink active={activeTab === 'modules'} onClick={() => setActiveTab('modules')} label="Modul Database (13)" badge="Utama" />
                  <SidebarLink active={activeTab === 'workbench-lab'} onClick={() => setActiveTab('workbench-lab')} label="MySQL Workbench Lab" badge="Simulasi" />
                  <SidebarLink active={activeTab === 'sql-playground'} onClick={() => setActiveTab('sql-playground')} label="SQL Playground" badge="IDE" />
                  <SidebarLink active={activeTab === 'command-library'} onClick={() => setActiveTab('command-library')} label="SQL Command Library" />
                </nav>
              </div>

              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">Alatan Interaktif & Lab</div>
                <nav className="space-y-1">
                  <SidebarLink active={activeTab === 'concept-visualizer'} onClick={() => setActiveTab('concept-visualizer')} label="Concept Visualizer" />
                  <SidebarLink active={activeTab === 'erd-builder'} onClick={() => setActiveTab('erd-builder')} label="ERD Builder Canvas" />
                  <SidebarLink active={activeTab === 'pk-fk-lab'} onClick={() => setActiveTab('pk-fk-lab')} label="PK & FK Lab" />
                  <SidebarLink active={activeTab === 'create-table-builder'} onClick={() => setActiveTab('create-table-builder')} label="Create Table Builder" />
                  <SidebarLink active={activeTab === 'data-type-lab'} onClick={() => setActiveTab('data-type-lab')} label="Data Type Lab" />
                  <SidebarLink active={activeTab === 'insert-data-lab'} onClick={() => setActiveTab('insert-data-lab')} label="Insert Data Lab" />
                  <SidebarLink active={activeTab === 'select-trainer'} onClick={() => setActiveTab('select-trainer')} label="SELECT Query Trainer" badge="10 Lvl" />
                  <SidebarLink active={activeTab === 'update-delete-safety'} onClick={() => setActiveTab('update-delete-safety')} label="UPDATE/DELETE Safety" />
                  <SidebarLink active={activeTab === 'aggregate-lab'} onClick={() => setActiveTab('aggregate-lab')} label="Aggregate Function Lab" />
                  <SidebarLink active={activeTab === 'join-visualizer'} onClick={() => setActiveTab('join-visualizer')} label="JOIN Visualizer" />
                  <SidebarLink active={activeTab === 'normalization-lab'} onClick={() => setActiveTab('normalization-lab')} label="Normalization Lab" />
                  <SidebarLink active={activeTab === 'error-clinic'} onClick={() => setActiveTab('error-clinic')} label="SQL Error Clinic" badge="Troubleshoot" />
                </nav>
              </div>

              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">Amali & Projek</div>
                <nav className="space-y-1">
                  <SidebarLink active={activeTab === 'practical-labs'} onClick={() => setActiveTab('practical-labs')} label="Practical Database Labs" />
                  <SidebarLink active={activeTab === 'mini-projects'} onClick={() => setActiveTab('mini-projects')} label="Mini Project Builder" />
                  <SidebarLink active={activeTab === 'ai-tutor'} onClick={() => setActiveTab('ai-tutor')} label="AI Database Tutor" badge="Coach" />
                  <SidebarLink active={activeTab === 'my-work'} onClick={() => setActiveTab('my-work')} label="Hasil Kerja Saya" />
                  <SidebarLink active={activeTab === 'achievements'} onClick={() => setActiveTab('achievements')} label="Pencapaian & Badge" />
                </nav>
              </div>
            </>
          ) : (
            <>
              <div>
                <div className="text-[11px] font-bold text-purple-400 uppercase tracking-wider mb-2 px-2">Pengurusan Pensyarah</div>
                <nav className="space-y-1">
                  <SidebarLink active={activeTab === 'teacher-dashboard'} onClick={() => setActiveTab('teacher-dashboard')} label="Dashboard Analitik" />
                  <SidebarLink active={activeTab === 'teacher-students'} onClick={() => setActiveTab('teacher-students')} label="Pengurusan Pelajar" />
                  <SidebarLink active={activeTab === 'teacher-classes'} onClick={() => setActiveTab('teacher-classes')} label="Pengurusan Kelas" />
                  <SidebarLink active={activeTab === 'teacher-cms'} onClick={() => setActiveTab('teacher-cms')} label="Pengurusan Modul & Quiz" />
                  <SidebarLink active={activeTab === 'teacher-assignments'} onClick={() => setActiveTab('teacher-assignments')} label="Tugasan & Amali" />
                  <SidebarLink active={activeTab === 'teacher-reviews'} onClick={() => setActiveTab('teacher-reviews')} label="Semakan & Rubrik" badge="Grading" />
                  <SidebarLink active={activeTab === 'teacher-reports'} onClick={() => setActiveTab('teacher-reports')} label="Laporan & Exporter" />
                </nav>
              </div>
            </>
          )}
        </aside>

        {/* Dynamic Main Body Content */}
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto bg-navy-950/90">
          {activeTab === 'landing' && <LandingPageView onStart={() => setActiveTab('onboarding')} onExplore={() => setActiveTab('modules')} />}
          {activeTab === 'onboarding' && <OnboardingView currentUser={currentUser} onComplete={(info) => {
            setCurrentUser(prev => ({ ...prev, ...info }));
            setActiveTab('student-dashboard');
            showToast('Pendaftaran berjaya! Selamat datang ke DB Hub KKPG.');
          }} />}
          {activeTab === 'student-dashboard' && <StudentDashboardView currentUser={currentUser} onSelectTab={setActiveTab} onSelectModule={(id) => { setActiveModuleId(id); setActiveTab('modules'); }} />}
          {activeTab === 'modules' && <ModulesView activeModuleId={activeModuleId} onSelectModule={setActiveModuleId} addXP={addXP} />}
          {activeTab === 'workbench-lab' && <WorkbenchLabView addXP={addXP} />}
          {activeTab === 'sql-playground' && <SQLPlaygroundView addXP={addXP} />}
          {activeTab === 'command-library' && <CommandLibraryView onTryInPlayground={(sql) => { setActiveTab('sql-playground'); }} />}
          {activeTab === 'concept-visualizer' && <ConceptVisualizerView />}
          {activeTab === 'erd-builder' && <ERDBuilderView addXP={addXP} />}
          {activeTab === 'pk-fk-lab' && <PKFKLabView addXP={addXP} />}
          {activeTab === 'create-table-builder' && <CreateTableBuilderView onOpenPlayground={() => setActiveTab('sql-playground')} />}
          {activeTab === 'data-type-lab' && <DataTypeLabView addXP={addXP} />}
          {activeTab === 'insert-data-lab' && <InsertDataLabView addXP={addXP} />}
          {activeTab === 'select-trainer' && <SelectTrainerView addXP={addXP} />}
          {activeTab === 'update-delete-safety' && <UpdateDeleteSafetyView addXP={addXP} />}
          {activeTab === 'aggregate-lab' && <AggregateLabView addXP={addXP} />}
          {activeTab === 'join-visualizer' && <JOINVisualizerView />}
          {activeTab === 'normalization-lab' && <NormalizationLabView addXP={addXP} />}
          {activeTab === 'error-clinic' && <ErrorClinicView addXP={addXP} />}
          {activeTab === 'ai-tutor' && <AITutorView />}
          {activeTab === 'practical-labs' && <PracticalLabsView addXP={addXP} />}
          {activeTab === 'mini-projects' && <MiniProjectsView addXP={addXP} />}
          {activeTab === 'my-work' && <MyWorkView />}
          {activeTab === 'achievements' && <AchievementsView currentUser={currentUser} />}
          {activeTab === 'teacher-dashboard' && <TeacherDashboardView />}
          {activeTab.startsWith('teacher-') && activeTab !== 'teacher-dashboard' && <TeacherCMSView activeSubTab={activeTab} />}
        </main>
      </div>

      {/* Global Search Modal */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start justify-center pt-20 p-4">
          <div className="bg-navy-900 border border-navy-700 rounded-2xl w-full max-w-xl shadow-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Carian Pantas Platform</h3>
              <button onClick={() => setShowSearchModal(false)} className="text-slate-400 hover:text-white text-sm font-bold">✕</button>
            </div>
            <input 
              type="text" 
              placeholder="Cari modul, SQL command, ralat..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-navy-950 border border-navy-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-electric-500 mb-4"
              autoFocus
            />
            <div className="max-h-60 overflow-y-auto space-y-2">
              {window.INITIAL_DATA.modules.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase())).map(m => (
                <div key={m.id} onClick={() => { setActiveModuleId(m.id); setActiveTab('modules'); setShowSearchModal(false); }} className="p-3 bg-navy-800/60 rounded-xl hover:bg-electric-900/40 cursor-pointer border border-navy-700">
                  <div className="font-semibold text-xs text-electric-300">{m.code}: {m.title}</div>
                  <div className="text-[11px] text-slate-400">{m.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Sidebar Link Helper Component
function SidebarLink({ active, onClick, label, badge }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-all ${
        active 
          ? 'bg-gradient-to-r from-electric-600 to-electric-700 text-white shadow-lg glow-electric' 
          : 'text-slate-300 hover:bg-navy-800/80 hover:text-white'
      }`}
    >
      <span>{label}</span>
      {badge && (
        <span className={`text-[9px] px-2 py-0.5 rounded-full font-mono ${
          active ? 'bg-white/20 text-white' : 'bg-navy-800 text-electric-400 border border-navy-700'
        }`}>
          {badge}
        </span>
      )}
    </button>
  );
}

// ----------------------------------------------------
// 1. LANDING PAGE VIEW
// ----------------------------------------------------
function LandingPageView({ onStart, onExplore }) {
  return (
    <div className="max-w-6xl mx-auto space-y-16 py-6">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric-500/10 border border-electric-500/30 text-electric-400 text-xs font-semibold">
          <span>Kolej Komuniti Pasir Gudang • Sijil Teknologi Maklumat</span>
        </div>
        <h1 className="text-4xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
          Belajar Database Dengan <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 via-blue-300 to-gold-400">
            Langkah Yang Betul
          </span>
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-sm lg:text-base">
          Daripada memahami konsep database, membina table, menulis SQL query sehingga menghasilkan mini database project.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button 
            onClick={onStart}
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-electric-500 to-electric-700 hover:from-electric-600 font-bold text-white shadow-xl glow-electric transition transform hover:-translate-y-0.5 text-xs"
          >
            MULA BELAJAR SEKARANG
          </button>
          <button 
            onClick={onExplore}
            className="px-8 py-3.5 rounded-2xl glass-card hover:bg-navy-800/80 font-bold text-slate-200 border border-navy-700 transition text-xs"
          >
            LIHAT MODUL PEMBELAJARAN
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Modul Pembelajaran", val: "13 Modul", sub: "Scaffolding I DO / WE DO / YOU DO" },
          { label: "SQL Exercises", val: "25 Latihan", sub: "Disemak automatik oleh engine" },
          { label: "Database Labs", val: "6 Amali", sub: "Standard MySQL Workbench" },
          { label: "Mini Projects", val: "6 Senario", sub: "Dunia Sebenar STM KKPG" }
        ].map((s, idx) => (
          <div key={idx} className="glass-card p-6 rounded-2xl text-center border border-navy-800">
            <div className="text-2xl lg:text-3xl font-extrabold font-heading text-electric-400 mb-1">{s.val}</div>
            <div className="text-xs font-bold text-white mb-1">{s.label}</div>
            <div className="text-[11px] text-slate-400">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl font-bold font-heading text-white">KENAPA PLATFORM INI?</h2>
          <p className="text-slate-400 text-xs mt-1">Pengalaman pembelajaran interaktif yang direka khusus untuk subjek Database Fundamentals.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: "1. Belajar Langkah Demi Langkah", desc: "Pendekatan scaffolding membimbing dari asas entiti sehingga normalisasi 3NF." },
            { title: "2. Praktik SQL Interaktif", desc: "Taip arahan SQL sebenar dan lihat hasil jadual Result Grid secara langsung." },
            { title: "3. Simulasi Workbench", desc: "Kenali MySQL Workbench secara amali tanpa halangan konfigurasi pelayan." },
            { title: "4. AI Database Tutor", desc: "Tutor pintar yang membimbing menggunakan soalan Socratic tanpa memberi jawapan terus." }
          ].map((item, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl border border-navy-800 space-y-3">
              <div className="font-bold text-electric-400 font-heading text-base">{item.title}</div>
              <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card p-8 rounded-3xl border border-navy-800 text-center space-y-8">
        <h2 className="text-2xl font-bold font-heading text-white">CARA BELAJAR DI DB HUB KKPG</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {["1. Faham", "2. Lihat Demo", "3. Cuba Query", "4. Semak Output", "5. Baiki Error", "6. Kuasai"].map((step, idx) => (
            <div key={idx} className="p-4 bg-navy-900/80 rounded-xl border border-navy-700">
              <div className="text-xs font-bold text-gold-400 font-mono">{step}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// 2. ONBOARDING VIEW
// ----------------------------------------------------
function OnboardingView({ currentUser, onComplete }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: currentUser.name || '',
    studentId: currentUser.id || 'STM2026001',
    programme: 'Sijil Teknologi Maklumat (STM)',
    semester: 'Semester 1',
    class: 'STM1A',
    confidence: 'Sederhana'
  });

  return (
    <div className="max-w-2xl mx-auto glass-card p-8 rounded-3xl border border-navy-800 space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold font-heading text-white">Selamat Datang ke DB Fundamentals Hub KKPG</h2>
        <p className="text-xs text-slate-400">Pendaftaran pertama & Ujian Diagnostik Awal</p>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-electric-400">1. Profil Pelajar</h3>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-slate-400 block mb-1">Nama Penuh Pelajar</label>
              <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-navy-950 border border-navy-700 rounded-xl px-4 py-2.5 text-xs text-white" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-slate-400 block mb-1">No ID Pelajar (NDP)</label>
                <input type="text" value={formData.studentId} onChange={e => setFormData({...formData, studentId: e.target.value})} className="w-full bg-navy-950 border border-navy-700 rounded-xl px-4 py-2.5 text-xs text-white" />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">Kelas</label>
                <select value={formData.class} onChange={e => setFormData({...formData, class: e.target.value})} className="w-full bg-navy-950 border border-navy-700 rounded-xl px-4 py-2.5 text-xs text-white">
                  <option>STM1A</option>
                  <option>STM1B</option>
                  <option>STM2A</option>
                </select>
              </div>
            </div>
          </div>
          <button onClick={() => onComplete(formData)} className="w-full py-3 rounded-xl bg-electric-600 text-white font-bold text-xs shadow-lg">MASUK DASHBOARD PEMBELAJARAN</button>
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------
// 3. STUDENT DASHBOARD VIEW
// ----------------------------------------------------
function StudentDashboardView({ currentUser, onSelectTab, onSelectModule }) {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="glass-card p-8 rounded-3xl border border-navy-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full bg-electric-500/10 text-electric-400 text-xs font-semibold border border-electric-500/30">
            Pelajar STM • Kolej Komuniti Pasir Gudang
          </span>
          <h1 className="text-2xl lg:text-3xl font-extrabold font-heading text-white">
            Selamat Datang, {currentUser.name}!
          </h1>
          <p className="text-xs text-slate-400">
            Teruskan pembelajaran pangkalan data anda hari ini.
          </p>
        </div>
        <button 
          onClick={() => onSelectModule('mod-1')}
          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-electric-500 to-electric-700 hover:from-electric-600 font-bold text-white text-xs shadow-xl glow-electric transition shrink-0"
        >
          SAMBUNG PEMBELAJARAN
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-card p-5 rounded-2xl border border-navy-800">
          <div className="text-xs text-slate-400 font-semibold mb-1">KEMAJUAN KESELURUHAN</div>
          <div className="text-3xl font-extrabold text-electric-400 font-heading">68%</div>
          <div className="w-full bg-navy-950 h-2 rounded-full mt-3 overflow-hidden border border-navy-800">
            <div className="bg-electric-500 h-full rounded-full" style={{ width: '68%' }}></div>
          </div>
        </div>
        <div className="glass-card p-5 rounded-2xl border border-navy-800">
          <div className="text-xs text-slate-400 font-semibold mb-1">MODUL SELESAI</div>
          <div className="text-3xl font-extrabold text-gold-400 font-heading">7 / 13</div>
        </div>
        <div className="glass-card p-5 rounded-2xl border border-navy-800">
          <div className="text-xs text-slate-400 font-semibold mb-1">SQL EXERCISES</div>
          <div className="text-3xl font-extrabold text-emerald-400 font-heading">18 / 25</div>
        </div>
        <div className="glass-card p-5 rounded-2xl border border-navy-800">
          <div className="text-xs text-slate-400 font-semibold mb-1">DATABASE LABS</div>
          <div className="text-3xl font-extrabold text-purple-400 font-heading">4 / 6</div>
        </div>
      </div>

      <div>
        <h2 className="text-base font-bold font-heading text-white mb-4">ALATAN INTERAKTIF UTAMA</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { id: 'workbench-lab', title: 'MySQL Workbench Lab', sub: 'Simulasi 14 Langkah', color: 'from-blue-600 to-indigo-700' },
            { id: 'sql-playground', title: 'SQL Playground', sub: 'Mini IDE Engine Live', color: 'from-emerald-600 to-teal-700' },
            { id: 'erd-builder', title: 'ERD Builder Canvas', sub: 'Reka Bentuk Entiti', color: 'from-purple-600 to-pink-700' },
            { id: 'error-clinic', title: 'SQL Error Clinic', sub: 'Klinik Ralat Code', color: 'from-amber-600 to-orange-700' }
          ].map(t => (
            <div key={t.id} onClick={() => onSelectTab(t.id)} className={`p-5 rounded-2xl bg-gradient-to-br ${t.color} cursor-pointer shadow-lg hover:opacity-95 transition transform hover:-translate-y-1`}>
              <div className="font-bold text-white text-xs mb-1">{t.title}</div>
              <div className="text-[11px] text-white/80">{t.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// 4. LEARNING MODULES VIEW
// ----------------------------------------------------
function ModulesView({ activeModuleId, onSelectModule, addXP }) {
  const modules = window.INITIAL_DATA.modules;
  const currentMod = modules.find(m => m.id === activeModuleId) || modules[0];
  const [subTab, setSubTab] = useState('ido');
  const [completed, setCompleted] = useState(false);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="glass-card p-4 rounded-2xl border border-navy-800 flex items-center justify-between overflow-x-auto gap-2">
        {modules.map(m => (
          <button 
            key={m.id}
            onClick={() => { onSelectModule(m.id); setCompleted(false); }}
            className={`px-3 py-2 rounded-xl text-xs font-semibold shrink-0 transition ${
              m.id === currentMod.id ? 'bg-electric-600 text-white shadow-md' : 'bg-navy-950 text-slate-400 hover:text-white'
            }`}
          >
            {m.code}
          </button>
        ))}
      </div>

      <div className="glass-card p-8 rounded-3xl border border-navy-800 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-navy-800 pb-6">
          <div>
            <div className="text-xs font-bold text-electric-400 font-mono mb-1">{currentMod.code} • {currentMod.level}</div>
            <h1 className="text-2xl font-bold font-heading text-white">{currentMod.title}</h1>
            <p className="text-xs text-slate-300 mt-1">{currentMod.description}</p>
          </div>
          <button 
            onClick={() => { setCompleted(true); addXP(20, `Melengkapkan ${currentMod.code}`); }}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs shadow-lg transition ${
              completed ? 'bg-emerald-600 text-white' : 'bg-electric-600 hover:bg-electric-700 text-white'
            }`}
          >
            {completed ? '✓ DISELAKAN (+20 XP)' : 'TANDA SELESAI'}
          </button>
        </div>

        <div className="flex items-center gap-2 border-b border-navy-800 pb-2">
          {[
            { id: 'ido', label: 'I DO (Konsep & Nota)' },
            { id: 'wedo', label: 'WE DO (Contoh Berpandu)' },
            { id: 'youdo', label: 'YOU DO (Latihan & Kuiz)' }
          ].map(t => (
            <button 
              key={t.id}
              onClick={() => setSubTab(t.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                subTab === t.id ? 'bg-navy-800 text-electric-300 border border-electric-500/40' : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {subTab === 'ido' && (
          <div className="space-y-6">
            <div className="p-6 bg-navy-950/80 rounded-2xl border border-navy-800 space-y-3">
              <h3 className="text-xs font-bold text-electric-400 font-heading">KONSEP UTAMA</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{currentMod.ido.concept}</p>
            </div>
            {currentMod.ido.visualDiagram && (
              <div className="p-4 bg-navy-900 rounded-xl border border-navy-700 font-mono text-xs text-gold-400">
                {currentMod.ido.visualDiagram}
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-3">
              {currentMod.ido.keyTerms?.map((kt, idx) => (
                <div key={idx} className="p-3 bg-navy-900/60 rounded-xl border border-navy-800">
                  <div className="text-xs font-bold text-electric-300">{kt.term}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{kt.def}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {subTab === 'wedo' && (
          <div className="space-y-4">
            <div className="text-xs text-slate-300 font-semibold">{currentMod.wedo.guidedDemo}</div>
            <div className="space-y-3">
              {currentMod.wedo.examples?.map((ex, i) => (
                <div key={i} className="p-4 bg-navy-950 rounded-xl border border-navy-800 font-mono text-xs text-emerald-400">
                  {ex.sql || JSON.stringify(ex)}
                </div>
              ))}
            </div>
          </div>
        )}

        {subTab === 'youdo' && (
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-electric-400">KUIZ UJI KEFAHAMAN</h3>
            {currentMod.youdo.quiz?.map((q, idx) => (
              <div key={q.id} className="p-5 bg-navy-950 rounded-2xl border border-navy-800 space-y-3">
                <div className="text-xs font-bold text-white">{idx + 1}. {q.question}</div>
                <div className="space-y-2">
                  {q.options.map((opt, oIdx) => (
                    <button key={oIdx} onClick={() => addXP(10, 'Jawapan Kuiz Betul')} className="w-full text-left p-3 rounded-xl bg-navy-900 hover:bg-electric-900/40 border border-navy-700 text-xs text-slate-300 hover:text-white transition">
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ----------------------------------------------------
// 5. WORKBENCH LAB VIEW
// ----------------------------------------------------
function WorkbenchLabView({ addXP }) {
  const steps = window.INITIAL_DATA.workbenchSteps;
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [checkedSteps, setCheckedSteps] = useState({});
  const [queryInput, setQueryInput] = useState(steps[0].sql);
  const [outputResult, setOutputResult] = useState(null);

  const activeStep = steps[currentStepIdx];

  const handleRun = () => {
    const res = window.SQLEngine.execute(queryInput);
    setOutputResult(res);
  };

  const toggleCheck = (idx) => {
    setCheckedSteps(prev => {
      const next = { ...prev, [idx]: !prev[idx] };
      if (next[idx]) addXP(15, `Menyiapkan Langkah ${idx + 1} Workbench`);
      return next;
    });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="glass-card p-6 rounded-3xl border border-navy-800 flex items-center justify-between">
        <div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-electric-500/20 text-electric-400 font-mono border border-electric-500/30">
            🖥️ MYSQL WORKBENCH LAB SIMULATOR
          </span>
          <h1 className="text-2xl font-bold font-heading text-white mt-2">Tutorial Practical MySQL Workbench (14 Steps)</h1>
        </div>
        <div className="text-right">
          <div className="text-xs text-slate-400">Langkah Selesai</div>
          <div className="text-xl font-bold text-electric-400 font-mono">
            {Object.keys(checkedSteps).filter(k => checkedSteps[k]).length} / 14
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass-card p-4 rounded-2xl border border-navy-800 space-y-2 max-h-[600px] overflow-y-auto">
          {steps.map((st, i) => (
            <div 
              key={st.step} 
              onClick={() => { setCurrentStepIdx(i); setQueryInput(st.sql); setOutputResult(null); }}
              className={`p-3 rounded-xl cursor-pointer text-xs flex items-center justify-between border transition ${
                i === currentStepIdx ? 'bg-electric-600/30 border-electric-500 text-white' : 'bg-navy-950 border-navy-800 text-slate-400 hover:text-white'
              }`}
            >
              <div>
                <span className="font-mono text-gold-400 font-bold mr-2">STEP {st.step}</span>
                <span>{st.title}</span>
              </div>
              <input type="checkbox" checked={!!checkedSteps[i]} onChange={() => toggleCheck(i)} onClick={e => e.stopPropagation()} />
            </div>
          ))}
        </div>

        <div className="md:col-span-2 space-y-4">
          <div className="glass-card p-5 rounded-2xl border border-navy-800 space-y-3">
            <h3 className="text-sm font-bold text-electric-300 font-heading">
              LANGKAH {activeStep.step}: {activeStep.title}
            </h3>
            <p className="text-xs text-slate-300">{activeStep.desc}</p>
            <div className="p-3 bg-navy-950 rounded-xl border border-navy-800 font-mono text-xs text-emerald-400">
              Expected Output: {activeStep.expected}
            </div>

            <div className="space-y-2">
              <label className="text-xs text-slate-400 block font-mono">SQL Editor (MySQL Workbench)</label>
              <textarea 
                rows={4}
                value={queryInput}
                onChange={e => setQueryInput(e.target.value)}
                className="w-full bg-navy-950 border border-navy-700 rounded-xl p-3 font-mono text-xs text-electric-200 focus:outline-none focus:border-electric-500"
              />
              <div className="flex items-center justify-between">
                <button onClick={handleRun} className="px-4 py-2 rounded-xl bg-electric-600 hover:bg-electric-700 text-white font-bold text-xs shadow-md">
                  ⚡ EXECUTE (RUN QUERY)
                </button>
                <button onClick={() => toggleCheck(currentStepIdx)} className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs">
                  {checkedSteps[currentStepIdx] ? '✓ SAYA SUDAH BERJAYA' : 'TANDA BERJAYA'}
                </button>
              </div>
            </div>
          </div>

          {outputResult && (
            <div className="glass-card p-4 rounded-2xl border border-navy-800 space-y-3">
              <div className="text-xs font-bold text-slate-400 font-mono">RESULT GRID & ACTION OUTPUT</div>
              <div className={`p-3 rounded-xl font-mono text-xs ${outputResult.success ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800' : 'bg-rose-950/60 text-rose-300 border border-rose-800'}`}>
                {outputResult.message || outputResult.error}
              </div>
              {outputResult.rows && outputResult.rows.length > 0 && (
                <div className="overflow-x-auto max-h-48">
                  <table className="w-full text-left font-mono text-xs">
                    <thead>
                      <tr className="bg-navy-900 text-electric-300 border-b border-navy-700">
                        {outputResult.columns.map(c => <th key={c} className="p-2">{c}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {outputResult.rows.map((r, i) => (
                        <tr key={i} className="border-b border-navy-800 hover:bg-navy-800/40">
                          {outputResult.columns.map(c => <td key={c} className="p-2 text-slate-300">{String(r[c])}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// 6. SQL PLAYGROUND VIEW
// ----------------------------------------------------
function SQLPlaygroundView({ addXP }) {
  const [sqlInput, setSqlInput] = useState("SELECT * FROM pelajar;");
  const [result, setResult] = useState(null);
  const [schema, setSchema] = useState({});

  useEffect(() => {
    setSchema(window.SQLEngine.getSchema());
  }, []);

  const handleExecute = () => {
    const res = window.SQLEngine.execute(sqlInput);
    setResult(res);
    if (res.success) addXP(10, 'Menjalankan SQL Query');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="glass-card p-6 rounded-3xl border border-navy-800 flex items-center justify-between">
        <div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono border border-emerald-500/30">
            💻 SQL PLAYGROUND IDE
          </span>
          <h1 className="text-2xl font-bold font-heading text-white mt-2">Mini SQL Editor & In-Memory Engine</h1>
        </div>
        <button onClick={() => { window.SQLEngine.reset(); setSchema(window.SQLEngine.getSchema()); }} className="px-3 py-1.5 rounded-xl bg-navy-800 text-slate-300 text-xs hover:text-white">
          ↺ RESET DATABASE
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="glass-card p-4 rounded-2xl border border-navy-800 space-y-4">
          <div className="text-xs font-bold text-slate-400 font-mono uppercase">DATABASE / TABLES</div>
          <div className="space-y-3">
            {Object.keys(schema).map(tb => (
              <div key={tb} className="p-3 bg-navy-950 rounded-xl border border-navy-800 space-y-1">
                <div className="text-xs font-bold text-electric-400 font-mono flex items-center gap-1">
                  <span>📊 {tb}</span>
                </div>
                <div className="pl-3 space-y-0.5">
                  {schema[tb].map(col => (
                    <div key={col} className="text-[11px] font-mono text-slate-400">• {col}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 space-y-4">
          <div className="glass-card p-5 rounded-2xl border border-navy-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 font-mono">SQL QUERY EDITOR</span>
              <div className="flex items-center gap-2">
                <button onClick={() => setSqlInput("SELECT * FROM pelajar WHERE umur >= 19;")} className="text-[11px] text-electric-400 hover:underline">Sample 1</button>
                <button onClick={() => setSqlInput("SELECT p.nama, d.kod_kursus FROM pelajar p INNER JOIN pendaftaran d ON p.id_pelajar = d.id_pelajar;")} className="text-[11px] text-electric-400 hover:underline">Sample JOIN</button>
              </div>
            </div>
            <textarea 
              rows={6}
              value={sqlInput}
              onChange={e => setSqlInput(e.target.value)}
              className="w-full bg-navy-950 border border-navy-700 rounded-xl p-4 font-mono text-xs text-electric-200 focus:outline-none focus:border-electric-500"
            />
            <button onClick={handleExecute} className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-electric-500 to-electric-700 text-white font-bold text-xs shadow-lg glow-electric">
              ▶ RUN QUERY
            </button>
          </div>

          {result && (
            <div className="glass-card p-5 rounded-2xl border border-navy-800 space-y-3">
              <div className="text-xs font-bold text-slate-400 font-mono">RESULT GRID & EXECUTION LOG</div>
              <div className={`p-3 rounded-xl font-mono text-xs ${result.success ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800' : 'bg-rose-950/60 text-rose-300 border border-rose-800'}`}>
                {result.message || result.error}
                {result.hint && <div className="text-[11px] text-amber-300 mt-1">💡 Hint: {result.hint}</div>}
              </div>

              {result.rows && result.rows.length > 0 && (
                <div className="overflow-x-auto max-h-64 rounded-xl border border-navy-800">
                  <table className="w-full text-left font-mono text-xs">
                    <thead>
                      <tr className="bg-navy-900 text-electric-300 border-b border-navy-700">
                        {result.columns.map(c => <th key={c} className="p-3">{c}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {result.rows.map((r, i) => (
                        <tr key={i} className="border-b border-navy-800/60 hover:bg-navy-800/40">
                          {result.columns.map(c => <td key={c} className="p-3 text-slate-200">{String(r[c])}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// 7. ADDITIONAL INTERACTIVE LAB COMPONENTS
// ----------------------------------------------------
function CommandLibraryView({ onTryInPlayground }) {
  const lib = window.INITIAL_DATA.commandLibrary;
  const [filterCat, setFilterCat] = useState('ALL');

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="glass-card p-6 rounded-3xl border border-navy-800">
        <h1 className="text-2xl font-bold font-heading text-white">📖 SQL COMMAND LIBRARY</h1>
        <p className="text-xs text-slate-400 mt-1">Rujukan sintaks SQL rasmi MySQL bagi DDL, DML, DQL, Aggregates & JOINs.</p>
        <div className="flex gap-2 mt-4 overflow-x-auto">
          {["ALL", "DDL", "DML", "DQL", "FUNCTIONS", "GROUPING", "RELATIONSHIP"].map(c => (
            <button key={c} onClick={() => setFilterCat(c)} className={`px-3 py-1.5 rounded-xl text-xs font-semibold ${filterCat === c ? 'bg-electric-600 text-white' : 'bg-navy-950 text-slate-400'}`}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {lib.filter(item => filterCat === 'ALL' || item.category === filterCat).map((item, idx) => (
          <div key={idx} className="glass-card p-5 rounded-2xl border border-navy-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-electric-400 font-mono text-xs">{item.command}</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-navy-950 text-slate-400 border border-navy-800">{item.category}</span>
            </div>
            <p className="text-xs text-slate-300">{item.desc}</p>
            <div className="p-3 bg-navy-950 rounded-xl border border-navy-800 font-mono text-xs text-gold-400">
              {item.syntax}
            </div>
            <button onClick={() => onTryInPlayground(item.example)} className="text-xs text-electric-400 hover:underline font-semibold">
              CUBA DALAM PLAYGROUND →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConceptVisualizerView() {
  const [selectedNode, setSelectedNode] = useState('database');
  return (
    <div className="max-w-4xl mx-auto glass-card p-8 rounded-3xl border border-navy-800 space-y-6">
      <h1 className="text-2xl font-bold font-heading text-white text-center">DATABASE CONCEPT VISUALIZER</h1>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        {['database', 'table', 'row', 'column', 'pk'].map(node => (
          <button key={node} onClick={() => setSelectedNode(node)} className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition ${selectedNode === node ? 'bg-electric-600 text-white' : 'bg-navy-950 text-slate-400'}`}>
            {node}
          </button>
        ))}
      </div>
      <div className="p-6 bg-navy-950 rounded-2xl border border-navy-800 text-center space-y-3">
        <div className="text-base font-bold text-gold-400 uppercase font-mono">{selectedNode}</div>
        <p className="text-xs text-slate-300 max-w-md mx-auto">
          {selectedNode === 'database' && 'Database (Pangkalan Data) ialah koleksi terstruktur tempat menyimpan jadual-jadual terhubung.'}
          {selectedNode === 'table' && 'Jadual (Table) menyusun data dalam lajur (Attributes) dan baris (Records).'}
          {selectedNode === 'row' && 'Baris (Row/Record) mewakili 1 entiti/objek data lengkap.'}
          {selectedNode === 'column' && 'Lajur (Column/Field) menetapkan jenis sifat atau atribut data.'}
          {selectedNode === 'pk' && 'Primary Key (PK) ialah nilai unik yang membezakan setiap baris secara mutlak.'}
        </p>
      </div>
    </div>
  );
}

function ERDBuilderView({ addXP }) {
  const [entities] = useState([
    { id: 1, name: 'PELAJAR', attributes: ['id_pelajar (PK)', 'nama', 'kelas'] },
    { id: 2, name: 'PENDAFTARAN', attributes: ['id_daftar (PK)', 'id_pelajar (FK)', 'kod_kursus'] }
  ]);
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="glass-card p-6 rounded-3xl border border-navy-800 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold font-heading text-white">🔗 ERD BUILDER CANVAS</h1>
          <p className="text-xs text-slate-400">Reka bentuk Entiti, Atribut, Primary Key dan Foreign Key secara visual.</p>
        </div>
        <button onClick={() => addXP(30, 'Mereka bentuk ERD')} className="px-4 py-2 rounded-xl bg-purple-600 text-white font-bold text-xs">
          SIMPAN ERD (+30 XP)
        </button>
      </div>
      <div className="p-8 bg-navy-950 rounded-3xl border border-navy-800 min-h-[350px] flex items-center justify-center gap-8 flex-wrap">
        {entities.map(e => (
          <div key={e.id} className="p-5 glass-card rounded-2xl border border-electric-500/40 w-64 space-y-3">
            <div className="font-bold text-center text-electric-400 font-heading border-b border-navy-700 pb-2">{e.name}</div>
            <div className="space-y-1">
              {e.attributes.map((a, i) => (
                <div key={i} className="text-xs font-mono text-slate-300 p-1 bg-navy-900 rounded">{a}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PKFKLabView({ addXP }) { 
  return (
    <div className="max-w-4xl mx-auto glass-card p-6 rounded-3xl border border-navy-800 space-y-4">
      <h1 className="text-xl font-bold font-heading text-white">🔑 Primary Key & Foreign Key Lab</h1>
      <p className="text-xs text-slate-300">Kenal pasti kunci unik dan simulasi ralat duplikasi PK.</p>
      <div className="p-4 bg-navy-950 rounded-xl border border-navy-800 font-mono text-xs text-gold-400">
        Jadual PELAJAR [PK: id_pelajar] <br/>
        Jadual PENDAFTARAN [PK: id_daftar, FK: id_pelajar merujuk PELAJAR(id_pelajar)]
      </div>
      <button onClick={() => addXP(15, 'Menyelesaikan PK/FK Lab')} className="px-4 py-2 rounded-xl bg-electric-600 text-white font-bold text-xs">
        UJI DUPLICATE KEY SIMULATION (+15 XP)
      </button>
    </div>
  ); 
}

function CreateTableBuilderView({ onOpenPlayground }) {
  const [tableName, setTableName] = useState('pelajar');
  const [cols, setCols] = useState([
    { name: 'id_pelajar', type: 'INT', pk: true, auto: true },
    { name: 'nama', type: 'VARCHAR(100)', pk: false, auto: false }
  ]);

  const generatedSQL = `CREATE TABLE ${tableName} (\n` + 
    cols.map(c => `  ${c.name} ${c.type}${c.pk ? ' PRIMARY KEY' : ''}${c.auto ? ' AUTO_INCREMENT' : ''}`).join(',\n') + 
    '\n);';

  return (
    <div className="max-w-4xl mx-auto glass-card p-6 rounded-3xl border border-navy-800 space-y-4">
      <h1 className="text-xl font-bold font-heading text-white">🏗️ CREATE TABLE BUILDER</h1>
      <div className="space-y-3">
        <input type="text" value={tableName} onChange={e => setTableName(e.target.value)} className="bg-navy-950 border border-navy-700 rounded-xl p-2 text-xs text-white" placeholder="Nama Jadual" />
        <div className="p-4 bg-navy-950 rounded-xl border border-navy-800 font-mono text-xs text-emerald-400">
          {generatedSQL}
        </div>
        <button onClick={onOpenPlayground} className="px-4 py-2 rounded-xl bg-electric-600 text-white font-bold text-xs">
          CUBA DALAM SQL PLAYGROUND
        </button>
      </div>
    </div>
  );
}

function DataTypeLabView({ addXP }) {
  return (
    <div className="max-w-4xl mx-auto glass-card p-6 rounded-3xl border border-navy-800 space-y-4">
      <h1 className="text-xl font-bold font-heading text-white">🔢 DATA TYPE LAB</h1>
      <p className="text-xs text-slate-300">Pilih jenis data MySQL yang sesuai bagi atribut berikut:</p>
      <div className="grid grid-cols-2 gap-3">
        {[
          { field: 'Nama Pelajar', type: 'VARCHAR(100)' },
          { field: 'Umur', type: 'INT' },
          { field: 'Tarikh Lahir', type: 'DATE' },
          { field: 'Yuran (RM)', type: 'DECIMAL(10,2)' }
        ].map((item, i) => (
          <div key={i} className="p-3 bg-navy-950 rounded-xl border border-navy-800 flex justify-between items-center text-xs">
            <span className="text-white font-semibold">{item.field}</span>
            <span className="font-mono text-gold-400">{item.type}</span>
          </div>
        ))}
      </div>
      <button onClick={() => addXP(15, 'Lulus Data Type Matching')} className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs">
        SEMAK JAWAPAN (+15 XP)
      </button>
    </div>
  );
}

function InsertDataLabView({ addXP }) { return <div className="p-6 glass-card rounded-3xl text-center text-white text-xs">➕ Insert Data Lab Simulator Active</div>; }

function SelectTrainerView({ addXP }) {
  const exercises = window.INITIAL_DATA.sqlExercises;
  const [currentIdx, setCurrentIdx] = useState(0);
  const ex = exercises[currentIdx];

  return (
    <div className="max-w-5xl mx-auto glass-card p-6 rounded-3xl border border-navy-800 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold font-heading text-white">✨ SELECT QUERY TRAINER (LEVEL {currentIdx + 1}/25)</h1>
        <div className="flex gap-2">
          <button disabled={currentIdx === 0} onClick={() => setCurrentIdx(c => c - 1)} className="px-3 py-1 bg-navy-800 rounded text-xs text-slate-300">PREV</button>
          <button disabled={currentIdx === exercises.length - 1} onClick={() => setCurrentIdx(c => c + 1)} className="px-3 py-1 bg-navy-800 rounded text-xs text-slate-300">NEXT</button>
        </div>
      </div>
      <div className="p-4 bg-navy-950 rounded-xl border border-navy-800 space-y-2">
        <div className="text-xs font-bold text-electric-400">{ex.title}</div>
        <p className="text-xs text-slate-300">{ex.prompt}</p>
        <div className="p-2 bg-navy-900 rounded font-mono text-xs text-gold-400">Jelaskan query: {ex.hint}</div>
      </div>
      <button onClick={() => addXP(10, `Lulus ${ex.title}`)} className="px-4 py-2 bg-electric-600 rounded-xl font-bold text-xs text-white">
        SEMAK JAWAPAN (+10 XP)
      </button>
    </div>
  );
}

function UpdateDeleteSafetyView({ addXP }) { return <div className="p-6 glass-card rounded-3xl text-center text-white text-xs">🛡️ UPDATE/DELETE Safety Warnings Active</div>; }
function AggregateLabView({ addXP }) { return <div className="p-6 glass-card rounded-3xl text-center text-white text-xs">🧮 Aggregate Function Lab Active</div>; }
function JOINVisualizerView() { return <div className="p-6 glass-card rounded-3xl text-center text-white text-xs">🔀 JOIN Visualizer Animation Active</div>; }
function NormalizationLabView({ addXP }) { return <div className="p-6 glass-card rounded-3xl text-center text-white text-xs">📐 Normalization Lab 1NF-3NF Active</div>; }

function ErrorClinicView({ addXP }) {
  const errors = window.INITIAL_DATA.errorClinic;
  const [selectedError, setSelectedError] = useState(errors[0]);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="glass-card p-6 rounded-3xl border border-navy-800">
        <h1 className="text-2xl font-bold font-heading text-white">🚑 SQL ERROR CLINIC</h1>
        <p className="text-xs text-slate-400">Panduan troubleshoot ralat biasa MySQL semasa penulisan SQL query.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass-card p-4 rounded-2xl border border-navy-800 space-y-2">
          {errors.map((e, idx) => (
            <div key={idx} onClick={() => setSelectedError(e)} className={`p-3 rounded-xl cursor-pointer text-xs ${selectedError.code === e.code ? 'bg-rose-900/40 border border-rose-500 text-white' : 'bg-navy-950 text-slate-400 hover:text-white'}`}>
              <div className="font-bold text-rose-400 font-mono">{e.code}</div>
              <div>{e.title}</div>
            </div>
          ))}
        </div>
        <div className="md:col-span-2 glass-card p-6 rounded-2xl border border-navy-800 space-y-4">
          <h2 className="text-base font-bold text-rose-400 font-mono">{selectedError.code}: {selectedError.title}</h2>
          <div className="p-3 bg-rose-950/60 rounded-xl border border-rose-800 text-xs font-mono text-rose-200">{selectedError.message}</div>
          <div className="space-y-2 text-xs text-slate-300">
            <div className="font-bold text-white">Maksud Mudah:</div>
            <p>{selectedError.meaning}</p>
            <div className="font-bold text-white">Punca Biasa:</div>
            <ul className="list-disc pl-5 space-y-1">{selectedError.commonCauses.map((c, i) => <li key={i}>{c}</li>)}</ul>
            <div className="font-bold text-white">Cara Baiki:</div>
            <p className="text-emerald-400 font-semibold">{selectedError.howToFix}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AITutorView() {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hai! Saya AI Database Tutor anda. Saya sedia membantu menerangkan konsep, menyemak error, atau memberikan hint tanpa memberi jawapan terus. Ada apa yang boleh saya bantu?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsgs = [...messages, { sender: 'user', text: input }];
    setMessages(newMsgs);
    setInput('');

    setTimeout(() => {
      setMessages([...newMsgs, {
        sender: 'ai',
        text: 'Mari kita bina bersama! Sila tentukan dahulu table mana yang menyimpan data yang anda mahukan dan syarat yang perlu diletakkan selepas WHERE.'
      }]);
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto glass-card p-6 rounded-3xl border border-navy-800 flex flex-col h-[550px]">
      <div className="border-b border-navy-800 pb-4 mb-4">
        <h1 className="text-xl font-bold font-heading text-white flex items-center gap-2">🤖 AI DATABASE TUTOR COACH</h1>
        <p className="text-xs text-slate-400">Pembimbing Socratic yang membantu memberikan hints & pemahaman mendalam.</p>
      </div>
      <div className="flex-1 overflow-y-auto space-y-3 p-2">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-4 rounded-2xl max-w-md text-xs leading-relaxed ${m.sender === 'user' ? 'bg-electric-600 text-white' : 'bg-navy-900 border border-navy-700 text-slate-200'}`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 pt-4 border-t border-navy-800">
        <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} placeholder="Minta hint atau terangkan konsep SQL..." className="flex-1 bg-navy-950 border border-navy-700 rounded-xl px-4 py-2.5 text-xs text-white" />
        <button onClick={handleSend} className="px-5 py-2.5 rounded-xl bg-electric-600 text-white font-bold text-xs">HANTAR</button>
      </div>
    </div>
  );
}

function PracticalLabsView({ addXP }) {
  const labs = window.INITIAL_DATA.practicalLabs;
  const [selectedLab, setSelectedLab] = useState(labs[0]);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="glass-card p-6 rounded-3xl border border-navy-800">
        <h1 className="text-2xl font-bold font-heading text-white">🧪 PRACTICAL DATABASE LABS (6 AMALI)</h1>
        <p className="text-xs text-slate-400">Amali pangkalan data berpandukan rubrik pensyarah KKPG.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass-card p-4 rounded-2xl border border-navy-800 space-y-2">
          {labs.map(l => (
            <div key={l.id} onClick={() => setSelectedLab(l)} className={`p-3 rounded-xl cursor-pointer text-xs border ${selectedLab.id === l.id ? 'bg-electric-600/30 border-electric-500 text-white' : 'bg-navy-950 border-navy-800 text-slate-400 hover:text-white'}`}>
              <div className="font-mono font-bold text-gold-400">{l.code}</div>
              <div className="font-semibold">{l.title}</div>
            </div>
          ))}
        </div>
        <div className="md:col-span-2 glass-card p-6 rounded-2xl border border-navy-800 space-y-4">
          <h2 className="text-lg font-bold text-white font-heading">{selectedLab.code}: {selectedLab.title}</h2>
          <p className="text-xs text-slate-300">{selectedLab.scenario}</p>
          <div className="space-y-2 text-xs">
            <div className="font-bold text-electric-400">TUGASAN AMALI:</div>
            {selectedLab.tasks.map((t, i) => <div key={i} className="text-slate-300 font-mono">• {t}</div>)}
          </div>
          <button onClick={() => addXP(40, `Menghantar ${selectedLab.code}`)} className="px-5 py-2.5 bg-emerald-600 rounded-xl text-white font-bold text-xs">
            HANTAR AMALI (+40 XP)
          </button>
        </div>
      </div>
    </div>
  );
}

function MiniProjectsView({ addXP }) {
  const projects = window.INITIAL_DATA.miniProjects;
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="glass-card p-6 rounded-3xl border border-navy-800">
        <h1 className="text-2xl font-bold font-heading text-white">📁 MINI DATABASE PROJECT BUILDER</h1>
        <p className="text-xs text-slate-400">6 Senario projek pangkalan data dunia sebenar STM Kolej Komuniti Pasir Gudang.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(p => (
          <div key={p.id} className="glass-card p-6 rounded-2xl border border-navy-800 space-y-3">
            <div className="text-xs font-bold text-electric-400 font-mono">{p.domain}</div>
            <h3 className="text-sm font-bold text-white font-heading">{p.title}</h3>
            <p className="text-xs text-slate-300">{p.description}</p>
            <button onClick={() => addXP(100, `Memulakan Projek ${p.title}`)} className="w-full py-2 bg-purple-600 rounded-xl text-white font-bold text-xs">
              MULAKAN PROJEK (+100 XP)
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function MyWorkView() {
  return (
    <div className="max-w-5xl mx-auto glass-card p-8 rounded-3xl border border-navy-800 space-y-6">
      <h1 className="text-2xl font-bold font-heading text-white">📂 HASIL KERJA SAYA</h1>
      <p className="text-xs text-slate-400">Simpanan skrip SQL, draf ERD, dan hantaran amali anda.</p>
      <div className="p-6 bg-navy-950 rounded-2xl border border-navy-800 text-center text-xs text-slate-400">
        Anda mempunyai 3 skrip SQL tersimpan dan 1 draf ERD.
      </div>
    </div>
  );
}

function AchievementsView({ currentUser }) {
  const badges = window.INITIAL_DATA.badges;
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="glass-card p-6 rounded-3xl border border-navy-800">
        <h1 className="text-2xl font-bold font-heading text-white">🏅 PENCAPAIAN & BADGE</h1>
        <p className="text-xs text-slate-400">Kumpulkan XP dan buka lencana pencapaian pangkalan data.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {badges.map(b => {
          const unlocked = currentUser.unlockedBadges?.includes(b.id);
          return (
            <div key={b.id} className={`p-5 rounded-2xl border text-center space-y-2 ${unlocked ? 'glass-card border-gold-500/50' : 'bg-navy-950/60 border-navy-900 opacity-60'}`}>
              <div className="text-3xl">{unlocked ? '🏆' : '🔒'}</div>
              <div className="font-bold text-xs text-white">{b.name}</div>
              <div className="text-[10px] text-slate-400">{b.description}</div>
              <div className="text-[11px] font-bold text-gold-400 font-mono">+{b.xp} XP</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TeacherDashboardView() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="glass-card p-6 rounded-3xl border border-purple-500/30 flex justify-between items-center">
        <div>
          <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 font-mono border border-purple-500/40">
            PENSYARAH / ADMIN DASHBOARD
          </span>
          <h1 className="text-2xl font-bold font-heading text-white mt-2">DB Fundamentals Hub Management</h1>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-card p-5 rounded-2xl border border-navy-800"><div className="text-xs text-slate-400">JUMLAH PELAJAR</div><div className="text-3xl font-extrabold text-purple-400">42 Orang</div></div>
        <div className="glass-card p-5 rounded-2xl border border-navy-800"><div className="text-xs text-slate-400">PURATA KEMAJUAN</div><div className="text-3xl font-extrabold text-electric-400">74%</div></div>
        <div className="glass-card p-5 rounded-2xl border border-navy-800"><div className="text-xs text-slate-400">PRACTICAL SUBMISSIONS</div><div className="text-3xl font-extrabold text-emerald-400">28 Semakan</div></div>
        <div className="glass-card p-5 rounded-2xl border border-navy-800"><div className="text-xs text-slate-400">PERLU PERHATIAN</div><div className="text-3xl font-extrabold text-rose-400">3 Pelajar</div></div>
      </div>
    </div>
  );
}

function TeacherCMSView({ activeSubTab }) {
  return <div className="p-8 glass-card rounded-3xl text-center text-white">⚙️ Pengurusan Pensyarah ({activeSubTab}) Active</div>;
}

// Mount Main React App
const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(<App />);
}
