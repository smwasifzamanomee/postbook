import HorizontalNavigation from "../component/HorizontalNavigation";


export default function HorizontalLayout({ children, className }) {
  return (
    <div className={className}>        
        <HorizontalNavigation/>{children} 
    </div>
  );
}