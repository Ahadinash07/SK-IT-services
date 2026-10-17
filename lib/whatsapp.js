import { BIZ } from "./data";
// Every lead is sent to the SK IT Services WhatsApp number.
export const waLink = (text = "Hi SK IT Services, I'd like to enquire.") =>
  `https://wa.me/${BIZ.phoneWa}?text=${encodeURIComponent(text)}`;
export const telLink = `tel:${BIZ.phoneRaw}`;
export const openWhatsApp = (text) => {
  if (typeof window !== "undefined") window.open(waLink(text), "_blank", "noopener,noreferrer");
};
