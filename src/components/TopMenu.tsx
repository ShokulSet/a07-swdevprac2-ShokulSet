import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <nav className="flex items-center justify-end gap-4 px-6 py-3 bg-white shadow-sm">
      <TopMenuItem title="Booking" pageRef="/booking" />
    </nav>
  );
}
