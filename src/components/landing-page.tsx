import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export default function LandingPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted" dir="rtl">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold">
            Logo
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              {theme === 'dark' ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">
            וובינר בחינם לאנשים שרוצים להיות במסלול הנכון:
          </h1>
          <h2 className="text-2xl mb-8 text-center">
            איך לבנות אפליקציה רווחית שאפשר להתחיל למכור תוך 6 חודשים
            <br />
            (גם אם אין לך רעיון וגם אם אתה לא יודע לכתוב אפילו שורה אחת של קוד)
          </h2>

          {/* Timer */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold">13</div>
              <div className="text-sm">שניות</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">33</div>
              <div className="text-sm">דקות</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">06</div>
              <div className="text-sm">שעות</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">03</div>
              <div className="text-sm">ימים</div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-card p-6 rounded-lg shadow-lg mb-12">
            <h3 className="text-xl font-bold mb-4 text-center">הרשמה לוובינר הקרוב בחינם 👇🏻</h3>
            <p className="text-center mb-6">יום ראשון |16/02/25 | בשעה 18:00</p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="שם מלא"
                className="w-full p-3 rounded border bg-background"
              />
              <input
                type="tel"
                placeholder="פלאפון"
                className="w-full p-3 rounded border bg-background"
              />
              <input
                type="email"
                placeholder="מייל"
                className="w-full p-3 rounded border bg-background"
              />
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">
                  אני מאשר/ת לקבל תזכורות לגבי הוובינר ותוכן שיווקי בוואטסאפ ובמייל
                </span>
              </label>
              <Button className="w-full">הרשמה לוובינר</Button>
              <p className="text-sm text-center text-muted-foreground">
                *מספר המקומות מוגבל ל-100 אנשים בלבד
              </p>
            </form>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center mb-8">על מה נדבר בוובינר</h3>
            <div className="space-y-4">
              <div className="p-4 bg-card rounded-lg">
                <p>המודל העסקי שיאפשר לך ליצור הכנסה עם אחוזי רווח גבוהים</p>
              </div>
              <div className="p-4 bg-card rounded-lg">
                <p>איך אפשר להקים עסק שלא יהיה תלוי רק בך בלי בוס על הראש</p>
              </div>
              <div className="p-4 bg-card rounded-lg">
                <p>איך להיות מסוגל לשלב איתו גם חיים אישיים (אולי סוף סוף תמצא חברה)</p>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="mt-12 space-y-6">
            <p>
              כל המנטורים באינסטגרם צועקים עלינו שכדי להגיע לחופש כלכלי, אנחנו חייבים לפתוח עסק
              <br />
              וזו טעות!
            </p>
            <p>
              כל החברות הגדולות שאנחנו משלמים להן כל חודש עובדות במודל שונה
              <br />
              ספוטיפיי, נטפליקס, יוטיוב פרימיום - הן מבינות משהו שאנחנו עדיין לא..
            </p>
            
            {/* Continue with the rest of the content... */}
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">שאלות נפוצות</h3>
            <div className="space-y-4">
              <div className="p-4 bg-card rounded-lg">
                <h4 className="font-bold mb-2">מה זה SaaS בכלל?</h4>
              </div>
              <div className="p-4 bg-card rounded-lg">
                <h4 className="font-bold mb-2">כמה טוב צריך להיות באנגלית?</h4>
              </div>
              <div className="p-4 bg-card rounded-lg">
                <h4 className="font-bold mb-2">מה אם אין לי רעיון?</h4>
              </div>
              {/* Add more FAQ items */}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-12 text-center">
            <Button size="lg" className="w-full md:w-auto">
              שריין מקום לוובינר בחינם
            </Button>
          </div>

          {/* Footer */}
          <footer className="mt-12 text-center text-sm text-muted-foreground">
            <p>תקנון ומדיניות פרטיות | הצהרת נגישות</p>
          </footer>
        </div>
      </div>
    </div>
  );
}