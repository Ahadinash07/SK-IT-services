# SK IT Services – Next.js + Tailwind

    npm install
    npm run dev     # http://localhost:3000
    npm run build && npm start

- All business info/content: `lib/data.js` (phone, email, address, hours, FAQ, reviews, form options).
- WhatsApp/call number (+601157579656): `lib/data.js` → `BIZ`; every form/CTA lead goes through `lib/whatsapp.js`.
- Stepper quote form (Device → Model → Issue): `components/QuoteModal.js`.
- Photos live in `public/images/` (from your Archive.zip, resized). Rendered through `components/Photo.js`.
- Reviews/stats/opening hours come from the design mock-up – replace with real data before launch.
