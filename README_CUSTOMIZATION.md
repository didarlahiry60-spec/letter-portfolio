# Letter Port / Manila Folder Portfolio

এই প্রজেক্টটি `https://barthelemypousset.com/` সাইটের পূর্ণাঙ্গ রিভার্স-ইঞ্জিনিয়ার্ড সোর্স কোড। এটি সম্পূর্ণভাবে Next.js 16, React 19 এবং Tailwind CSS v4 দিয়ে নির্মিত।

---

## 🚀 কীভাবে রান করবেন (How to run)

১. টার্মিনালে এই ফোল্ডারে প্রবেশ করুন:
```bash
cd "/home/didar-lahiry/Antigravity/LETTER type port./code"
```

২. ডিপেনডেন্সি ইন্সটল করুন:
```bash
npm install
```

৩. ডেভেলপমেন্ট সার্ভার চালু করুন:
```bash
npm run dev
```

৪. আপনার ব্রাউজারে `http://localhost:3000` ওপেন করুন।

---

## 📁 ফাইল ও ফোল্ডার স্ট্রাকচার (File Structure)

```text
code/
├── app/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── AboutSection.tsx       # "About" ট্যাবের ভেতরের কন্টেন্ট
│   │   │   ├── SkillsSection.tsx      # "Skills" ট্যাবের স্কিলস ও এডুকেশন
│   │   │   ├── ProjectsSection.tsx    # "Projects" ট্যাবের প্রজেক্ট লিস্ট
│   │   │   └── ContactSection.tsx     # "Contact" ট্যাবের সোশ্যাল ও ইমেইল ফর্ম
│   │   ├── Card.tsx                   # কার্ড কম্পোনেন্ট
│   │   ├── ContactForm.tsx            # EmailJS দিয়ে ইমেইল সেন্ড করার ফর্ম
│   │   ├── ScotchedPhoto.tsx          # সামনের কভারে থাকা টেপ মারা ছবি ও ইস্টার এগ
│   │   ├── StickerLabel.tsx           # ফোল্ডারের ওপর স্টিকার ("My Stuff")
│   │   ├── Tab.tsx                    # ফোল্ডারের ওপরের ৪টি রঙিন ট্যাব
│   │   ├── TiltScreenModal.tsx        # মোবাইল পোর্ট্রেট মোডে স্ক্রিন রোটেট অ্যালার্ট
│   │   └── Timeline.tsx               # কাজের অভিজ্ঞতা বা টাইমলাইন বার
│   ├── globals.css                    # অ্যানিমেশন (@keyframes pull-over, put-back) ও Lined Paper ব্যাকগ্রাউন্ড
│   ├── layout.tsx                     # গুগল ফন্ট (Permanent Marker, Kalam, Geist)
│   └── page.tsx                       # মূল ফোল্ডার লেআউট, Z-index লেয়ারিং ও ওপেন/ক্লোজ স্টেট
├── public/
│   ├── photoBarth.jpg                 # সামনের কভারে স্কচটেপ দিয়ে লাগানো ছবি
│   ├── label.png                      # গুণমান বা স্ট্যাম্প স্টিকার
│   ├── profil.jpeg                    # About পেজের প্রোফাইল ছবি
│   ├── projects/                      # প্রজেক্টের স্ক্রিনশটসমূহ
│   └── corp/                          # কোম্পানি বা প্রতিষ্ঠানের লোগো
└── package.json
```

---

## 🎨 যেভাবে নিজের মতো কাস্টমাইজ করবেন (Customization Tips)

1. **আপনার নাম ও তথ্য পরিবর্তন:**
   * [app/page.tsx](file:///home/didar-lahiry/Antigravity/LETTER%20type%20port./code/app/page.tsx)-এ `<StickerLabel text="Barth's Stuff" />` বদলে আপনার নাম দিন (যেমন: `"Didar's Portfolio"` বা `"My Stuff"`).
   * [app/components/sections/AboutSection.tsx](file:///home/didar-lahiry/Antigravity/LETTER%20type%20port./code/app/components/sections/AboutSection.tsx)-এ আপনার নাম, পরিচয় ও বায়ো আপডেট করুন।
   * [app/components/sections/SkillsSection.tsx](file:///home/didar-lahiry/Antigravity/LETTER%20type%20port./code/app/components/sections/SkillsSection.tsx)-এ আপনার স্কিল ও টেকনোলজি লিখুন।
   * [app/components/sections/ProjectsSection.tsx](file:///home/didar-lahiry/Antigravity/LETTER%20type%20port./code/app/components/sections/ProjectsSection.tsx)-এ আপনার প্রজেক্ট যোগ করুন।

2. **ছবি পরিবর্তন:**
   * `public/photoBarth.jpg` সরিয়ে আপনার নিজের ছবি একই নামে বা অন্য নামে রেখে [app/page.tsx](file:///home/didar-lahiry/Antigravity/LETTER%20type%20port./code/app/page.tsx)-এ পাথ পরিবর্তন করুন।

3. **স্কচটেপ ইস্টার এগ (Easter Egg):**
   * [app/components/ScotchedPhoto.tsx](file:///home/didar-lahiry/Antigravity/LETTER%20type%20port./code/app/components/ScotchedPhoto.tsx)-এ দুটি টেপে ক্লিক করলে ছবি পড়ে গিয়ে নিচে একটি লিঙ্ক ওপেন হয় (ডিফল্টভাবে রিকরোল ইউটিউব লিংক দেওয়া আছে)। আপনি চাইলে সেখানে অন্য কোনো লিঙ্ক বা সিক্রেট মেসেজ দিতে পারেন।
