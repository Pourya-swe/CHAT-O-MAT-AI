function TypingDots() {
  return (
    <div className="flex justify-start text-sm text-muted">
      <span className="inline-flex items-center gap-1">
        <span className="animate-pulseDot inline-block w-2 h-2 rounded-full bg-muted"></span>
        <span
          className="animate-pulseDot inline-block w-2 h-2 rounded-full bg-muted"
          style={{ animationDelay: "0.2s" }}
        ></span>
        <span
          className="animate-pulseDot inline-block w-2 h-2 rounded-full bg-muted"
          style={{ animationDelay: "0.4s" }}
        ></span>
      </span>
    </div>
  );
}

export default TypingDots;
