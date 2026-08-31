// إعدادات الأمان — لا تضع كلمة المرور كنص واضح هنا
// غيّر كلمة المرور من تبويب «الأمان» داخل اللوحة ثم نزّل هذا الملف وارفعه إلى Vercel
window.ADMIN_CONFIG = {
  // SHA-256 لكلمة المرور الجديدة
  passwordHash: "24bfeb293a444ffcac034e64e6d205bf362685659f533d5c3e82616afec6ec01",
  maxAttempts: 5,
  lockMinutes: 1,
  sessionHours: 2
};
