export type ModelSettings = {
  model: "OpenAI GPT-4" | "Claude 3" | "Llama 3";
  temperature: number;
  maxTokens: number;
};

export type PromptVersion = {
  id: string;
  version: string;
  body: string;
  notes?: string;
  author: string;
  status: "active" | "inactive";
  lastModified: string; // ISO string
  model: ModelSettings;
};

export type Prompt = {
  id: string;
  name: string;
  versions: PromptVersion[];
};

export type AuditEntry = {
  id: string;
  action: "created" | "edited" | "activated" | "deactivated" | "duplicated" | "rolled_back" | "deleted";
  user: string;
  timestamp: string; // ISO string
  details?: string;
};

