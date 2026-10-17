import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.skitservices.com.my"),
  title: "SK IT Services | Laptop Repair, Refurbished Laptops & IT Support in Kuala Lumpur",
  description: "Buy refurbished laptops, get laptop repair and computer repair, or book office network setup and IT support in Kuala Lumpur with SK IT Services. Call +60 11-5757 9656 for a free quote.",
  keywords: "laptop repair Kuala Lumpur, computer repair Kuala Lumpur, refurbished laptops Kuala Lumpur, custom PC builder Kuala Lumpur, IT support for small business Kuala Lumpur",
  openGraph: { title: "SK IT Services | Your Trusted Partner in IT Solutions", description: "Quality computers, professional repairs and practical IT solutions in Kuala Lumpur.", images: ["/og-image.jpg"], type: "website", locale: "en_MY" },
};
export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#0e1b17" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="overflow-x-hidden w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
