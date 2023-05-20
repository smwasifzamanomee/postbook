import VerticalNavigation from "../component/VerticalNavigation";


export default function VerticalLayout({ children, className }) {
  return (
    <div className={className}>
      <VerticalNavigation /> {children}
    </div>
  );
}