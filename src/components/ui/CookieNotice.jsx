import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "marcsivital_cookie_notice_dismissed";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Süti és adatkezelési tájékoztató"
      className="fixed bottom-0 inset-x-0 z-[60] p-4 pointer-events-none"
    >
      <div className="max-w-3xl mx-auto pointer-events-auto rounded-2xl bg-gray-900 text-gray-100 shadow-2xl border border-gray-700 p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:items-center">
        <p className="text-sm leading-relaxed flex-1">
          Az oldal a kosárhoz és a működéshez szükséges adatokat a böngésződben tárolja.
          A hírlevélhez és üzenetekhez megadott adatokat az{" "}
          <Link to="/adatvedelem" className="underline text-brand-300 hover:text-brand-200">
            Adatvédelmi tájékoztató
          </Link>{" "}
          szerint kezeljük.
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 rounded-full bg-brand-500 hover:bg-brand-400 text-white font-semibold text-sm px-5 py-2.5 transition-colors"
        >
          Értem
        </button>
      </div>
    </div>
  );
}
