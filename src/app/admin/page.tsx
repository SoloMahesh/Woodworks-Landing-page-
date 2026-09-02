import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import Link from "next/link";
import * as LucideIcons from "lucide-react";

const { Plus, LayoutDashboard, Package, Inbox, LogOut } = LucideIcons;

export default async function AdminDashboard() {
  const session = await getServerSession();

  if (!session) {
    redirect("/auth/signin");
  }

  return (
    <div className="flex min-h-screen bg-surface">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-surface p-8 space-y-12">
        <div className="text-2xl font-serif tracking-tight">
          wood<span className="text-accent italic">admin</span>
        </div>
        
        <nav className="space-y-4">
          <Link href="/admin" className="flex items-center space-x-3 text-sm uppercase tracking-widest font-semibold text-accent">
            {LayoutDashboard ? <LayoutDashboard size={18} /> : null}
            <span>Dashboard</span>
          </Link>
          <Link href="/admin/products" className="flex items-center space-x-3 text-sm uppercase tracking-widest font-semibold opacity-60 hover:opacity-100 transition-opacity">
            {Package ? <Package size={18} /> : null}
            <span>Products</span>
          </Link>
          <Link href="/admin/inquiries" className="flex items-center space-x-3 text-sm uppercase tracking-widest font-semibold opacity-60 hover:opacity-100 transition-opacity">
            {Inbox ? <Inbox size={18} /> : null}
            <span>Inquiries</span>
          </Link>
        </nav>

        <div className="pt-20">
          <Link href="/api/auth/signout" className="flex items-center space-x-3 text-xs uppercase tracking-widest font-semibold opacity-40 hover:opacity-100 transition-opacity">
            {LogOut ? <LogOut size={16} /> : null}
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-serif">Overview</h1>
          <Link 
            href="/admin/products/new" 
            className="bg-accent text-surface px-6 py-3 text-xs uppercase tracking-widest font-bold flex items-center space-x-2 hover:bg-primary transition-colors"
          >
            {Plus ? <Plus size={16} /> : null}
            <span>Add Product</span>
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 border border-primary/5 shadow-sm">
            <span className="text-[10px] uppercase tracking-widest text-primary/60 block mb-2">Total Products</span>
            <span className="text-4xl font-serif">12</span>
          </div>
          <div className="bg-white p-8 border border-primary/5 shadow-sm">
            <span className="text-[10px] uppercase tracking-widest text-primary/60 block mb-2">New Inquiries</span>
            <span className="text-4xl font-serif text-accent">04</span>
          </div>
          <div className="bg-white p-8 border border-primary/5 shadow-sm">
            <span className="text-[10px] uppercase tracking-widest text-primary/60 block mb-2">Projects Completed</span>
            <span className="text-4xl font-serif">86</span>
          </div>
        </div>

        <div className="bg-white border border-primary/5 shadow-sm">
          <div className="p-6 border-b border-primary/5 flex justify-between items-center">
            <h3 className="text-xl font-serif">Recent Inquiries</h3>
            <Link href="/admin/inquiries" className="text-[10px] uppercase tracking-widest font-bold border-b border-primary">View All</Link>
          </div>
          <div className="p-0">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] uppercase tracking-widest text-primary/40 border-b border-primary/5">
                  <th className="px-6 py-4 font-semibold">Client</th>
                  <th className="px-6 py-4 font-semibold">Interest</th>
                  <th className="px-6 py-4 font-semibold">Date</th>
                  <th className="px-6 py-4 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm font-light">
                <tr className="border-b border-primary/5">
                  <td className="px-6 py-4">Jane Smith</td>
                  <td className="px-6 py-4 italic">Walnut Dining Table</td>
                  <td className="px-6 py-4 opacity-60">2 hours ago</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-accent text-[10px] uppercase tracking-widest font-bold">View</button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Robert Brown</td>
                  <td className="px-6 py-4 italic">Custom Desk</td>
                  <td className="px-6 py-4 opacity-60">5 hours ago</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-accent text-[10px] uppercase tracking-widest font-bold">View</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
