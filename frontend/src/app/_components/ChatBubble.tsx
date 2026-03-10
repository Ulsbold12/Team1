"use client";
import { Button } from "@/components/ui/button";
import { ArrowUp, LoaderCircle, MessageCircle, Target, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LoadingVisual } from "./ChatLoadingVisuals";

type Message = {
  role: "user" | "assistant";
  content: string;
};
type ChatSectionProps = {
  chat: Message[];
  loading: boolean;
  input: string;
  setInput: (val: string) => void;
  setopen: (val: boolean) => void;
  GenerateMsg: (input: string) => void;
};
const ChatSection = ({
  chat,
  loading,
  input,
  setInput,
  setopen,
  GenerateMsg,
}: ChatSectionProps) => {
  return (
    <>
      <Card
        className={`absolute top-20 right-5  min-w-1/4 max-w-sm aspect-3/5 rounded-2xl shadow-xl shadow-gray-300 p-0`}
      >
        <div className="w-full h-full ">
          <div className={`p-2 flex gap-2 items-center`}>
            <Button
              size={"icon"}
              variant={"ghost"}
              className={`rounded-full`}
              onClick={() => {
                setopen(false);
              }}
            >
              <X />
            </Button>
            <p className="lg:text-xl text-xl font-medium">AI Assistant</p>
          </div>

          <CardContent
            className={`w-full h-[80%] flex-col flex gap-2 overflow-y-scroll `}
          >
            {chat.length !== 0 ? (
              <>
                {chat.map((c, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl px-3 py-1 h-fit w-fit min-h-8 flex items-center max-w-sm shadow-md ${c.role === "assistant" ? "bg-gray-700 shadow-gray-400  text-white" : "bg-gray-200 shadow-gray-300 self-end "}`}
                  >
                    <p>{c.content}</p>
                  </div>
                ))}
                <>
                  <div className="self-start">{loading && <LoadingVisual />}</div>
                </>
              </>
            ) : (
              <div
                className={`w-full h-full flex justify-center items-center text-gray-400`}
              >
                Hi! How can I help you?
              </div>
            )}
          </CardContent>
          <div className={` w-full p-2`}>
            <div className={`w-full  flex gap-2`}>
              <Input
                value={input}
                placeholder="Лавлах зүйлээ энд бичээд ENTER дарна уу"
                className={``}
                onChange={(e) => {
                  setInput(e.target.value);
                  e.preventDefault();
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    GenerateMsg(input);
                    setInput("");
                  }
                }}
              />
              <Button
                className={``}
                size={"icon"}
                onClick={() => {
                  GenerateMsg(input);
                  setInput("");
                }}
              >
                <ArrowUp />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
export default function ChatBubble() {
  const [open, setopen] = useState(false);
  const [chat, setChat] = useState<Message[] | []>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setloading] = useState(false);
  const [hover, setHover] = useState(false);

  async function GenerateMsg(input: string) {
    if (!input === null || input === "") {
      return;
    }
    const msg = input.trim();
    const updatedChat: Message[] = [...chat, { role: "user", content: msg }];

    setChat(updatedChat);

    console.log("📤 Sending:", JSON.stringify({ chats: updatedChat }, null, 2));

    try {
      setloading(true);
      const response = await fetch("http://localhost:8888/api/chat", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ chats: updatedChat }),
      });
      const { res } = await response.json();

      setChat((prev) => [...prev, { role: "assistant", content: res }]);
      setloading(false);
    } catch (e) {
      console.error(e);
      setloading(false);
    }
  }

  return (
    <div className={`${open ? "duration-300" : "duration-300"}`}>
      {open ? (
        <>
          <ChatSection
            chat={chat}
            loading={loading}
            input={input}
            setInput={setInput}
            setopen={setopen}
            GenerateMsg={GenerateMsg}
          />
        </>
      ) : (
        <Button
          onClick={() => {
            setopen(true);
            setHover(false);
          }}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          className={`${hover ? "rounded-2xl duration-200" : "rounded-full  duration-200"}`}
        >
          {hover ? <p>Help</p> : <MessageCircle />}
        </Button>
      )}
    </div>
  );
}
