import { useParams } from "react-router";
import { useEffect, useState, useRef } from "react";
import type { Conversation } from "../types/chat";
import { sampleConversations } from "../sampleData";
import MessageList from "../components/ui/MessageList";

export default function ChatConversation() {
  const { conversationId } = useParams();
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // TODO 実際のアプリではAPIからデータを取得する
    const foundConversation = sampleConversations.find(
      (c) => c.id === conversationId,
    );
    if (foundConversation) {
      setConversation(foundConversation);
    }
  }, [conversationId]);

  useEffect(() => {
    if (conversation?.messages.length) {
      messagesEndRef.current?.scrollIntoView();
    }
  }, [conversation]);

  if (!conversation) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center text-2xl font-bold">
          指定したIDの会話が見つかりません
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col">
      <div className="sticky top-0 z-10 border-b border-gray-200 bg-white p-4">
        <h1 className="text-xl font-bold">{conversation.title}</h1>
      </div>
      <div className="flex flex-1 justify-center overflow-y-auto bg-white">
        <div className="w-3xl">
          <MessageList messages={conversation.messages} />
          <div ref={messagesEndRef} />
        </div>
      </div>
    </div>
  );
}
