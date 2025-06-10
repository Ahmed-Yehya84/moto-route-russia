---

### 🇸🇦 Arabic – `README.ar.md`

````markdown
# 🏍️ موتو روت روسيا

**MotoRoute Russia** هو تطبيق لتخطيط الرحلات لمحبي الدراجات النارية الذين يستكشفون روسيا الواسعة. سواء كنت تخطط لرحلة طويلة عبر البلاد أو جولة قصيرة في عطلة نهاية الأسبوع، فإن هذا التطبيق يساعدك على تنظيم رحلتك وتوثيقها ومشاركتها.

## ✨ الميزات (الحالية والقادمة)

- ✅ إنشاء المستخدمين والرحلات
- ✅ ربط الرحلات بالمستخدمين
- 🔜 تسجيل يومي للرحلة: نقاط التوقف، الطقس، الوقود
- 🔜 تسجيل الدخول باستخدام JWT عبر Passport.js
- 🔜 تكامل مع خرائط Google أو Yandex
- 🔜 مشاركة الرحلات مع الآخرين

## 🛠️ التقنيات المستخدمة

- **الخلفية:** Node.js, Express.js, Sequelize ORM
- **قاعدة البيانات:** PostgreSQL
- **المصادقة:** Passport.js (JWT)
- **الواجهة الأمامية:** HTML, CSS (منهجية BEM)
- **أخرى:** Sequelize CLI, Dotenv, Nodemon

## 📸 المعاينة

> أضف لقطات الشاشة في مجلد `/screenshots/`.

![الصفحة الرئيسية](screenshots/homepage.png)
![مثال على رحلة](screenshots/trip-view.png)

## 📦 التثبيت

```bash
git clone https://github.com/yourusername/moto-route-russia.git
cd moto-route-russia
npm install
npx sequelize-cli db:migrate
node scripts/testUser.js
```
````

👨‍💻 المطور
أحمد يحيى — مطور واجهات أمامية، ومغامر، وساحر ويب طموح 🧙‍♂️
هذا المشروع جزء من ملفي الشخصي ورسالة حب لرحلات الدراجات النارية الطويلة عبر روسيا.

"رحلة الألف ميل تبدأ بسطر واحد من الشيفرة." — MotoRoute Russia
