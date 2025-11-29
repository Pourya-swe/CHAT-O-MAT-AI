import { useEffect, useRef } from "react";
import useChat from "../hooks/useChat";
import MessageItem from "./MessageItem";
import TypingDots from "./TypingDots";

// const mockChatMessages: ChatMessage[] = [
//   {
//     id: "1",
//     role: "user",
//     content: "سلام، نیاز به کمک دارم.",
//     createdAt: "2024-01-15T09:30:00Z",
//   },
//   {
//     id: "2",
//     role: "assistant",
//     content: "سلام! خوشحال می‌شوم بتوانم کمک کنم. چه مشکلی دارید؟",
//     createdAt: "2024-01-15T09:31:15Z",
//   },
//   {
//     id: "3",
//     role: "user",
//     content:
//       "نمی‌توانم به حساب کاربری‌ام وارد شوم. می‌گوید رمز عبور اشتباه است.",
//     createdAt: "2024-01-15T09:32:30Z",
//   },
//   {
//     id: "4",
//     role: "assistant",
//     content:
//       "متاسفم که این مشکل رو دارید. آیا ویژگی 'فراموشی رمز عبور' رو برای بازنشانی رمز امتحان کردید؟",
//     createdAt: "2024-01-15T09:33:45Z",
//   },
//   {
//     id: "5",
//     role: "user",
//     content: "بله، اما ایمیلی برای بازنشانی دریافت نمی‌کنم.",
//     createdAt: "2024-01-15T09:35:00Z",
//   },
//   {
//     id: "6",
//     role: "assistant",
//     content:
//       "بگذارید بررسی کنم که آیا مشکلی در سیستم ایمیل ما وجود دارد. لطفاً تأیید کنید که آدرس ایمیل صحیح مربوط به حساب خود را بررسی می‌کنید؟",
//     createdAt: "2024-01-15T09:36:20Z",
//   },
//   {
//     id: "7",
//     role: "user",
//     content:
//       "مطمئنم که ایمیل درست رو چک می‌کنم. آدرس ایمیل من ali@email.com است",
//     createdAt: "2024-01-15T09:37:40Z",
//   },
//   {
//     id: "8",
//     role: "assistant",
//     content:
//       "ممنون از تأیید شما. می‌بینم که حساب شما فعال است. اجازه دهید ایمیل بازنشانی رمز عبور را مجدداً ارسال کنم و همچنین تنظیمات فیلتر اسپم را بررسی کنم.",
//     createdAt: "2024-01-15T09:39:00Z",
//   },
//   {
//     id: "9",
//     role: "user",
//     content: "برای توسعه وب چه زبان‌های برنامه‌نویسی را توصیه می‌کنید؟",
//     createdAt: "2024-01-15T10:15:00Z",
//   },
//   {
//     id: "10",
//     role: "assistant",
//     content:
//       "برای توسعه وب مدرن، پیشنهاد می‌کنم با HTML، CSS و JavaScript برای فرانت‌اند شروع کنید. برای بک‌اند، انتخاب‌های محبوب شامل Node.js، Python، Ruby یا Java هستند. آیا می‌خواهید توصیه‌های خاص‌تری بر اساس پروژه خود دریافت کنید؟",
//     createdAt: "2024-01-15T10:16:30Z",
//   },
//   {
//     id: "11",
//     role: "user",
//     content:
//       "من علاقه‌مند به ساخت یک برنامه React هستم. چه چیزهایی باید یاد بگیرم؟",
//     createdAt: "2024-01-15T10:18:00Z",
//   },
//   {
//     id: "12",
//     role: "assistant",
//     content:
//       "انتخاب عالی! برای React، باید مبانی JavaScript را به خوبی بلد باشید، سپس مفاهیم React مانند کامپوننت‌ها، هوک‌ها، مدیریت وضعیت و JSX را یاد بگیرید. همچنین توصیه می‌کنم تکنولوژی‌های مرتبط مانند React Router برای ناوبری و یک کتابخانه مدیریت وضعیت مانند Redux یا Zustand را یاد بگیرید.",
//     createdAt: "2024-01-15T10:19:45Z",
//   },
//   {
//     id: "13",
//     role: "user",
//     content: "آیا می‌توانید به من در دیباگ کردن این کد JavaScript کمک کنید؟",
//     createdAt: "2024-01-15T11:05:00Z",
//   },
//   {
//     id: "14",
//     role: "assistant",
//     content:
//       "حتماً! لطفاً کدی که با آن مشکل دارید به همراه هر پیام خطایی که دریافت می‌کنید به اشتراک بگذارید، و من تمام تلاشم را می‌کنم تا به شما در دیباگ کردن آن کمک کنم.",
//     createdAt: "2024-01-15T11:06:15Z",
//   },
//   {
//     id: "15",
//     role: "user",
//     content: "چطور یک div را با استفاده از CSS در وسط صفحه قرار دهم؟",
//     createdAt: "2024-01-15T11:30:00Z",
//   },
//   {
//     id: "16",
//     role: "assistant",
//     content:
//       "راه‌های مختلفی برای وسط چین کردن یک div در CSS وجود دارد. برای وسط چین کردن افقی، می‌توانید از `margin: 0 auto;` روی div استفاده کنید. برای وسط چین کردن هم افقی و هم عمودی، می‌توانید از Flexbox با `display: flex; justify-content: center; align-items: center;` روی کانتینر والد استفاده کنید. آیا می‌خواهید مثال‌های بیشتری ارائه دهم؟",
//     createdAt: "2024-01-15T11:31:30Z",
//   },
//   {
//     id: "17",
//     role: "user",
//     content: "تفاوت بین let و const در JavaScript چیست؟",
//     createdAt: "2024-01-15T12:00:00Z",
//   },
//   {
//     id: "18",
//     role: "assistant",
//     content:
//       "در JavaScript، `const` برای متغیرهایی استفاده می‌شود که مجدداً مقداردهی نخواهند شد، در حالی که `let` برای متغیرهایی استفاده می‌شود که ممکن است مجدداً مقداردهی شوند. `const` متغیر را غیرقابل تغییر نمی‌کند، فقط از مقداردهی مجدد جلوگیری می‌کند. برای مقادیر اولیه، هر دو به طور مشابه کار می‌کنند، اما برای آبجکت‌ها، شما همچنان می‌توانید ویژگی‌های یک آبجکت `const` را تغییر دهید.",
//     createdAt: "2024-01-15T12:01:45Z",
//   },
//   {
//     id: "19",
//     role: "user",
//     content: "ممنون از همه کمک‌هایی که امروز کردید!",
//     createdAt: "2024-01-15T12:30:00Z",
//   },
//   {
//     id: "20",
//     role: "assistant",
//     content:
//       "خواهش می‌کنم! خوشحالم که توانستم کمک کنم. اگر سؤال دیگری دارید، خوشحال می‌شوم کمک کنم. روز خوبی داشته باشید!",
//     createdAt: "2024-01-15T12:31:00Z",
//   },
// ];

function ChatBox() {
  const { messages, isTyping } = useChat();
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    // Note: dir="auto" is used to let the browser determine the text direction based on content (Mixed Farsi + English).
    <div
      dir="auto"
      className="pt-2 self-center w-full max-w-4xl basis-auto h-full grow min-h-2/4"
    >
      <div className="space-y-3">
        {messages.map((message) => (
          <div key={message.id}>
            <MessageItem message={message} />
          </div>
        ))}
        {isTyping && <TypingDots />}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

export default ChatBox;
