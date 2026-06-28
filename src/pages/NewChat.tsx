import ChatInput from "../components/ui/ChatInput";

export default function NewChat() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-full max-w-xl flex-col gap-2">
        <h1 className="text-center text-3xl font-bold">test-user さん</h1>
        <ChatInput />
      </div>
    </div>
  );
}
