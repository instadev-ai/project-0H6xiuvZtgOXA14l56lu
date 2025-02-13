import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const LandingPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">
          וובינר בחינם לאנשים שרוצים להיות במסלול הנכון
        </h1>
        <p className="text-xl mb-8">
          איך לבנות אפליקציה רווחית שאפשר להתחיל למכור תוך 6 חודשים
          <br />
          (גם אם אין לך רעיון וגם אם אתה לא יודע לכתוב אפילו שורה אחת של קוד)
        </p>
        
        {/* Countdown Timer */}
        <div className="flex justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold">03</div>
            <div className="text-sm">ימים</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">06</div>
            <div className="text-sm">שעות</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">44</div>
            <div className="text-sm">דקות</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">14</div>
            <div className="text-sm">שניות</div>
          </div>
        </div>

        {/* Registration Form */}
        <Card className="max-w-md mx-auto p-6">
          <h2 className="text-2xl font-bold mb-4">הרשמה לוובינר הקרוב בחינם 👇🏻</h2>
          <p className="mb-4">יום ראשון |16/02/25 | בשעה 18:00</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="שם מלא"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
            <Input
              placeholder="פלאפון"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <Input
              placeholder="מייל"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, consent: checked as boolean })
                }
              />
              <label htmlFor="consent" className="text-sm">
                אני מאשר/ת לקבל תזכורות לגבי הוובינר ותוכן שיווקי בוואטסאפ ובמייל
              </label>
            </div>
            
            <Button type="submit" className="w-full">
              הרשמה לוובינר
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground mt-4 text-center">
            *מספר המקומות מוגבל ל-100 אנשים בלבד
          </p>
        </Card>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">על מה נדבר בוובינר</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="font-bold mb-2">
              המודל העסקי שיאפשר לך ליצור הכנסה עם אחוזי רווח גבוהים
            </h3>
          </Card>
          <Card className="p-6">
            <h3 className="font-bold mb-2">
              איך אפשר להקים עסק שלא יהיה תלוי רק בך בלי בוס על הראש
            </h3>
          </Card>
          <Card className="p-6">
            <h3 className="font-bold mb-2">
              איך להיות מסוגל לשלב איתו גם חיים אישיים
            </h3>
          </Card>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">עדויות תלמידים</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <p className="mb-4">
              "תוך פחות מ-4 חודשים סגרתי עסקה של 6 ספרות (מעל 100,000 שקל!) עוד לפני שהמוצר שלי היה מוכן!"
            </p>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">נעים מאוד, אני בן לביא</h2>
          <p>
            אחרי שמכרתי את החלק שלי בעסק השירות, התמקדתי בפיתוח ה-SaaS הראשון שלי,
            הבאתי אותו למחזורים של 6 ספרות בחודש וכבר עשיתי עליו אקזיט.
          </p>
        </Card>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">שאלות נפוצות</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-bold mb-2">מה זה SaaS בכלל?</h3>
          </Card>
          <Card className="p-6">
            <h3 className="font-bold mb-2">כמה טוב צריך להיות באנגלית?</h3>
          </Card>
          <Card className="p-6">
            <h3 className="font-bold mb-2">מה אם אין לי רעיון?</h3>
          </Card>
          <Card className="p-6">
            <h3 className="font-bold mb-2">האם צריך לדעת לתכנת?</h3>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-muted-foreground">
        <div className="space-x-4">
          <a href="#" className="hover:underline">תקנון</a>
          <a href="#" className="hover:underline">מדיניות פרטיות</a>
          <a href="#" className="hover:underline">הצהרת נגישות</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;