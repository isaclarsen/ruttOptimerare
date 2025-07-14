const logoUrl = new URL('../assets/isbp-logo.png', import.meta.url).href;

export function Header() {
  return (
    <div className="flex justify-center">
      <img src={logoUrl} alt="logo" className="w-[312px] h-auto" />
    </div>
  );
}
