import {
  BookOpen,
  Database,
  GitPullRequest,
  Search,
  Table2,
  Users,
  type LucideIcon,
} from "lucide-react";

export const agentIcons: Record<string, LucideIcon> = {
  "code-review": GitPullRequest,
  "ci-investigator": Search,
  "sql-analyst": Database,
  "spreadsheet-analyst": Table2,
  "docs-rag": BookOpen,
  "multi-agent-report": Users,
};
