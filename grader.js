(function () {
  const mount = document.getElementById("lab");
  const moduleId = document.body.dataset.module;
  const storeKey = document.body.dataset.store;
  const exercises = (window.LABS && window.LABS[storeKey] && window.LABS[storeKey][moduleId]) || [];
  if (!mount || !exercises.length) return;

  const style = document.createElement("style");
  style.textContent = `
    #lab { margin: 1.4rem 0 1rem; }
    #lab h2 { font-size: 1.7rem; }
    .lab-intro { color: var(--muted); line-height: 1.55; }
    .module-score { font-family: Poppins, sans-serif; font-weight: 500; font-size: 1.35rem; margin: .8rem 0 1rem; }
    .lab-card { background: var(--card); border: 1px solid var(--line); border-radius: 12px; padding: 1rem; margin: 0 0 1rem; }
    .lab-card.solved { border-color: var(--accent); }
    .lab-card h3 { margin-bottom: .35rem; }
    .lab-card p { color: var(--muted); line-height: 1.5; }
    .sample-label { margin: .8rem 0 .3rem; font-size: .72rem; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); }
    .sample { margin: 0 0 .8rem; background: var(--code); border-radius: 12px; padding: .7rem .8rem; font-family: "JetBrains Mono", ui-monospace, monospace; font-size: .82rem; line-height: 1.55; white-space: pre-wrap; }
    .lab-actions { display: flex; flex-wrap: wrap; gap: .45rem; align-items: center; margin: .7rem 0; }
    .lab-actions button, .upload { font: inherit; cursor: pointer; border-radius: 999px; border: 1px solid var(--line); background: var(--bg); padding: .4rem .8rem; }
    .lab-actions .grade, .lab-actions .copy { background: var(--accent); color: #fcfdff; border-color: var(--accent); }
    .upload input { display: none; }
    .lab-card textarea { width: 100%; min-height: 9rem; resize: vertical; border: 0; border-radius: 12px; background: var(--code); color: #0c0e14; font-family: "JetBrains Mono", ui-monospace, monospace; font-size: .86rem; line-height: 1.55; padding: .9rem; }
    .scoreline { font-weight: 600; color: var(--text) !important; }
    .test-list { list-style: none; padding: 0; margin: .4rem 0 0; }
    .test-list li { padding: .45rem 0; border-top: 1px solid var(--line); font-size: .88rem; }
    .test-list .ok { color: #059669; }
    .test-list .bad { color: #ef4444; }
    .test-list .detail { display: block; color: var(--muted); font-family: "JetBrains Mono", ui-monospace, monospace; font-size: .78rem; white-space: pre-wrap; }
  `;
  document.head.appendChild(style);

  function esc(value) {
    return String(value).replace(/[&<>"']/g, (ch) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[ch]));
  }

  function readState() {
    return window.__courseState || JSON.parse(localStorage.getItem(storeKey) || "{}");
  }

  function writeLab(id, result, source) {
    const state = readState();
    state.checks = state.checks || {};
    state.quiz = state.quiz || {};
    state.code = state.code || {};
    state.labs = state.labs || {};
    state.labs[id] = result;
    state.code["lab-" + id] = source;
    if (window.__courseState) window.__courseState.labs = state.labs;
    localStorage.setItem(storeKey, JSON.stringify(state));
  }

  const totalTests = exercises.reduce((sum, exercise) => sum + exercise.tests.length, 0);
  const scriptCourse = storeKey === "fundamentals-i" && Number(moduleId) < 6;
  const labIntro = scriptCourse
    ? "Write each program in a <code>.py</code> file, upload it, and check your score. The names in the prompt are already set. Print exactly the sample output. Spaces and line breaks count. Do not use <code>input()</code> or <code>def</code>."
    : "Write each function in a <code>.py</code> file, upload it, and check your score. The tests call your function. They do not read <code>input()</code>.";
  mount.innerHTML = `
    <h2>Programming exercises</h2>
    <p class="lab-intro">${labIntro}</p>
    <p class="module-score" id="moduleScore">Score 0 / ${totalTests}</p>
    ${exercises.map((exercise, index) => {
      const id = moduleId + "-" + (index + 1);
      return `<article class="lab-card" data-lab="${esc(id)}">
        <h3>${index + 1}. ${esc(exercise.title)}</h3>
        <p>${esc(exercise.prompt)}</p>
        ${exercise.output ? `<p class="sample-label">Output</p><pre class="sample">${esc(exercise.output)}</pre>` : ""}
        <div class="lab-actions">
          <label class="upload">Upload .py<input type="file" accept=".py,.txt,text/plain"></label>
          <button type="button" class="copy">Copy</button>
          <button type="button" class="grade">Check score</button>
          <button type="button" class="starter">Download starter</button>
          <button type="button" class="reset-lab">Reset</button>
        </div>
        <textarea spellcheck="false"></textarea>
        <p class="scoreline"></p>
        <ul class="test-list"></ul>
      </article>`;
    }).join("")}
  `;

  const cards = [...mount.querySelectorAll(".lab-card")];
  const saved = readState();

  function renderModuleScore() {
    const labs = (readState().labs) || {};
    let passed = 0;
    cards.forEach((card, index) => {
      const result = labs[moduleId + "-" + (index + 1)];
      if (result) passed += Number(result.passed) || 0;
    });
    const percent = totalTests ? Math.round((passed / totalTests) * 100) : 0;
    document.getElementById("moduleScore").textContent = "Score " + passed + " / " + totalTests + " tests · " + percent + "%";
  }

  function showResult(card, result) {
    const line = card.querySelector(".scoreline");
    const list = card.querySelector(".test-list");
    const percent = result.total ? Math.round((result.passed / result.total) * 100) : 0;
    line.textContent = result.passed + " / " + result.total + " tests passed · " + percent + "%";
    card.classList.toggle("solved", result.passed === result.total && result.total > 0);
    list.innerHTML = (result.cases || []).map((item) => {
      const detail = item.detail ? `<span class="detail">${esc(item.detail)}</span>` : "";
      return `<li class="${item.ok ? "ok" : "bad"}">${item.ok ? "Passed" : "Failed"} · ${esc(item.name)}${detail}</li>`;
    }).join("");
  }

  cards.forEach((card, index) => {
    const exercise = exercises[index];
    const id = moduleId + "-" + (index + 1);
    const area = card.querySelector("textarea");
    const stored = saved.code && saved.code["lab-" + id];
    area.value = stored != null ? stored : exercise.starter;
    if (saved.labs && saved.labs[id]) showResult(card, saved.labs[id]);

    card.querySelector(".upload").addEventListener("change", (event) => {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      if (file.size > 100000) {
        card.querySelector(".scoreline").textContent = "That file is too large. Keep the solution under 100 KB.";
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        area.value = String(reader.result).replace(/^\uFEFF/, "");
        const state = readState();
        state.code = state.code || {};
        state.code["lab-" + id] = area.value;
        if (window.__courseState) window.__courseState.code = state.code;
        localStorage.setItem(storeKey, JSON.stringify(state));
      };
      reader.readAsText(file);
    });

    card.querySelector(".starter").addEventListener("click", () => {
      const blob = new Blob([exercise.starter], { type: "text/x-python" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "exercise-" + (index + 1) + ".py";
      link.click();
      URL.revokeObjectURL(url);
    });

    card.querySelector(".reset-lab").addEventListener("click", () => {
      area.value = exercise.starter;
    });

    card.querySelector(".copy").addEventListener("click", async () => {
      const button = card.querySelector(".copy");
      const text = area.value;
      try {
        await navigator.clipboard.writeText(text);
      } catch (error) {
        const helper = document.createElement("textarea");
        helper.value = text;
        document.body.appendChild(helper);
        helper.select();
        document.execCommand("copy");
        helper.remove();
      }
      button.textContent = "Copied";
      setTimeout(() => { button.textContent = "Copy"; }, 1200);
    });

    card.querySelector(".grade").addEventListener("click", async () => {
      const button = card.querySelector(".grade");
      button.disabled = true;
      const previous = button.textContent;
      button.textContent = "Checking…";
      card.querySelector(".scoreline").textContent = "Loading Python and running tests…";
      try {
        const runtime = await window.__ensurePython();
        runtime.globals.set("student_src", area.value);
        runtime.globals.set("tests_json", JSON.stringify(exercise.tests));
        const raw = await runtime.runPythonAsync(GRADER_PYTHON);
        const cases = JSON.parse(raw);
        const passed = cases.filter((item) => item.ok).length;
        const result = { passed: passed, total: cases.length, cases: cases };
        writeLab(id, result, area.value);
        showResult(card, result);
        renderModuleScore();
      } catch (error) {
        card.querySelector(".scoreline").textContent = "Could not run the tests.";
        card.querySelector(".test-list").innerHTML = `<li class="bad">${esc(error)}</li>`;
      } finally {
        button.disabled = false;
        button.textContent = previous;
      }
    });
  });

  renderModuleScore();
})();

const GRADER_PYTHON = `
import json, os, shutil, tempfile, traceback, io, contextlib
tests = json.loads(tests_json)
folder = tempfile.mkdtemp(prefix="lab-")
old = os.getcwd()
report = []
try:
    os.chdir(folder)
    for test in tests:
        ns = {"__name__": "student"}
        def _blocked_input(*args, **kwargs):
            raise AssertionError("Do not call input(). Use the values already provided.")
        ns["input"] = _blocked_input
        try:
            _buffer = io.StringIO()
            with contextlib.redirect_stdout(_buffer):
                setup = test.get("setup") or ""
                if setup:
                    exec(setup, ns)
                exec(student_src, ns)
            ns["_printed"] = _buffer.getvalue()
            exec(test["code"], ns)
            report.append({"name": test["name"], "ok": True, "detail": ""})
        except Exception as error:
            detail = str(error).strip() or error.__class__.__name__
            report.append({"name": test["name"], "ok": False, "detail": detail})
finally:
    os.chdir(old)
    shutil.rmtree(folder, ignore_errors=True)
result = json.dumps(report)
result
`;
