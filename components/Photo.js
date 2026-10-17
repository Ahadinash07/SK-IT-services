import Image from "next/image";
// Responsive cover photo. Give it a size via className, e.g. "h-44 w-full rounded-xl".
export default function Photo({ src, alt = "", className = "", sizes = "(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw", priority = false, pos = "center" }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" style={{ objectPosition: pos }} />
    </div>
  );
}
