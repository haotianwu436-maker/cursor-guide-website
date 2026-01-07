import { Link } from "wouter";
import { X } from "lucide-react";
import { guideSections } from "../data/guide";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const categories = {
    quickstart: "快速开始",
    prompts: "提示词",
    tips: "技巧",
    workflow: "工作流程",
    templates: "模板",
    faq: "常见问题",
  };

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:relative w-64 h-screen bg-card border-r border-border overflow-y-auto transition-transform duration-300 z-40 md:z-0 ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-4 md:p-6">
          <div className="flex items-center justify-between mb-6 md:hidden">
            <h2 className="font-bold">导航</h2>
            <button onClick={onClose} className="p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="space-y-1">
            {guideSections.map((section) => (
              <Link
                key={section.id}
                href={`/guide/${section.id}`}
                onClick={onClose}
                className="block px-3 py-2 rounded-lg text-sm hover:bg-muted transition-colors"
              >
                {section.title}
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-border">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase mb-3">
              功能分类
            </h3>
            <div className="space-y-1">
              <Link
                href="/prompts?category=核心功能"
                onClick={onClose}
                className="block px-3 py-2 rounded-lg text-sm hover:bg-muted transition-colors"
              >
                核心功能
              </Link>
              <Link
                href="/prompts?category=功能完善"
                onClick={onClose}
                className="block px-3 py-2 rounded-lg text-sm hover:bg-muted transition-colors"
              >
                功能完善
              </Link>
              <Link
                href="/prompts?category=数据优化"
                onClick={onClose}
                className="block px-3 py-2 rounded-lg text-sm hover:bg-muted transition-colors"
              >
                数据优化
              </Link>
              <Link
                href="/prompts?category=专业化"
                onClick={onClose}
                className="block px-3 py-2 rounded-lg text-sm hover:bg-muted transition-colors"
              >
                专业化
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
