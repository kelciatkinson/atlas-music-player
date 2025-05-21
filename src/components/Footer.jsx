export default function Footer() {
  const year = new Date().getFullYear();
  return <div className="text-center p-8 text-(--color-text) dark:text-(--color-dark-text)">&copy; {year} Atlas School</div>;
}
