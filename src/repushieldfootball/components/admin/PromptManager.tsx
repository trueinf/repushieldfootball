"use client";

import { useMemo, useState } from "react";
import type { Prompt, PromptVersion, AuditEntry, ModelSettings } from "./PromptTypes";

type View = "list" | "detail" | "editor" | "compare";

const initialPrompts: Prompt[] = [
  {
    id: "threat-detection",
    name: "Threat Detection",
    versions: [
      {
        id: "v2.1.4",
        version: "2.1.4",
        body: "Classify post into {categories}. Extract entities for {player_name} and clubs like {club_name}.",
        notes: "Small tweaks to improve identity attack recall.",
        author: "Sarah Chen",
        status: "active",
        lastModified: new Date().toISOString(),
        model: { model: "OpenAI GPT-4", temperature: 0.2, maxTokens: 800 },
      },
      {
        id: "v2.1.3",
        version: "2.1.3",
        body: "Classify and extract entities. Include confidence scores.",
        notes: "Stability improvements.",
        author: "Mike Johnson",
        status: "inactive",
        lastModified: new Date(Date.now() - 86400000).toISOString(),
        model: { model: "OpenAI GPT-4", temperature: 0.2, maxTokens: 800 },
      },
    ],
  },
  {
    id: "sentiment-analysis",
    name: "Sentiment Analysis",
    versions: [
      {
        id: "v1.8.2",
        version: "1.8.2",
        body: "Return sentiment for {post_text} in {language} with reasoning.",
        author: "Mike Johnson",
        status: "active",
        lastModified: new Date(Date.now() - 3600_000 * 24).toISOString(),
        model: { model: "Claude 3", temperature: 0.3, maxTokens: 512 },
      },
    ],
  },
  {
    id: "entity-recognition",
    name: "Entity Recognition",
    versions: [
      {
        id: "v1.5.1",
        version: "1.5.1",
        body: "Extract players and clubs mentioned in {post_text}.",
        author: "Alex Rodriguez",
        status: "inactive",
        lastModified: new Date(Date.now() - 3600_000 * 72).toISOString(),
        model: { model: "Llama 3", temperature: 0.1, maxTokens: 400 },
      },
    ],
  },
];

const initialAudit: AuditEntry[] = [
  { id: "a1", action: "activated", user: "Sarah Chen", timestamp: new Date().toISOString(), details: "Activated Threat Detection v2.1.4" },
  { id: "a2", action: "edited", user: "Mike Johnson", timestamp: new Date(Date.now() - 86_400_000).toISOString(), details: "Updated Sentiment prompt" },
  { id: "a3", action: "created", user: "Alex Rodriguez", timestamp: new Date(Date.now() - 172_800_000).toISOString(), details: "Added Entity Recognition" },
];

export default function PromptManager() {
  const [view, setView] = useState<View>("list");
  const [prompts, setPrompts] = useState<Prompt[]>(initialPrompts);
  const [audit] = useState<AuditEntry[]>(initialAudit);
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">("all");
  const [creatorFilter, setCreatorFilter] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<"recent" | "oldest">("recent");
  const [selected, setSelected] = useState<{ prompt: Prompt; version: PromptVersion } | null>(null);
  const [comparePair, setComparePair] = useState<{ a: PromptVersion; b: PromptVersion } | null>(null);
  const [editorDraft, setEditorDraft] = useState<{ name: string; body: string; model: ModelSettings; notes?: string } | null>(
    null
  );
  const [testInput, setTestInput] = useState("");
  const [testOutput, setTestOutput] = useState("");
  const [testValid, setTestValid] = useState<boolean | null>(null);

  const allCreators = useMemo(() => {
    const set = new Set<string>();
    prompts.forEach((p) => p.versions.forEach((v) => set.add(v.author)));
    return ["all", ...Array.from(set)];
  }, [prompts]);

  const activeCard = useMemo(() => {
    // find first active version among prompts for highlight
    for (const p of prompts) {
      const v = p.versions.find((x) => x.status === "active");
      if (v) return { prompt: p, version: v };
    }
    return null;
  }, [prompts]);

  const filtered = useMemo(() => {
    let items: { prompt: Prompt; version: PromptVersion }[] = [];
    prompts.forEach((p) => p.versions.forEach((v) => items.push({ prompt: p, version: v })));
    if (statusFilter !== "all") items = items.filter((i) => i.version.status === statusFilter);
    if (creatorFilter !== "all") items = items.filter((i) => i.version.author === creatorFilter);
    items.sort((a, b) =>
      sortOrder === "recent"
        ? new Date(b.version.lastModified).getTime() - new Date(a.version.lastModified).getTime()
        : new Date(a.version.lastModified).getTime() - new Date(b.version.lastModified).getTime()
    );
    return items;
  }, [prompts, statusFilter, creatorFilter, sortOrder]);

  function openDetail(item: { prompt: Prompt; version: PromptVersion }) {
    setSelected(item);
    setView("detail");
  }

  function openEditor(existing?: { prompt: Prompt; version?: PromptVersion }) {
    if (existing) {
      setEditorDraft({ name: existing.prompt.name, body: existing.version?.body ?? "", model: existing.version?.model ?? { model: "OpenAI GPT-4", temperature: 0.2, maxTokens: 800 } });
    } else {
      setEditorDraft({ name: "New Prompt", body: "", model: { model: "OpenAI GPT-4", temperature: 0.2, maxTokens: 800 } });
    }
    setView("editor");
  }

  function activateVersion(item: { prompt: Prompt; version: PromptVersion }) {
    setPrompts((prev) =>
      prev.map((p) =>
        p.id === item.prompt.id
          ? {
              ...p,
              versions: p.versions.map((v) => ({ ...v, status: v.id === item.version.id ? "active" : "inactive" })),
            }
          : p
      )
    );
  }

  function duplicateVersion(item: { prompt: Prompt; version: PromptVersion }) {
    const copy: PromptVersion = {
      ...item.version,
      id: `${item.version.id}-copy`,
      version: `${item.version.version} (copy)`,
      status: "inactive",
      lastModified: new Date().toISOString(),
    };
    setPrompts((prev) =>
      prev.map((p) => (p.id === item.prompt.id ? { ...p, versions: [copy, ...p.versions] } : p))
    );
  }

  function deleteVersion(item: { prompt: Prompt; version: PromptVersion }) {
    setPrompts((prev) =>
      prev.map((p) =>
        p.id === item.prompt.id ? { ...p, versions: p.versions.filter((v) => v.id !== item.version.id) } : p
      )
    );
    setView("list");
  }

  function runTest() {
    // Fake a structured JSON output and validate
    const simulated = {
      sentiment: "negative",
      threat_level: "high",
      confidence: 0.92,
      entities: ["Marcus Johnson"],
      input_preview: testInput.slice(0, 60),
    };
    const json = JSON.stringify(simulated, null, 2);
    setTestOutput(json);
    try {
      JSON.parse(json);
      setTestValid(true);
    } catch {
      setTestValid(false);
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Active Prompt Highlight */}
      {activeCard && (
        <div className="bg-white rounded-lg border border-blue-200 p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500">Active Prompt</div>
              <div className="text-lg font-semibold text-gray-900">{activeCard.prompt.name} v{activeCard.version.version}</div>
              <div className="text-sm text-gray-600 mt-1">
                Model: {activeCard.version.model.model} • Temp: {activeCard.version.model.temperature} • Tokens: {activeCard.version.model.maxTokens}
              </div>
            </div>
            <div className="space-x-2">
              <button
                className="border border-gray-300 text-gray-700 px-3 py-1.5 rounded-lg text-sm hover:bg-gray-50"
                onClick={() => openEditor({ prompt: activeCard.prompt, version: activeCard.version })}
              >
                Edit
              </button>
              <button className="bg-blue-500 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-blue-600">Roll Back</button>
            </div>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <select
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as any)}
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <select
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          value={creatorFilter}
          onChange={(e) => setCreatorFilter(e.target.value)}
        >
          {allCreators.map((c) => (
            <option key={c} value={c}>
              {c === "all" ? "All Creators" : c}
            </option>
          ))}
        </select>
        <select
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as any)}
        >
          <option value="recent">Sort: Last modified (newest)</option>
          <option value="oldest">Sort: Last modified (oldest)</option>
        </select>
        <div className="flex-1" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600" onClick={() => openEditor()}>+ New Prompt</button>
      </div>

      {/* Prompt List */}
      {view === "list" && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prompt Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Version</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Modified By</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Modified</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filtered.map((item) => (
                <tr key={`${item.prompt.id}-${item.version.id}`} className="hover:bg-gray-50 cursor-pointer" onClick={() => openDetail(item)}>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{item.prompt.name}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{item.version.version}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        item.version.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {item.version.status === "active" ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{item.version.author}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{new Date(item.version.lastModified).toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
                      <button className="text-blue-600 hover:text-blue-800" onClick={() => openEditor(item)}>Edit</button>
                      <button className="text-gray-600 hover:text-gray-800" onClick={() => duplicateVersion(item)}>Duplicate</button>
                      {item.version.status !== "active" && (
                        <button className="text-green-600 hover:text-green-800" onClick={() => activateVersion(item)}>
                          Activate
                        </button>
                      )}
                      <button className="text-red-600 hover:text-red-800" onClick={() => deleteVersion(item)}>Delete</button>
                      <button className="text-gray-600 hover:text-gray-800" onClick={() => { setSelected(item); setView("detail"); }}>View History</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Detail Page */}
      {view === "detail" && selected && (
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <button className="text-blue-600 hover:text-blue-800 text-sm" onClick={() => setView("list")}>← Back</button>
              <div>
                <div className="text-xs text-gray-500">Prompt Detail</div>
                <div className="text-lg font-semibold text-gray-900">{selected.prompt.name} v{selected.version.version}</div>
              </div>
            </div>
            <div className="space-x-2">
              <button className="border border-gray-300 text-gray-700 px-3 py-1.5 rounded-lg text-sm" onClick={() => openEditor(selected)}>Edit</button>
              <button className="bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm" onClick={() => activateVersion(selected)}>Activate</button>
              <button className="border border-gray-300 text-gray-700 px-3 py-1.5 rounded-lg text-sm" onClick={() => duplicateVersion(selected)}>Duplicate</button>
              <button className="text-red-600 px-3 py-1.5 rounded-lg text-sm" onClick={() => deleteVersion(selected)}>Delete</button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Prompt Body</h4>
                <pre className="text-sm text-gray-800 bg-gray-50 p-3 rounded border border-gray-200 whitespace-pre-wrap">{selected.version.body}</pre>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Version Notes</h4>
                <div className="text-sm text-gray-700">{selected.version.notes ?? "—"}</div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">History</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {selected.prompt.versions.map((v) => (
                    <li key={v.id} className="flex items-center justify-between">
                      <span>v{v.version} — {v.author}</span>
                      <div className="space-x-2">
                        <button className="text-blue-600 hover:text-blue-800" onClick={() => setComparePair({ a: selected.version, b: v }) || setView("compare")}>Compare</button>
                        <button className="text-green-600 hover:text-green-800" onClick={() => activateVersion({ prompt: selected.prompt, version: v })}>Activate</button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="font-medium text-gray-900 mb-2">Model Settings</div>
                <div className="text-sm text-gray-700">Model: {selected.version.model.model}</div>
                <div className="text-sm text-gray-700">Temperature: {selected.version.model.temperature}</div>
                <div className="text-sm text-gray-700">Max Tokens: {selected.version.model.maxTokens}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Editor */}
      {view === "editor" && editorDraft && (
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Prompt Editor</h3>
            <div className="space-x-2">
              <button className="border border-gray-300 text-gray-700 px-3 py-1.5 rounded-lg text-sm" onClick={() => setView("list")}>Cancel</button>
              <button className="bg-blue-500 text-white px-3 py-1.5 rounded-lg text-sm">Save Draft</button>
              <button className="bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm">Save & Activate</button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Prompt Name</label>
                <input
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  value={editorDraft.name}
                  onChange={(e) => setEditorDraft({ ...editorDraft, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Prompt Body</label>
                <textarea
                  className="w-full h-56 border border-gray-300 rounded-lg p-3 text-sm font-mono"
                  placeholder="Use placeholders like {player_name}, {club_name}, {post_text}, {language}"
                  value={editorDraft.body}
                  onChange={(e) => setEditorDraft({ ...editorDraft, body: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Validation Schema (JSON)</label>
                <textarea className="w-full h-40 border border-gray-300 rounded-lg p-3 text-sm font-mono" placeholder="Paste JSON schema (optional)" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="font-medium text-gray-900 mb-2">Variable Helpers</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>{`{player_name}`}</li>
                  <li>{`{club_name}`}</li>
                  <li>{`{post_text}`}</li>
                  <li>{`{language}`}</li>
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-2">
                <div className="font-medium text-gray-900">Model Settings</div>
                <label className="block text-sm text-gray-700">Model</label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  value={editorDraft.model.model}
                  onChange={(e) => setEditorDraft({ ...editorDraft, model: { ...editorDraft.model, model: e.target.value as ModelSettings["model"] } })}
                >
                  <option>OpenAI GPT-4</option>
                  <option>Claude 3</option>
                  <option>Llama 3</option>
                </select>
                <label className="block text-sm text-gray-700 mt-2">Temperature</label>
                <input
                  type="number"
                  min={0}
                  max={1}
                  step={0.1}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  value={editorDraft.model.temperature}
                  onChange={(e) => setEditorDraft({ ...editorDraft, model: { ...editorDraft.model, temperature: Number(e.target.value) } })}
                />
                <label className="block text-sm text-gray-700 mt-2">Max Tokens</label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  value={editorDraft.model.maxTokens}
                  onChange={(e) => setEditorDraft({ ...editorDraft, model: { ...editorDraft.model, maxTokens: Number(e.target.value) } })}
                />
              </div>
            </div>
          </div>

          {/* Test Console */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sample Post</label>
              <textarea
                className="w-full h-32 border border-gray-300 rounded-lg p-3 text-sm"
                placeholder="Paste a sample post here to test the prompt..."
                value={testInput}
                onChange={(e) => setTestInput(e.target.value)}
              />
              <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600" onClick={runTest}>
                Run Test
              </button>
              {testValid !== null && (
                <div className={`mt-2 text-sm ${testValid ? "text-green-700" : "text-red-700"}`}>
                  {testValid ? "✅ Valid JSON" : "❌ Error parsing JSON"}
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">JSON Output</label>
              <div className="w-full h-32 border border-gray-300 rounded-lg p-3 bg-gray-50 text-sm font-mono overflow-auto">
                <pre className="text-gray-700 whitespace-pre-wrap">{testOutput || "Run the test to see output"}</pre>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Compare View */}
      {view === "compare" && comparePair && (
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Compare Versions</h3>
            <button className="border border-gray-300 text-gray-700 px-3 py-1.5 rounded-lg text-sm" onClick={() => setView("list")}>Close</button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-500 mb-2">A: v{comparePair.a.version}</div>
              <pre className="text-sm text-gray-800 bg-gray-50 p-3 rounded border border-gray-200 whitespace-pre-wrap">{comparePair.a.body}</pre>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-2">B: v{comparePair.b.version}</div>
              <pre className="text-sm text-gray-800 bg-gray-50 p-3 rounded border border-gray-200 whitespace-pre-wrap">{comparePair.b.body}</pre>
            </div>
          </div>
        </div>
      )}

      {/* Audit Log */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Audit Log</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          {audit.map((a) => (
            <li key={a.id} className="flex items-center justify-between">
              <span>{a.user} {a.action} — {a.details}</span>
              <span className="text-xs text-gray-500">{new Date(a.timestamp).toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
