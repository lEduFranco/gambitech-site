import {
  Calendar,
  CreditCard,
  Globe,
  LayoutDashboard,
  Package,
  Percent,
  Repeat,
  Scissors,
  Store,
  UserCircle,
  Users,
  XCircle,
  type LucideIcon,
} from "lucide-react";

export const clipperModuleIcons: Record<string, LucideIcon> = {
  agendamentos: Calendar,
  funcionarios: Users,
  repasse: Percent,
  assinaturas: CreditCard,
  dashboard: LayoutDashboard,
  gestao: Store,
};

export const loopayModuleIcons: Record<string, LucideIcon> = {
  landing: Globe,
  planos: Package,
  vendedor: LayoutDashboard,
  assinante: UserCircle,
  cancelamento: XCircle,
  produtos: Repeat,
};

export function getModuleIcon(projectId: string, moduleId: string): LucideIcon {
  if (projectId === "clipper") return clipperModuleIcons[moduleId] ?? Scissors;
  if (projectId === "loopay") return loopayModuleIcons[moduleId] ?? CreditCard;
  return Package;
}
